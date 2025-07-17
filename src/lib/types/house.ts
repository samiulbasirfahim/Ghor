export type HouseListItem = Readonly<{
	id: string;
	img: string;
	title: string;
	location: string;
	tags: ('verified' | 'urgent' | 'featured')[];
	bed: number;
	bath: number;
	sqft: number;
	category: 'House' | 'Apartment' | 'Land' | 'Commercial';
	type: 'Sale' | 'Rent';
	email: string;
	phones: readonly string[];
	description?: string;
	price: number;
}>;
