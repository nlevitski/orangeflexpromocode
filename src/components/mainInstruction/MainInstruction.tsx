import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import styles from './MainInstruction.module.css';
import Image from 'next/image';
import { NextIntlClientProvider } from 'next-intl';
import { LangButtonSwitcher } from '../langButtonSwitcher/LangButtonSwitcher';

export const MainInstruction = async () => {
	const {
		0: currentLocale,
		1: t,
		2: messages,
	} = await Promise.all([
		getLocale(),
		getTranslations('mainInstruction'),
		getMessages(),
	]);
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.buttonBox}>
					<NextIntlClientProvider
						messages={messages.menu}
						locale={currentLocale}
					>
						<LangButtonSwitcher />
					</NextIntlClientProvider>
				</div>
				<div className={styles.qrCodeBox}>
					<Image
						className={`${styles.qrCode}`}
						src={'/images/qr-code.webp'}
						alt={'qr-code-promo'}
						width={1148}
						height={1148}
					/>
					<p className={styles.caption}>{t('qrCodeImage.caption')}</p>
					<p className={styles.instruction}>{t('qrCodeImage.instruction')}</p>
				</div>
				<div className={styles.textContent}>
					<h2 className={styles.title}>{t('title')}</h2>
					<p className={styles.paragraph}>{t('paragraph1')}</p>
					<h3 className={styles.subtitle}>{t('subtitle1')}</h3>
					<p className={styles.paragraph}>{t('paragraph2')}</p>
					<p className={styles.paragraph}>{t('paragraph3')}</p>
					<h3 className={styles.subtitle}>{t('subtitle2')}</h3>
					<ul className={styles.list}>
						<li>{t('unorderedList1.listItem1')}</li>
						<li>{t('unorderedList1.listItem2')}</li>
						<li>{t('unorderedList1.listItem3')}</li>
					</ul>

					<p className={styles.paragraph}>{t('paragraph4')}</p>
					<p className={styles.paragraph}>{t('paragraph5')}</p>
					<ul className={styles.list}>
						<li>
							<strong>{t('unorderedList2.listItem1')}</strong>
						</li>
						<li>
							<strong>{t('unorderedList2.listItem2')}</strong>
						</li>
						<li>
							<strong>{t('unorderedList2.listItem3')}</strong>
						</li>
					</ul>
					<h3 className={styles.subtitle}>{t('subtitle3')}</h3>
					<p className={styles.paragraph}>{t('paragraph6')}</p>
					<h3 className={styles.subtitle}>{t('subtitle4')}</h3>
					<ul className={styles.list}>
						<li>{t('unorderedList3.listItem1')}</li>
						<li>{t('unorderedList3.listItem2')}</li>
						<li>{t('unorderedList3.listItem3')}</li>
						<li>{t('unorderedList3.listItem4')}</li>
						<li>{t('unorderedList3.listItem5')}</li>
						<li>{t('unorderedList3.listItem6')}</li>
						<li>{t('unorderedList3.listItem7')}</li>
					</ul>
					<p className={styles.paragraph}>
						<span>{t('paragraph7.part1')}</span>
						<span>
							<strong>{t('paragraph7.part2')}</strong>
						</span>
						<span>{t('paragraph7.part3')}</span>
					</p>
					<p>{t('paragraph8')}</p>
				</div>
			</div>
		</section>
	);
};
