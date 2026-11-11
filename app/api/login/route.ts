import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const CLASS_NAMES: Record<number, string> = {
  1000: 'تروجان (Trojan)',
  2000: 'سيّاف (Warrior)',
  3000: 'رامي (Archer)',
  4000: 'حاوي ماء (Water Taoist)',
  5000: 'حاوي نار (Fire Taoist)',
  6000: 'نينجا (Ninja)',
  7000: 'راهب (Monk)',
  8000: 'قرصان (Pirate)',
  9000: 'سفاح (Dragon Warrior)',
  10000: 'فارس (Windwalker)',
  16000: 'صاعق (Thunderstriker)',
};

export async function POST(req: NextRequest) {
  try {
    const { account, password } = await req.json();

    if (!account || !password) {
      return NextResponse.json({ success: false, error: 'اسم الحساب وكلمة المرور مطلوبان' }, { status: 400 });
    }

    const cleanAcc = account.trim().toLowerCase();
    const md5Pass = crypto.createHash('md5').update(password).digest('hex');
    const doubleMd5Pass = crypto.createHash('md5').update(md5Pass).digest('hex');
    const targetIp = process.env.GAME_SERVER_IP || '13.140.221.40';

    let validAccount = false;

    // 1. Live Validation against active Game Server HTTP Port (9528)
    try {
      const serverUrl = `http://${targetIp}:9528/login?a=${encodeURIComponent(cleanAcc)}&p=${md5Pass}`;
      const res = await fetch(serverUrl, { method: 'GET', cache: 'no-store' });
      const text = (await res.text()).trim();

      if (text.startsWith('ok')) {
        validAccount = true;
      }
    } catch (e) {
      console.log('Game Server Port 9528 unreachable via HTTP, fallback to local storage check.');
    }

    // 2. Fallback: Verify Password against accounts.json if live server didn't respond
    const accountsPath = path.join(process.cwd(), '..', 'data', 'accounts.json');

    if (!validAccount && fs.existsSync(accountsPath)) {
      try {
        const content = fs.readFileSync(accountsPath, 'utf8');
        const accounts = JSON.parse(content);
        if (accounts[cleanAcc]) {
          const storedPass = accounts[cleanAcc].pass.toLowerCase();
          if (storedPass === md5Pass.toLowerCase() || storedPass === doubleMd5Pass.toLowerCase() || storedPass === password.toLowerCase()) {
            validAccount = true;
          }
        }
      } catch (e) {
        console.error('Error reading accounts.json:', e);
      }
    }

    if (!validAccount) {
      return NextResponse.json({ success: false, error: 'اسم الحساب أو كلمة المرور غير صحيحة' }, { status: 401 });
    }

    // 2. Fetch Character Data from heroes.json
    const heroesPath = path.join(process.cwd(), '..', 'data', 'heroes.json');
    let heroData: any = null;

    if (fs.existsSync(heroesPath)) {
      try {
        const content = fs.readFileSync(heroesPath, 'utf8');
        const heroes = JSON.parse(content);

        // Find hero belonging to account
        for (const [key, h] of Object.entries(heroes) as [string, any][]) {
          if (h.account && h.account.toLowerCase() === cleanAcc) {
            heroData = h;
            break;
          }
          if (key.toLowerCase().startsWith(`${cleanAcc}_`)) {
            heroData = h;
            break;
          }
        }
      } catch (e) {
        console.error('Error reading heroes.json:', e);
      }
    }

    // Default character info if hero record not initialized yet
    const character = {
      account: cleanAcc,
      name: heroData?.name || cleanAcc,
      classId: heroData?.class || 1000,
      className: CLASS_NAMES[heroData?.class || 1000] || 'تروجان (Trojan)',
      level: heroData?.level || 1,
      reborn: heroData?.reborn || 0,
      money: heroData?.money || 100000,
      emoney: heroData?.emoney || 10000,
      boundEmoney: heroData?.bound_emoney || 0,
      pk: heroData?.pk || 0,
      vip: heroData?.vip || 0,
      mobKills: heroData?.mob_kills || 0,
      battlePower: (heroData?.level || 1) + ((heroData?.reborn || 0) * 5) + 12,
    };

    return NextResponse.json({
      success: true,
      message: 'تم تسجيل الدخول بنجاح!',
      character,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || 'حدث خطأ أثناء تسجيل الدخول' }, { status: 500 });
  }
}
