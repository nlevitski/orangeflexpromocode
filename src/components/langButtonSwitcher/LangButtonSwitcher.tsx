'use client';
import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import styles from './LangButtonSwitcher.module.css';
export const LangButtonSwitcher = () => {
	const currentLocale = useLocale();
	const pathname = usePathname();
	return (
		<>
			{routing.locales
				.filter((locale) => locale !== currentLocale)
				.map((locale) => (
					<Link
						className={styles.button}
						key={locale}
						locale={locale}
						href={pathname}
					>
						{locale}
					</Link>
				))}
		</>
	);
};
