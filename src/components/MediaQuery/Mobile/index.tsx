import { PropsWithChildren } from 'react';
import useMediaQueries from '../../../hooks/useMediaQueries';

const Mobile = ({ children } : PropsWithChildren) : JSX.Element =>  {
	const { isTinyVW } = useMediaQueries();
	
	return (
		<>
			{isTinyVW && children}
		</>
	);
};

export default Mobile;