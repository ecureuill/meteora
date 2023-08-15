import { useEffect, useRef, useState } from 'react';
import './styles.css';

type CarrosselProps = {
	imgs: string[]
}

const Carrossel = ({imgs}: CarrosselProps) => {

	const [current, setCurrent] = useState(0);
	const [autoPlay, setAutoPlay] = useState(false);

	const nextImg = () => {
		if(current + 1 === imgs.length)
			setCurrent(0);
		else
			setCurrent(current+1);
	};

	const prevImg = () => {
		if(current - 1 < 0)
			setCurrent(imgs.length - 1);
		else
			setCurrent(current-1);
	};

	const timerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {

		if(autoPlay)
		{
			timerRef.current = setTimeout(() => {
				nextImg();
			}, 3000);
		}
		else
		{
			if(timerRef.current){
				clearTimeout(timerRef.current);
			}
		}

		return () => {
			clearTimeout(timerRef.current as NodeJS.Timeout);
		};

	}, [autoPlay]);

	return (
		<div className="Carrossel">
			<div className='Carrossel__controls'>
				<div className='Carrossel__controls__autoplay'>
					{autoPlay? 
						<button className='Carrossel__controls__autoplay__pause__button material-icons' onClick={() => setAutoPlay(false)}>pause</button>
						: 
						<button className='Carrossel__controls__autoplay__resume__button material-icons' onClick={() => setAutoPlay(true)}>play_arrow</button>
					}
				</div>
				<div className='Carrossel__controls__left'>
					<button className='Carrossel__controls__left__button material-icons' onClick={() => nextImg()}>arrow_left</button>
				</div>
				<div className='Carrossel__controls__right'>
					<button className='Carrossel__controls__right__button material-icons' onClick={() => prevImg()}>arrow_right</button>
				</div>
			</div>
			{imgs.map((img, index) => (
				<img src={img} key={index} className={`${index === current? 'Carrossel__img' : 'Carrossel__img--hide'}`} alt=""/>
			))}
		</div>
	);

};

export default Carrossel;