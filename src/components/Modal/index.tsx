import { ComponentPropsWithoutRef, PropsWithChildren, useEffect, useRef } from 'react';
import { CloseButton, Text } from '../.';
import './styles.css';

interface ModalProps extends ComponentPropsWithoutRef<'dialog'> {
	title: string
}

const Modal = ( { children, title, open, 'aria-label': ariaLabel, 'aria-describedby': ariaDescribedBy, className, ...props }: PropsWithChildren<ModalProps>): JSX.Element => {
	const dialogRef = useRef(null);

	useEffect(() => {
		if(open)
			(dialogRef.current! as HTMLDialogElement).showModal();
		else
			(dialogRef.current! as HTMLDialogElement).close();

	}, [open]);
	
	return (
		<dialog  
			ref={dialogRef}
			className={`Modal ${className}`} 
			aria-describedby={ariaDescribedBy} 
			aria-label={ariaLabel}
			{...props}
		>
			<div className='Modal__header'>
				<div className='flex-row'>
					<span className='material-icons'>
						check_circle_outline
					</span>
					<Text size='large' className='Modal__header__title'>{title}</Text>
				</div>
				<CloseButton setOpen={() => console.debug('')}/>
			</div>
			<div className='Modal__content'>
				{children}
			</div>
		</dialog>
	);
};

export default Modal;