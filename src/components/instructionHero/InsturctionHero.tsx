import { getLocale, getTranslations } from 'next-intl/server';
import styles from './InstructionHero.module.css';
import { ButtonLink } from '../buttonLink/ButtonLink';

export const InstructionHero = async () => {
	const locale = await getLocale();
	const tIH = await getTranslations('instructionPage');
	return (
		<section className={`${styles.instructionHero} ${styles[locale]}`}>
			<div className={styles.container}>
				<h2 className={styles.title}>{tIH('hero.title')}</h2>
				<p className={styles.paragraph}>
					<span>{tIH('hero.paragraph1.part1')}</span>
					<span>
						<strong>{` ${tIH('hero.paragraph1.part2')} `}</strong>
					</span>
					<span>{tIH('hero.paragraph1.part3')}</span>
				</p>

				<p
					className={`${styles.paragraph} ${locale !== 'ru' ? styles.upper : ''}`}
				>
					{locale === 'ru' ? (
						<>
							<span className={`${styles.warning} ${styles.upper}`}>
								<strong>{tIH('hero.warning')}</strong>
							</span>
							<br />
							{tIH('hero.paragraph2')}
						</>
					) : (
						<strong>{tIH('hero.paragraph2')}</strong>
					)}
				</p>
				<ButtonLink
					href={'#instruction'}
					type={'secondary'}
					style={{
						alignSelf: 'center',
						margin: '32px 0 0',
						textTransform: 'uppercase',
					}}
				>
					{tIH('button.downloadOrangeApp')}
				</ButtonLink>
			</div>
		</section>
	);
};
