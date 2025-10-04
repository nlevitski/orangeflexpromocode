import { getLocale, getTranslations } from 'next-intl/server';
import { tildaSans } from '@/fonts/fonts';
import { Metadata } from 'next';
import { routing } from '@/i18n/routing';

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('notFound');
	const canonicalPaths = routing.locales.map((locale) => {
		const path = locale === routing.defaultLocale ? '/' : `/${locale}/`;
		return { locale, path };
	});
	return {
		title: t('title'),
		description: t('description'),
		robots: {
			index: false,
			follow: false,
		},
		openGraph: {
			title: t('title'),
			description: t('description'),
			type: 'website',
			siteName: 'Orange Flex Promocode',
		},
		alternates: {
			canonical: '/',
			languages: Object.fromEntries(
				canonicalPaths.map((c) => [c.locale, c.path]),
			),
		},
	};
}

export default async function NotFound() {
	const { 0: locale, 1: t } = await Promise.all([
		getLocale(),
		getTranslations('notFound'),
	]);
	return (
		<html lang={locale}>
			<body className={tildaSans.variable}>
				<h1>{t('title')}</h1>
				<p>{t('description')}</p>
			</body>
		</html>
	);
}
