import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
const baseUrl =
	process.env.NEXT_PUBLIC_ORIGIN || 'https://orangeflexpromocode.com';
export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: routing.locales.map((locale) =>
			locale === routing.defaultLocale
				? `${baseUrl}/sitemap.xml`
				: `${baseUrl}/${locale}/sitemap.xml`,
		),
	};
}
