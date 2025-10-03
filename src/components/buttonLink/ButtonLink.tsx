import Link from 'next/link';
import styles from './ButtonLink.module.css';
import { CSSProperties } from 'react';
type ButtonLinkProps = {
	children: React.ReactNode;
	href: string;
	type?: 'primary' | 'secondary' | 'tertiary';
	marginH?: boolean;
	style?: CSSProperties;
};
export const ButtonLink = ({
	href,
	children,
	type = 'primary',
	marginH = false,
	style = {},
}: ButtonLinkProps) => {
	return (
		<Link
			style={style}
			href={href}
			className={`${styles.button} ${styles[type]} ${marginH ? styles.marginH : ''}`}
		>
			{children}
		</Link>
	);
};
