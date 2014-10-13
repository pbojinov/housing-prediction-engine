for (h in houses) {
	var house = houses[h];

	var bedrooms = house.bedrooms;
	var bathrooms = house.bathrooms;
	var sqFeet = house.finishedSqFt;
	var city = house.address.city;
	var zip = house.address.zipcode;
	var sold = house.lastSoldPrice;
	var type = house.homeType;


	console.log(
		bedrooms, ',',
		bathrooms, ',',
		sqFeet, ',',
		city, ',',
		zip, ',',
		sold, ',',
		type
	);
}