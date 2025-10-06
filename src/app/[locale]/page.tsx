import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Orange } from '@/components/orange/Orange';
import { Hero } from '@/components/hero/Hero';
import { MainInstruction } from '@/components/mainInstruction/MainInstruction';
import { getLocale } from 'next-intl/server';
import { getMetadataForLocale } from '@/utils/metadata';
import { icons } from '@/utils/icons';

export async function generateStaticParams(): Promise<{ locale: string }[]> {
	return routing.locales.map((locale) => ({ locale }));
}
export async function generateMetadata() {
	const locale = await getLocale();
	return {
		...getMetadataForLocale(locale),
		icons,
	};
}
export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	return (
		<main>
			{/* {locale} */}
			<Hero />
			<MainInstruction />
			<Orange />
		</main>
	);
}
