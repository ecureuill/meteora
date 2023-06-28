import { PropsWithChildren } from 'react';
import useMediaQueries from '../../../hooks/useMediaQueries';

const TabletOrBellow = ({ children } : PropsWithChildren) : JSX.Element =>  {
	const { isTinyVW, isSmallVW } = useMediaQueries();
	
	return (
		<>
			{(isTinyVW || isSmallVW) && children}
		</>
	);
};

export default TabletOrBellow;