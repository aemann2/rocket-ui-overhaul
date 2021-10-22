import React, { useContext, useEffect } from 'react';
import { LaunchContext } from '../store/LaunchContext';
import { LaunchState } from '../types/types';
import Launch from './Launch';

const Launches = () => {
	const { loading, launches, showModal, getLaunches, toggleLaunchModal } =
		useContext<LaunchState>(LaunchContext);

	useEffect(() => {
		getLaunches();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClick = (endpoint?: string) => {
		getLaunches(endpoint);
		if (showModal) toggleLaunchModal();
	};

	const Launches = launches.map((launch, index) => {
		return <Launch key={index} launch={launch} />;
	});

	return (
		<div className='launches'>
			<h1 className='launches__heading'>Space X Launches</h1>
			<div className='launches__container'>
				{loading ? <h1>Loading...</h1> : <ul>{Launches}</ul>}
			</div>
			<div className='launches__buttons'>
				<button onClick={() => handleClick()}>All</button>
				<button onClick={() => handleClick('upcoming')}>Upcoming</button>
				<button onClick={() => handleClick('past')}>Past</button>
			</div>
		</div>
	);
};

export default Launches;
