import { PropsWithChildren } from 'react';
import useMediaQueries from '../../../hooks/useMediaQueries';

const TabletOrAbove = ({ children } : PropsWithChildren) : JSX.Element =>  {
	const { isTinyVW } = useMediaQueries();
	
	return (
		<>
			{!isTinyVW && children}
		</>
	);
};

export default TabletOrAbove;