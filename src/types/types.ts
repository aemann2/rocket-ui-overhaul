export interface LaunchData {
	launch: {
		urlId: string;
		shortUrl: string;
		urlName: string;
		visits: number;
		flight_number: number;
		mission_name: string;
		rocket: {
			rocket_id: number;
		};
	};
}

export interface LaunchState {
	launches: [];
	rocketData: {};
	loading: boolean;
	showModal: boolean;
	getLaunches: (type?: string) => void;
	getRocketData: (type: string) => void;
	toggleLaunchModal: () => void;
}

export interface LaunchStateInitial {
	launches: [];
	rocketData: {};
	loading: boolean;
	showModal: boolean;
}

export interface Rocket {
	urlId: string;
	shortUrl: string;
	urlName: string;
	visits: number;
}
