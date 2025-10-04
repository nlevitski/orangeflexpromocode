import Image from 'next/image';
import styles from './Orange.module.css';
import { getTranslations } from 'next-intl/server';
import { ButtonLink } from '../buttonLink/ButtonLink';
import { getPathname } from '@/i18n/navigation';
export const Orange = async () => {
	const t = await getTranslations('howDoesItWork');
	return (
		<section className={styles.orange}>
			<h2 className={styles.title}>
				<div className={styles.first}>
					<span>{t('title.part1')}</span>
					<div className={styles.qrBox}>
						<svg
							className={`${styles.asterisk} ${styles.asteriskAbs}`}
							xmlns="http://www.w3.org/2000/svg"
							width="34"
							height="34"
							viewBox="0 0 34 34"
							fill="none"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M6.86794 17L0 12.9607L5.06206 4.03934L11.934 8.07168L11.9379 0H22.0621L22.066 8.07168L28.9379 4.03934L34 12.9607L27.132 17L34 21.0393L28.9379 29.9607L22.066 25.9283L22.0621 34H11.9379L11.934 25.9283L5.06206 29.9607L0 21.0393L6.86794 17Z"
								fill="currentColor"
							></path>
						</svg>
						<Image
							className={styles.qr}
							src={'/images/qr-code.png'}
							width={230}
							height={230}
							alt={'qr-code'}
						/>
					</div>
				</div>

				<div className={styles.second}>
					<span className={styles.part2}>&nbsp;{`${t('title.part2')}`}</span>
					<div className={styles.info}>
						<div className={styles.steps}>
							<svg
								className={`${styles.asterisk} ${styles.asteriskStd}`}
								xmlns="http://www.w3.org/2000/svg"
								width="34"
								height="34"
								viewBox="0 0 34 34"
								fill="none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6.86794 17L0 12.9607L5.06206 4.03934L11.934 8.07168L11.9379 0H22.0621L22.066 8.07168L28.9379 4.03934L34 12.9607L27.132 17L34 21.0393L28.9379 29.9607L22.066 25.9283L22.0621 34H11.9379L11.934 25.9283L5.06206 29.9607L0 21.0393L6.86794 17Z"
									fill="currentColor"
								></path>
							</svg>
							<ol className={styles.list}>
								<li>{t('steps.step1.content.part1')}</li>
								<li>{t('steps.step2.content.part1')}</li>
								<li>{t('steps.step3.content.part1')}</li>
								<li>
									<span className={styles.nowrap}>
										{t('steps.step4.content.part1') + ' '}
									</span>
									<span className={styles.promocode}>
										{t('steps.step4.content.part2')}
									</span>

									<span>
										<br />
										{t('steps.step4.content.part3')}
									</span>
								</li>
							</ol>
						</div>
					</div>
				</div>
				<div className={styles.third}>{t('title.part3')}</div>
			</h2>
			<ButtonLink href={'/instruction'} style={{ alignSelf: 'center' }} marginH>
				{t('button.link.instruction')}
			</ButtonLink>
		</section>
	);
};
