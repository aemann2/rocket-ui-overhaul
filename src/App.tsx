import { useContext } from 'react';
import Launches from './components/Launches';
import Modal from './components/UI/Modal';
import { LaunchContext } from './store/LaunchContext';

function App() {
	const { showModal } = useContext(LaunchContext);

	return (
		<>
			{showModal && <Modal />}
			<Launches />
		</>
	);
}

export default App;
