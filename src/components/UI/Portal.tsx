import { createPortal } from 'react-dom';

const Portal: React.FC = ({ children }) => {
	// creates a portal to a sibling node of 'root'
	const modalRoot: HTMLElement | null = document.getElementById('portal');
	return createPortal(children, modalRoot!);
};

export default Portal;
