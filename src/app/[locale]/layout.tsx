// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '../../i18n/routing';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
	children: ReactNode;
	params: Promise<{ locale: 'en' | 'pl' | 'ru' | 'ua' }>;
};

export default async function LocaleLayout({
	children,
	params,
}: LocaleLayoutProps) {
	const { locale } = await params;
	if (!routing.locales.includes(locale)) {
		notFound();
	}

	const messages = (await import(`../../../messages/${locale}.json`)).default;

	return (
		<html lang={locale}>
			<body>
				{children}
				{/* <NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider> */}
			</body>
		</html>
	);
}
