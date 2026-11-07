import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const { account, password, serverIp } = await req.json();

    if (!account || !password) {
      return NextResponse.json({ success: false, error: 'اسم الحساب وكلمة المرور مطلوبان' }, { status: 400 });
    }

    const cleanAcc = account.trim().toLowerCase();
    if (cleanAcc.length < 3 || cleanAcc.length > 24) {
      return NextResponse.json({ success: false, error: 'اسم الحساب يجب أن يكون بين 3 و 24 حرف' }, { status: 400 });
    }

    const md5Pass = crypto.createHash('md5').update(password).digest('hex');
    const targetIp = process.env.GAME_SERVER_IP || serverIp || '13.140.221.40';

    // 1. Try forwarding to the active Game Server HTTP Port (9528)
    try {
      const serverUrl = `http://${targetIp}:9528/register?a=${encodeURIComponent(cleanAcc)}&p=${md5Pass}`;
      const res = await fetch(serverUrl, { method: 'GET', cache: 'no-store' });
      const text = (await res.text()).trim();

      if (text.startsWith('ok')) {
        return NextResponse.json({ success: true, message: 'تم إنشاء الحساب بنجاح عبر السيرفر المباشر!' });
      } else if (text.startsWith('err')) {
        return NextResponse.json({ success: false, error: text.substring(4) }, { status: 400 });
      }
    } catch (e) {
      console.log('Game Server Port 9528 unreachable via HTTP, fallback to storage check.');
    }

    // 2. Direct Fallback: Write directly to data/accounts.json if running on server filesystem
    const dbPath = path.join(process.cwd(), '..', 'data', 'accounts.json');
    let accounts: Record<string, { pass: String; authority?: number }> = {};

    if (fs.existsSync(dbPath)) {
      try {
        const content = fs.readFileSync(dbPath, 'utf8');
        accounts = JSON.parse(content);
      } catch (err) {
        accounts = {};
      }
    }

    if (accounts[cleanAcc]) {
      return NextResponse.json({ success: false, error: 'هذا الحساب موجود بالفعل' }, { status: 400 });
    }

    accounts[cleanAcc] = {
      pass: md5Pass,
      authority: 0,
    };

    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(dbPath, JSON.stringify(accounts, null, 2), 'utf8');

    return NextResponse.json({
      success: true,
      message: 'تم تسجيل الحساب بنجاح في قاعدة بيانات اللعبة!',
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || 'حدث خطأ في السيرفر' }, { status: 500 });
  }
}
