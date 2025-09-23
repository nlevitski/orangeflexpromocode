import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export async function generateStaticParams(): Promise<{ locale: string }[]> {
	return routing.locales.map((locale) => ({ locale }));
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
	return <div>{locale}</div>;
}
