import { LaunchStateInitial } from '../types/types';

interface LaunchAction {
	type: 'GET_LAUNCHES' | 'SET_LOADING' | 'GET_ROCKETDATA' | 'TOGGLE_MODAL';
	payload?: any;
}

const launchReducer = (state: LaunchStateInitial, action: LaunchAction) => {
	switch (action.type) {
		case 'GET_LAUNCHES':
			return {
				...state,
				launches: action.payload,
			};
		case 'GET_ROCKETDATA':
			return {
				...state,
				rocketData: action.payload,
			};
		case 'SET_LOADING':
			return {
				...state,
				loading: action.payload,
			};
		case 'TOGGLE_MODAL':
			return {
				...state,
				showModal: !state.showModal,
			};
		default:
			return state;
	}
};

export default launchReducer;
