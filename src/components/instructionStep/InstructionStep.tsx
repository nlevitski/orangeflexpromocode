import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import styles from './InstructionStep.module.css';
import Image from 'next/image';
import { Splitter } from '@/app/utils/splitter';
import { LangButtonSwitcher } from '../langButtonSwitcher/LangButtonSwitcher';
import { NextIntlClientProvider } from 'next-intl';
import { ExternalLink } from '../externalLink/ExternalLink';

export const InstructionStep = async () => {
	const messages = await getMessages();
	const { 0: currentLocale, 1: t } = await Promise.all([
		getLocale(),
		getTranslations('instructionPage'),
	]);

	return (
		<section className={styles.section} id={'instruction'}>
			<div className={styles.buttonBox}>
				<NextIntlClientProvider messages={messages.menu} locale={currentLocale}>
					<LangButtonSwitcher />
				</NextIntlClientProvider>
			</div>
			<div className={styles.box}>
				<div className={styles.column}>
					<h2
						className={styles.title}
						style={{ margin: '0', textAlign: 'center' }}
					>
						{t('title1')}
					</h2>
					<hr className={styles.hr} style={{ alignSelf: 'center' }} />
					<ul className={styles.list}>
						<li className={styles.listItem}>{t('unorderedList1.listItem1')}</li>
						<li className={styles.listItem}>{t('unorderedList1.listItem2')}</li>
					</ul>
					{currentLocale === 'ru' && (
						<>
							<p
								className={`${styles.paragraph} ${styles.center} ${styles.upper}`}
								style={{ marginBottom: '0' }}
							>
								<strong>{t('steps.step1.warning')}</strong>
							</p>
							<p className={styles.paragraph}>{t('steps.step1.paragraph')}</p>
						</>
					)}

					<ExternalLink
						href={'https://flexapp.pl/G3w9xHXiNo2CCCvd9'}
						style={{ alignSelf: 'center', margin: '32px auto 0' }}
					>
						{t('button.downloadOrangeApp')}
					</ExternalLink>
				</div>

				<Image
					className={`${styles.imgInstruction} ${styles.qrCode}`}
					src="/images/qr-code.webp"
					alt="qr-code-instruction"
					width={1148}
					height={1148}
				/>
			</div>
			<div className={styles.container}>
				<h2 className={styles.title} style={{ textAlign: 'center' }}>
					{t('title2')}
				</h2>
				<div className={styles.steps}>
					<div className={styles.step}>
						<div className={styles.bulletCell}>
							<div className={styles.bullet}>1</div>
							<hr className={styles.line} />
						</div>
						<div className={styles.content}>
							<h3 className={styles.subtitle}>{t('steps.step1.title')}</h3>
							<ul className={styles.list}>
								<li className={styles.listItemStep}>
									{t('steps.step1.unorderedList.listItem1')}
								</li>
								<p className={styles.paragraph}>
									<Splitter str={t('steps.step1.unorderedList.paragraph')} />
								</p>
								<li className={styles.listItemStep}>
									{t('steps.step1.unorderedList.listItem2')}
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.step}>
						<div className={styles.bulletCell}>
							<div className={styles.bullet}>2</div>
							<hr className={styles.line} />
						</div>
						<div className={styles.content}>
							<h3 className={styles.subtitle}>{t('steps.step2.title')}</h3>
							<ul className={styles.list}>
								<li className={styles.listItemStep}>
									{t('steps.step2.unorderedList.listItem1')}
								</li>
								<li className={styles.listItemStep}>
									{t('steps.step2.unorderedList.listItem2')}
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.step}>
						<div className={styles.bulletCell}>
							<div className={styles.bullet}>3</div>
						</div>
						<div className={styles.content}>
							<h3 className={styles.subtitle}>{t('steps.step3.title')}</h3>
							<ul className={styles.list}>
								<li className={styles.listItemStep}>
									<span>{t('steps.step3.unorderedList.listItem1.part1')}</span>
									<span>
										<strong>
											{' ' +
												t('steps.step3.unorderedList.listItem1.part2') +
												' '}
										</strong>
									</span>
									<span>{t('steps.step3.unorderedList.listItem1.part3')}</span>
								</li>

								<li className={styles.listItemStep}>
									{t('steps.step3.unorderedList.listItem2')}
								</li>
								<li className={styles.listItemStep}>
									{t('steps.step3.unorderedList.listItem3')}
								</li>
							</ul>
						</div>
					</div>
				</div>
				<ExternalLink
					href={
						'https://telegra.ph/Orange-Flex-How-to-get-a-Polish-SIM-card-before-coming-to-Poland-and-a-bonus-of-30z%C5%82--7--FREE-INTERNET-01-03'
					}
					style={{ alignSelf: 'center', whiteSpace: 'wrap' }}
					marginH
				>
					{t('button.detailedTextWithPhotoAndVideo')}
				</ExternalLink>
				<div className={styles.box}>
					<div className={styles.column}>
						<h2 className={styles.title}>{t('title3')}</h2>
						<hr className={styles.hr} />
						<ul className={styles.list}>
							<li className={styles.listItem}>
								{t('unorderedList2.listItem1')}
							</li>
							<li className={styles.listItem}>
								<span>{t('unorderedList2.listItem2.part1')}</span>
								<span>
									<strong>
										{' ' + t('unorderedList2.listItem2.part2') + ' '}
									</strong>
								</span>
							</li>
							<p>{t('unorderedList2.paragraph')}</p>
						</ul>
						<p className={styles.paragraph} style={{ marginBottom: 0 }}>
							{t('warning')}
						</p>
						<p className={styles.paragraph} style={{ margin: 0 }}>
							<span>{t('paragraph1.part1') + ' '}</span>
							<span className={styles.upper}>
								<strong>{t('paragraph1.part2')}</strong>
							</span>
						</p>
					</div>
					<Image
						className={`${styles.imgInstruction} ${styles.img}`}
						src="/images/orange_flex_promo_co.webp"
						alt="instruction1"
						width={1104}
						height={1094}
					/>
				</div>
				<div className={styles.box}>
					<div className={styles.column}>
						<h2 className={styles.title}>{t('title4')}</h2>
						<hr className={styles.hr} />
						<ul className={styles.list}>
							<li className={styles.listItem}>
								<span>{t('unorderedList3.listItem1.part1')}</span>
								<span>
									<strong>
										{' ' + t('unorderedList3.listItem1.part2') + ' '}
									</strong>
								</span>
								<span>{t('unorderedList3.listItem1.part3')}</span>
							</li>
						</ul>
						<br />
						<p className={styles.paragraph}>{t('paragraph2')}</p>
					</div>
					<Image
						className={`${styles.imgInstruction} ${styles.img}`}
						src="/images/Orange_flex_promocod.webp"
						alt="instruction2"
						width={720}
						height={670}
					/>
				</div>
			</div>
		</section>
	);
};
