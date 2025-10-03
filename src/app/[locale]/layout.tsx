import { routing } from '../../i18n/routing';
import { notFound } from 'next/navigation';
import { tildaSans } from '@/fonts/fonts';
import type { ReactNode } from 'react';
import { Footer } from '@/components/footer/Footer';
import { Menu } from '@/components/menu/Menu';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
	children: ReactNode;
	params: Promise<{ locale: 'en' | 'pl' | 'ua' | 'ru' }>;
};

export default async function LocaleLayout({
	children,
	params,
}: LocaleLayoutProps) {
	const {
		0: { locale },
		1: messages,
	} = await Promise.all([params, getMessages()]);
	const supportedLocale = locale as 'en' | 'pl' | 'ua' | 'ru';
	if (!routing.locales.includes(supportedLocale)) {
		notFound();
	}

	return (
		<html lang={supportedLocale}>
			<body className={tildaSans.variable}>
				<NextIntlClientProvider messages={messages.menu} locale={locale}>
					<Menu />
				</NextIntlClientProvider>
				{children}
				<Footer />
			</body>
		</html>
	);
}
