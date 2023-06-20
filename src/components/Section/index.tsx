import { PropsWithChildren } from 'react';
import {Text} from '../.';
import './styles.css';

type SectionProps = {
	title: string, 
	className?: string,
};

const Section = ( {children, title, className}: PropsWithChildren<SectionProps>): JSX.Element => {
	return (
		<section className={`Section ${className? className : ''}`}>
			<Text variant='title-2' size='big' align='center' className='Section__title'>
				{title}
			</Text>
			{children}
		</section>
	);
};

export default Section;