import { fakerPT_BR } from '@faker-js/faker';

export const products = [
	{
		id: fakerPT_BR.string.nanoid(),
		title: 'Camiseta Conforto',
		description: 'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
		price: 'R$ 70',
		category: 'tshirts',
		colors: [
			{
				name: fakerPT_BR.color.human(),
				color: fakerPT_BR.color.rgb()
			}, 
			{
				name: fakerPT_BR.color.human(),
				color: fakerPT_BR.color.rgb()
			}, 
			{
				name: fakerPT_BR.color.human(),
				color: fakerPT_BR.color.rgb()
			}, 
			{
				name: fakerPT_BR.color.human(),
				color: fakerPT_BR.color.rgb()
			}
		],
		sellBy: fakerPT_BR.company.name(),
		deliveredBy: fakerPT_BR.company.name(),
		sizes: ['PP','P', 'M', 'G', 'GG'],
		img: require('../assets/products/Camiseta.png')
	},
	{
		id: fakerPT_BR.string.nanoid(),
		title: 'Calça Alfaiataria',
		description: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
		category: 'pants',
		price: 'R$ 180,00',
		colors: [{
			name: fakerPT_BR.color.human(),
			color: fakerPT_BR.color.rgb()
		}],
		sellBy: fakerPT_BR.company.name(),
		deliveredBy: fakerPT_BR.company.name(),
		sizes: ['PP','P', 'M', 'G', 'GG'],
		img: require('../assets/products/Calça.png')
	},
	{
		id: fakerPT_BR.string.nanoid(),
		title: 'Tênis Chunky',
		description: 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
		category: 'shoes',
		price: 'R$ 250,00',
		colors: [{
			name: fakerPT_BR.color.human(),
			color: fakerPT_BR.color.rgb()
		}],
		sellBy: fakerPT_BR.company.name(),
		deliveredBy: fakerPT_BR.company.name(),
		sizes: ['PP','P', 'M', 'G', 'GG'],
		img: require('../assets/products/Tenis.png')
	},
	{
		id: fakerPT_BR.string.nanoid(),
		title: 'Jaqueta Jeans',
		description: 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
		category: 'jackets',
		price: 'R$ 150,00',
		colors: [{
			name: fakerPT_BR.color.human(),
			color: fakerPT_BR.color.rgb()
		}],
		sellBy: fakerPT_BR.company.name(),
		deliveredBy: fakerPT_BR.company.name(),
		sizes: ['PP','P', 'M', 'G', 'GG'],
		img: require('../assets/products/Jaqueta.png')
	},
	{
		id: fakerPT_BR.string.nanoid(),
		title: 'Óculos Redondo',
		description: 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
		category: 'glasses',
		price: 'R$ 120,00',
		colors: [{
			name: fakerPT_BR.color.human(),
			color: fakerPT_BR.color.rgb()
		}],
		sellBy: fakerPT_BR.company.name(),
		deliveredBy: fakerPT_BR.company.name(),
		sizes: ['PP','P', 'M', 'G', 'GG'],
		img: require('../assets/products/Óculos.png')
	},
	{
		id: fakerPT_BR.string.nanoid(),
		title: 'Bolsa coringa',
		description: 'A Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
		category: 'bags',
		price: 'R$ 120,00',
		colors: [{
			name: fakerPT_BR.color.human(),
			color: fakerPT_BR.color.rgb()
		}],
		sellBy: fakerPT_BR.company.name(),
		deliveredBy: fakerPT_BR.company.name(),
		sizes: ['PP','P', 'M', 'G', 'GG'],
		img: require('../assets/products/Bolsa.png')
	},
];