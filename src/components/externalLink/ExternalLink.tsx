import { CSSProperties, ReactNode } from 'react';
import styles from './ExternalLink.module.css';
type ExternalLinkProps = {
	href: string;
	children: ReactNode;
	marginH?: boolean;
	style?: CSSProperties;
};
export const ExternalLink = async ({
	href,
	children,
	style,
	marginH,
}: ExternalLinkProps) => {
	return (
		<a
			className={`${styles.button} ${marginH ? styles.marginH : ''}`}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			style={style}
		>
			{children}
		</a>
	);
};
