import { PropsWithChildren } from 'react';
import useMediaQueries from '../../../hooks/useMediaQueries';

const DesktopOrAbove = ({ children } : PropsWithChildren) : JSX.Element =>  {
	const { isMediumVW, isLargeVW } = useMediaQueries();
	
	return (
		<>
			{(isMediumVW || isLargeVW)&& children}
		</>
	);
};

export default DesktopOrAbove;