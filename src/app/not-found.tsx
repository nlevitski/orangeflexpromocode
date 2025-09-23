import { getLocale } from 'next-intl/server';
import { tildaSans } from '@/fonts/fonts';
export default async function NotFound() {
	const locale = await getLocale();
	// const api = new StrapiAPI(locale);
	// const {
	// 	data: { title, code, description, buttonValue },
	// } = await api.getNotFound();
	return (
		<html lang={locale}>
			<body className={tildaSans.variable}>
				<span>404</span>
				<span>Page Not Found</span>
				{/* <div className={styles.container}>
					<div className={styles.notFound}>
						<h1 className={styles.notFoundTitle}>
							<span>{code}</span>
							<br />
							{title}
						</h1>
						<p className={styles.notFoundText}>{description}</p>
						<div className={styles.notFoundButtonWrapper}>
							<Button href={'/'} value={buttonValue} />
						</div>
					</div>
				</div> */}
			</body>
		</html>
	);
}
