import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Fetch fresh signed high-speed CDN asset URL from GitHub Release API
    const response = await fetch(
      'https://api.github.com/repos/Mostafa-Falcon/Equinox-VS/releases/assets/723450927',
      {
        headers: {
          'Accept': 'application/octet-stream',
          'User-Agent': 'Equinox-VS-Portal',
        },
        redirect: 'manual',
        cache: 'no-store',
      }
    );

    const cdnUrl = response.headers.get('location');

    if (cdnUrl) {
      return NextResponse.redirect(cdnUrl, {
        status: 307,
        headers: {
          'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
        },
      });
    }

    // Fallback to release tag page
    return NextResponse.redirect(
      'https://github.com/Mostafa-Falcon/Equinox-VS/releases/tag/v1.0.6',
      307
    );
  } catch (error) {
    console.error('Failed to resolve APK CDN URL:', error);
    return NextResponse.redirect(
      'https://github.com/Mostafa-Falcon/Equinox-VS/releases/tag/v1.0.6',
      307
    );
  }
}
