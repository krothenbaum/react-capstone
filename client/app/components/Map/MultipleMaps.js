import canUseDOM from "can-use-dom";

import raf from "raf";

import {
	default as React,
	Component,
} from "react";

import {
	withGoogleMap,
	GoogleMap,
	Marker,
} from "react-google-maps";

import 'whatwg-fetch';

const GettingStartedGoogleMap = withGoogleMap(props => (
	
	<GoogleMap
		defaultZoom={8}
		center={props.center}
	>
		
	</GoogleMap>
));

export default class MultipleMaps extends Component {
	renderMaps() {
		fetch('api/cities')
			.then(response => {
				// console.log(response);
				return response.json();
			})
			.then(cities => {
				
				console.log(cities);
				return cities.map(aMap => {
					console.log(aMap);
					const lat = aMap.lat;
					const lng = aMap.lon;
					return (
						<div style={{height: `250px`}}>
							<GettingStartedGoogleMap
								containerElement={
									<div style={{ height: `100%` }} />
								}
								mapElement={
									<div style={{ height: `100%` }} />
								}
								center={{
	 								lat: 25.0112183,
	 								lng: 121.52067570000001
	 							}}
							/>
						</div>
					)
				})
			})
			.catch(err => {
				console.log(err);
			});
		}
	
	// renderMaps() {
	// 	const maps = [{ lat: 25.0112183, lng: 121.52067570000001 }, { lat: 25.0112183, lng: 21.52067570000001 },{ lat: 10.0112183, lng: 121.52067570000001 }];
	// 	console.log(this)
	//  return maps.map((gMap) => {

	//  	console.log(this);
	// 	return (
	// 		<div style={{height: `250px`}}>
	// 			<GettingStartedGoogleMap
	// 				containerElement={
	// 					<div style={{ height: `100%` }} />
	// 				}
	// 				mapElement={
	// 					<div style={{ height: `100%` }} />
	// 				}
	// 				center={{
	//  					lat: gMap.lat,
	//  					lng: gMap.lng
	//  				}}
	// 			/>
	// 		</div>
	// 	);
	// });
		// return maps => {
	//     for (let i = 0; i < 2; i++) {
		// 	console.log(i);
		// 	return (
	//     <div style={{height: `250px`}}>
	//       <GettingStartedGoogleMap
	//         containerElement={
	//           <div style={{ height: `100%` }} />
	//         }
	//         mapElement={
	//           <div style={{ height: `100%` }} />
	//         }
	//       />
	//     </div>
	//     )
		// }}
	// }

	render() {
		return (
			<div>{this.renderMaps()}</div>
		)
	};

}