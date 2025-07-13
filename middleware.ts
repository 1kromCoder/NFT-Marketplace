import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const LOCALES = ['en', 'ru', 'uz']; // siz ishlatayotgan tillar
const DEFAULT_LOCALE = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Agar bu static file (masalan: .svg, .css) bo‘lsa, o‘tkazib yubor
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    pathname.includes('/_next')
  ) {
    return;
  }

  // URL allaqachon locale bilan boshlangan bo‘lsa — o‘tkazib yubor
  if (LOCALES.some((locale) => pathname.startsWith(`/${locale}`))) {
    return;
  }

  // Boshqa holatlarda — default locale (`/en`) ga redirect qil
  const locale = DEFAULT_LOCALE;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}
