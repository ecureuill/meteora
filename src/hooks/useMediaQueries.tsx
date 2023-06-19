import { useMediaQuery as umq } from 'react-responsive';

const useMediaQuery = (query: string): boolean => umq({ query });

const useMediaQueries = () => {
	const isTinyVW = useMediaQuery('(max-device-width: 375px)');
	const isSmallVW = useMediaQuery('(min-device-width: 376px) and (max-device-width: 911px)');
	const isMediumVW = useMediaQuery('(min-device-width: 912px) and (max-device-width: 1043px)');
	const isLargeVW = useMediaQuery('(min-device-width: 1044px)');

	return {
		isTinyVW,
		isSmallVW,
		isMediumVW,
		isLargeVW
	};
};

export default useMediaQueries;