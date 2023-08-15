import { products as data } from '../services/products';
import { createContext, PropsWithChildren, useState } from 'react';

interface IProductContext {
	products: typeof data,
	filterByCategory: (category: string) => void
	filterByName: (name: string) => void
}

export const productContext = createContext<IProductContext>({} as IProductContext);

export const ProductProvider = ({children}: PropsWithChildren) => {
	const [products, setProducts] = useState<typeof data>(data);

	const filterByCategory = (category: string) => {
		console.debug(category);
		setProducts(data.filter(prod => prod.category === category));
	};

	const filterByName = (name: string) => {
		setProducts(data.filter(prod => prod.title.toLowerCase().includes(name.toLowerCase())));
	};

	return (
		<productContext.Provider value={{products, filterByCategory: filterByCategory, filterByName: filterByName}}>
			{children}
		</productContext.Provider>
	);
};