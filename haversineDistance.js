const haversineDistance = (lat1, lat2, lon1, lon2) => {
	const toRandians = x => {return x * Math.PI / 180};

	const Radius = 6371;
	const latRadian1 = toRadians(lat1);
	const latRadian2 = toRadians(lat2);
	const deltaLat = toRadians((lat2 - lat1));
	const deltaLon = toRadians((lon2 - lon1));

	const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) + Math.cos(latRadian1) * Math.cos(latRadian2) * Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	const distance = Radius * c;

	return distance;
} // returns distance between two coordinates in km