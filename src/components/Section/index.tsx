import { PropsWithChildren } from 'react';
import {Text} from '../.';
import './styles.css';

type SectionProps = {
	title: string
};

const Section = ( {children, title}: PropsWithChildren<SectionProps>): JSX.Element => {
	return (
		<section className='Section'>
			<Text variant='title-2' size='big' align='center' className='Section__title'>
				{title}
			</Text>
			{children}
		</section>
	);
};

export default Section;