// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	locales: ['en', 'pl', 'ru', 'ua'],
	defaultLocale: 'pl',
	localePrefix: {
		mode: 'as-needed',
	},
});
