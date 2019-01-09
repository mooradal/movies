var movies = [{
	'id': 0,
	'img': 'https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_.jpg',
	'year': 2018,
	'title': 'Venom',
	'url': 'https://abc.com',
	'genre': ['Action', 'Sci-Fi'],
	'rating': 6.8
},
{
	'id': 1,
	'img': 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
	'year': 2018,
	'title': 'Black Panther',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Sci-Fi'],
	'rating': 7.4
},
{
	'id': 2,
	'img': 'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SY1000_CR0,0,639,1000_AL_.jpg',
	'year': 2018,
	'title': 'Mission: Impossible - Fallout',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Thriller'],
	'rating': 7.9
},
{
	'id': 3,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
	'year': 2018,
	'title': 'Avengers: Infinity War',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
	'rating': 8.5
},
{
	'id': 4,
	'img': 'https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_.jpg',
	'year': 2018,
	'title': 'Deadpool 2',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Comedy', 'Sci-Fi'],
	'rating': 7.8
},
{
	'id': 5,
	'img': 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
	'year': 2016,
	'title': 'Deadpool',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Comedy', 'Sci-Fi'],
	'rating': 8.0
},
{
	'id': 6,
	'img': 'https://m.media-amazon.com/images/M/MV5BMTcxMjUwNjQ5N15BMl5BanBnXkFtZTgwNjk4MzI4NjM@._V1_.jpg',
	'year': 2018,
	'title': 'Creed II',
	'url': 'https://abc.com',
	'genre': ['Drama', 'Sports'],
	'rating': 7.7
},
{
	'id': 7,
	'img': 'https://m.media-amazon.com/images/M/MV5BOTM3NzE5OTE1Nl5BMl5BanBnXkFtZTgwNzQwNjM3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
	'year': 2018,
	'title': 'Bumblebee',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Sci-Fi'],
	'rating': 7.3
},
{
	'id': 8,
	'img': 'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
	'year': 2018,
	'title': 'Aquaman',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
	'rating': 7.5
},
{
	'id': 9,
	'img': 'https://m.media-amazon.com/images/M/MV5BMTU2OTYzODQyMF5BMl5BanBnXkFtZTgwNjU3Njk5NTM@._V1_.jpg',
	'year': 2018,
	'title': 'The Equalizer 2',
	'url': 'https://abc.com',
	'genre': ['Action', 'Crime', 'Thriller'],
	'rating': 6.8
},
{
	'id': 10,
	'img': 'https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
	'year': 2018,
	'title': 'Ant-Man and the Wasp',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Comedy', 'Sci-Fi'],
	'rating': 7.2
},
{
	'id': 11,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
	'year': 2018,
	'title': 'Bird Box',
	'url': 'https://abc.com',
	'genre': ['Drama', 'Horror', 'Sci-Fi', 'Thriller'],
	'rating': 6.8
},
];

export default movies;

// "FilmName": {
// 	"id": 100,
// 	"img": "https://abc.com",
// 	"year": 2018,
// 	"title": "movie1",
// 	"url": "https://abc.com",
// 	"genre":["Horror","Action"],
// 	"rating":8.2
// },