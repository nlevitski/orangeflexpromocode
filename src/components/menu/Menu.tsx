'use client';
import { useEffect, useRef, useState } from 'react';
import { Burger } from '../icons/burger/Burger';
import styles from './menu.module.css';
import { routing } from '@/i18n/routing';
import { Link, usePathname } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';

// type MenuProps = {
// 	menu: { value: string; href: string }[];
// };

const menuDesktopHeight = 174;
const menuDesktopMinWidth = 960;

export const Menu = () => {
	const currentLocale = useLocale();
	const pathname = usePathname();

	const { 0: showSticky, 1: setShowSticky } = useState(false);
	const { 0: isOpen, 1: setIsOpen } = useState(false);

	const lastScrollYRef = useRef(0);
	const modalRef = useRef<HTMLDivElement>(null);
	const t = useTranslations();

	const toggleMenu = () => {
		setIsOpen((prev) => {
			return !prev;
		});
	};

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	}, [isOpen]);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			const lastY = lastScrollYRef.current;

			const screenHeight = window.innerHeight;
			const screenWidth = window.innerWidth;

			const scrollingUp = currentY < lastY;
			const scrollingDown = currentY > lastY;
			const scrolledPastTwoScreens = currentY > screenHeight * 2;
			const wideEnough = screenWidth > menuDesktopMinWidth;
			const closeToTop = currentY < menuDesktopHeight;

			if (showSticky && closeToTop) {
				setShowSticky(false);
			}

			if (!showSticky && wideEnough && scrollingUp && scrolledPastTwoScreens) {
				setShowSticky(true);
			}

			if (showSticky && scrollingDown) {
				setShowSticky(false);
			}

			requestAnimationFrame(() => {
				lastScrollYRef.current = currentY;
			});
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [showSticky, setShowSticky]);

	return (
		<>
			<div className={styles.navPanel}>
				<button onClick={toggleMenu} className={styles.burger}>
					<Burger isActive={isOpen} />
				</button>
			</div>
			{showSticky && <div className={styles.placeholder}>&nbsp;</div>}
			<div
				className={`${styles.container} ${isOpen ? styles.active : ''} ${showSticky ? styles.container_sticky : ''}`}
				ref={modalRef}
				onClick={() => {
					if (window?.innerWidth < 961) {
						toggleMenu();
					}
				}}
			>
				<ul className={styles.navMenu}>
					<li
						key={pathname === '/' ? '/instruction' : '/'}
						className={styles.navItem}
					>
						<Link
							href={pathname === '/' ? '/instruction' : '/'}
							className={styles.navLink}
						>
							{t(pathname === '/' ? 'instruction' : 'main')}
						</Link>
					</li>
					{routing.locales
						.filter((locale) => locale !== currentLocale)
						.map((locale) => (
							<li key={locale} className={styles.navItem}>
								<Link
									className={styles.navLink}
									href={pathname}
									locale={locale}
								>
									{locale}
								</Link>
							</li>
						))}
				</ul>
			</div>
		</>
	);
};
