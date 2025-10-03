import { CSSProperties, ReactNode } from 'react';
import styles from './ExternalLink.module.css';
type ExternalLinkProps = {
	href: string;
	children: ReactNode;
	marginH?: boolean;
	style?: CSSProperties;
    className?: string;
};
export const ExternalLink = async ({
	href,
	children,
	style,
	marginH,
    className,
}: ExternalLinkProps) => {
	return (
		<a
            className={`${styles.button} ${marginH ? styles.marginH : ''} ${className ?? ''}`}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			style={style}
		>
			{children}
		</a>
	);
};
