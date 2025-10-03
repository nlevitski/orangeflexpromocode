import Image from 'next/image';
import styles from './Footer.module.css';

export const Footer = async () => {
	return (
		<footer className={styles.footer}>
			<Image
				className={styles.footerImg}
				src={'/images/orange_flex_bg.webp'}
				alt={'footer-commercial'}
				fill
				sizes={'100wv'}
				// width={1836}
				// height={1236}
				priority
				objectFit="cover"
				// width={343}
				// height={155}
			/>
		</footer>
	);
};
