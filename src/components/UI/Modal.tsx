import { useContext } from 'react';
import { LaunchContext } from '../../store/LaunchContext';
import Portal from './Portal';

const Modal = () => {
	const { toggleLaunchModal, rocketData } = useContext(LaunchContext);
	const { id, rocket_name, cost_per_launch, description } = rocketData;

	// check for empty object, otherwise numberWithCommas will fail
	function isEmpty(obj: {}) {
		for (let x in obj) {
			return false;
		}
		return true;
	}

	// stack overflow to the rescue
	function numberWithCommas(x: number) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	return (
		<Portal>
			{!isEmpty(rocketData) ? (
				<div className='modal'>
					<div>
						<h2>Rocket Name / ID:</h2> {rocket_name} / {id}
					</div>
					<div>
						<h2>Cost Per Launch:</h2> ${numberWithCommas(cost_per_launch)}
					</div>
					<div>
						<h2>Rocket Description:</h2> {description}
					</div>
					<button onClick={() => toggleLaunchModal()}>Close</button>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</Portal>
	);
};
export default Modal;
