import { getTranslations, getLocale } from 'next-intl/server';
import styles from './Hero.module.css';
import { Fragment } from 'react';
import Image from 'next/image';

export const Hero = async () => {
	const locale = await getLocale();
	const t = await getTranslations('hero');
	const title = t('title');
	const paragraph = t('paragraph');
	return (
		<section className={`${styles.hero} ${styles[locale]}`}>
			<div className={styles.container}>
				<h2 className={styles.title}>
					{title.split('\n').map((line, i, arr) => (
						<Fragment key={i}>
							{line}
							{i < arr.length - 1 && <br />}
						</Fragment>
					))}
				</h2>
				<p className={styles.paragraph}>
					{paragraph.split('\n').map((line, i, arr) => (
						<Fragment key={i}>
							{line}
							{i < arr.length - 1 && <br />}
						</Fragment>
					))}
				</p>
			</div>
		</section>
	);
};
