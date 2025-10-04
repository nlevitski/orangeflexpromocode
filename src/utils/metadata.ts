import { Metadata } from 'next';

export const metadata: Record<string, Metadata> = {
	en: {
		title:
			'Orange Flex eSIM - Promo Code ALIAKSANDR8C6M | Get 30 zł + Unlimited Internet',
		description:
			'Step-by-step instructions for connecting eSIM from Orange Flex - the best mobile operator in Poland and EU. Use promo code ALIAKSANDR8C6M to get 30 zł bonus and unlimited internet in Poland and EU roaming.',
		keywords: [
			'Orange Flex',
			'eSIM',
			'Poland mobile operator',
			'promo code ALIAKSANDR8C6M',
			'30 zł bonus',
			'unlimited internet',
			'EU roaming',
			'Polish SIM card',
		],
		openGraph: {
			title:
				'Orange Flex eSIM - Get 30 zł + Unlimited Internet | Promo Code ALIAKSANDR8C6M',
			description:
				'Connect Orange Flex eSIM with promo code ALIAKSANDR8C6M and get 30 zł bonus + unlimited internet in Poland and EU. Step-by-step instructions.',
			type: 'website',
			locale: 'en_US',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Orange Flex eSIM - Get 30 zł + Unlimited Internet',
			description:
				'Use promo code ALIAKSANDR8C6M to get 30 zł bonus and unlimited internet in Poland and EU roaming.',
		},
	},
	pl: {
		title:
			'Orange Flex eSIM - Kod Promocyjny ALIAKSANDR8C6M | Otrzymaj 30 zł + Nielimitowany Internet',
		description:
			'Instrukcje krok po kroku dotyczące podłączania eSIM z Orange Flex - najlepszego operatora komórkowego w Polsce i UE. Użyj kodu promocyjnego ALIAKSANDR8C6M, aby otrzymać 30 zł bonusu i nielimitowany internet w Polsce i roamingu w UE.',
		keywords: [
			'Orange Flex',
			'eSIM',
			'operator komórkowy Polska',
			'kod promocyjny ALIAKSANDR8C6M',
			'30 zł bonus',
			'nielimitowany internet',
			'roaming UE',
			'polska karta SIM',
		],
		openGraph: {
			title:
				'Orange Flex eSIM - Otrzymaj 30 zł + Nielimitowany Internet | Kod Promocyjny ALIAKSANDR8C6M',
			description:
				'Podłącz eSIM Orange Flex z kodem promocyjnym ALIAKSANDR8C6M i otrzymaj 30 zł bonusu + nielimitowany internet w Polsce i roamingu w UE. Instrukcje krok po kroku.',
			type: 'website',
			locale: 'pl_PL',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Orange Flex eSIM - Otrzymaj 30 zł + Nielimitowany Internet',
			description:
				'Użyj kodu promocyjnego ALIAKSANDR8C6M, aby otrzymać 30 zł bonusu i nielimitowany internet w Polsce i roamingu w UE.',
		},
	},
	ua: {
		title:
			'Orange Flex eSIM - Промокод ALIAKSANDR8C6M | Отримай 30 zł + Безлімітний Інтернет',
		description:
			'Покрокова інструкція підключення eSIM від Orange Flex - найкращого мобільного оператора в Польщі та ЄС. Використовуйте промокод ALIAKSANDR8C6M, щоб отримати 30 zł бонусу та безлімітний інтернет у Польщі та роумінгу в ЄС.',
		keywords: [
			'Orange Flex',
			'eSIM',
			'мобільний оператор Польща',
			'промокод ALIAKSANDR8C6M',
			'30 zł бонус',
			'безлімітний інтернет',
			'роумінг ЄС',
			'польська SIM-карта',
		],
		openGraph: {
			title:
				'Orange Flex eSIM - Отримай 30 zł + Безлімітний Інтернет | Промокод ALIAKSANDR8C6M',
			description:
				'Підключіть eSIM Orange Flex з промокодом ALIAKSANDR8C6M та отримайте 30 zł бонусу + безлімітний інтернет у Польщі та роумінгу в ЄС. Покрокова інструкція.',
			type: 'website',
			locale: 'uk_UA',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Orange Flex eSIM - Отримай 30 zł + Безлімітний Інтернет',
			description:
				'Використовуйте промокод ALIAKSANDR8C6M, щоб отримати 30 zł бонусу та безлімітний інтернет у Польщі та роумінгу в ЄС.',
		},
	},
	ru: {
		title:
			'Orange Flex eSIM - Промокод ALIAKSANDR8C6M | Получи 30 zł + Безлимитный Интернет',
		description:
			'Пошаговая инструкция подключения eSIM от Orange Flex - лучшего мобильного оператора в Польше и ЕС. Используйте промокод ALIAKSANDR8C6M, чтобы получить 30 zł бонуса и безлимитный интернет в Польше и роуминге в ЕС.',
		keywords: [
			'Orange Flex',
			'eSIM',
			'мобильный оператор Польша',
			'промокод ALIAKSANDR8C6M',
			'30 zł бонус',
			'безлимитный интернет',
			'роуминг ЕС',
			'польская SIM-карта',
		],
		openGraph: {
			title:
				'Orange Flex eSIM - Получи 30 zł + Безлимитный Интернет | Промокод ALIAKSANDR8C6M',
			description:
				'Подключите eSIM Orange Flex с промокодом ALIAKSANDR8C6M и получите 30 zł бонуса + безлимитный интернет в Польше и роуминге в ЕС. Пошаговая инструкция.',
			type: 'website',
			locale: 'ru_RU',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Orange Flex eSIM - Получи 30 zł + Безлимитный Интернет',
			description:
				'Используйте промокод ALIAKSANDR8C6M, чтобы получить 30 zł бонуса и безлимитный интернет в Польше и роуминге в ЕС.',
		},
	},
};

export function getMetadataForLocale(locale: string): Metadata {
	return metadata[locale] || metadata.en;
}
