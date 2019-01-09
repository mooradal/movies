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
{
	'id': 12,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2012,
	'title': 'The Amazing Spider-Man',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Sci-Fi'],
	'rating': 7.0
},
{
	'id': 13,
	'img': 'https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2014,
	'title': 'The Amazing Spider-Man 2',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Sci-Fi'],
	'rating': 6.6
},
{
	'id': 14,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Spider-Man: Into the Spider-Verse',
	'url': 'https://abc.com',
	'genre': ['Animation', 'Action', 'Adventure', 'Comedy', 'Family', 'Sci-Fi'],
	'rating': 8.7
},
{
	'id': 15,
	'img': 'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2017,
	'title': 'Spider-Man: Homecoming',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Sci-Fi'],
	'rating': 7.5
},
{
	'id': 16,
	'img': 'https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Tomb Raider',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Fantasy', 'Thriller'],
	'rating': 6.3
},
{
	'id': 17,
	'img': 'https://m.media-amazon.com/images/M/MV5BMTk4NjA0MjUyMF5BMl5BanBnXkFtZTgwMTEzNDQ1NTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Escape Plan II',
	'url': 'https://abc.com',
	'genre': ['Action', 'Crime', 'Thriller'],
	'rating': 3.8
},
{
	'id': 18,
	'img': 'https://m.media-amazon.com/images/M/MV5BNzY1MDA2OTQ0N15BMl5BanBnXkFtZTgwMTkzNjU2NTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Mortal Engines',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Fantasy', 'Sci-Fi', 'Thriller'],
	'rating': 6.4
},
{
	'id': 19,
	'img': 'https://m.media-amazon.com/images/M/MV5BZjFiMGUzMTAtNDAwMC00ZjRhLTk0OTUtMmJiMzM5ZmVjODQxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Fantastic Beasts: The Crimes of Grindelwald',
	'url': 'https://abc.com',
	'genre': ['Adventure', 'Family', 'Fantasy'],
	'rating': 6.8
},
{
	'id': 20,
	'img': 'https://m.media-amazon.com/images/M/MV5BMTkzMzgzMTc1OF5BMl5BanBnXkFtZTgwNjQ4MzE0NjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Instant Family',
	'url': 'https://abc.com',
	'genre': ['Comedy', 'Drama'],
	'rating': 7.6
},
{
	'id': 21,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjI3MDY2ODQwNF5BMl5BanBnXkFtZTgwNjUzNjE4MTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2014,
	'title': 'Let\'s Be Cops',
	'url': 'https://abc.com',
	'genre': ['Comedy', 'Crime'],
	'rating': 6.5
},
{
	'id': 22,
	'img': 'https://m.media-amazon.com/images/M/MV5BZTliN2IyMTctYTliOS00ZTJiLTkxN2YtNDg1YTJiZTA4MTVlL2ltYWdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2017,
	'title': 'CHIPS',
	'url': 'https://abc.com',
	'genre': ['Action', 'Comedy', 'Crime'],
	'rating': 6.0
},
{
	'id': 23,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Game Night',
	'url': 'https://abc.com',
	'genre': ['Action', 'Comedy', 'Crime', 'Mystery'],
	'rating': 7.0
},
{
	'id': 24,
	'img': 'https://m.media-amazon.com/images/M/MV5BYmNjY2RhMTUtNTQ1Mi00NmJmLTk4Y2QtYzA1YmM1ZDNiNGRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'The Package',
	'url': 'https://abc.com',
	'genre': ['See all certifications'],
	'rating': 5.5
},
{
	'id': 25,
	'img': 'https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2017,
	'title': 'Jumanji: Welcome to the Jungle',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Comedy', 'Fantasy'],
	'rating': 7.0
},
{
	'id': 26,
	'img': 'https://m.media-amazon.com/images/M/MV5BNzk4NDM3NjkwNF5BMl5BanBnXkFtZTgwNTk5MzkzNTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Tag',
	'url': 'https://abc.com',
	'genre': ['Comedy'],
	'rating': 6.6
},
{
	'id': 27,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjE0ODIzNjkzMl5BMl5BanBnXkFtZTgwODQ3MzU4NDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Blockers',
	'url': 'https://abc.com',
	'genre': ['Comedy'],
	'rating': 6.2
},
{
	'id': 28,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjEzODY2MjU1Nl5BMl5BanBnXkFtZTcwMzc1ODUzNg@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2011,
	'title': 'Johnny English Reborn',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Comedy', 'Crime'],
	'rating': 6.3
},
{
	'id': 29,
	'img': 'https://m.media-amazon.com/images/M/MV5BMTc3NzQ3OTg3NF5BMl5BanBnXkFtZTcwMjk5OTcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2012,
	'title': '21 Jump Street',
	'url': 'https://abc.com',
	'genre': ['Action', 'Comedy', 'Crime'],
	'rating': 7.2
},
{
	'id': 30,
	'img': 'https://m.media-amazon.com/images/M/MV5BMzcwMjkxMzQ3NV5BMl5BanBnXkFtZTgwMzgyNDA5MDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2017,
	'title': 'xXx: Return of Xander Cage',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Thriller'],
	'rating': 5.2
},
{
	'id': 31,
	'img': 'https://m.media-amazon.com/images/M/MV5BMTg0NzkyMjE5NF5BMl5BanBnXkFtZTgwMDE5NTg3MDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2017,
	'title': 'Fist Fight',
	'url': 'https://abc.com',
	'genre': ['Comedy'],
	'rating': 5.6
},
{
	'id': 32,
	'img': 'https://m.media-amazon.com/images/M/MV5BYzEyYzg5N2YtZmYzZC00OTg0LWE3ZmYtNDZhMGFkOTBjOTYxXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Night School',
	'url': 'https://abc.com',
	'genre': ['See all certifications'],
	'rating': 5.6
},
{
	'id': 33,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjA1OTUzNTQ5Ml5BMl5BanBnXkFtZTgwODQ4NDkxNjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2015,
	'title': 'Goosebumps',
	'url': 'https://abc.com',
	'genre': ['Adventure', 'Comedy', 'Family', 'Fantasy', 'Horror'],
	'rating': 6.3
},
{
	'id': 34,
	'img': 'https://m.media-amazon.com/images/M/MV5BNzgxMDQ2MDUyMF5BMl5BanBnXkFtZTgwNzgyMjQyNjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Goosebumps 2: Haunted Halloween',
	'url': 'https://abc.com',
	'genre': ['Adventure', 'Comedy', 'Family', 'Fantasy', 'Horror'],
	'rating': 5.7
},
{
	'id': 35,
	'img': 'https://m.media-amazon.com/images/M/MV5BNDY1MTA0NjgyN15BMl5BanBnXkFtZTgwMTEzNDQ4NTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'The Spy Who Dumped Me',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Comedy'],
	'rating': 6.0
},
{
	'id': 36,
	'img': 'https://m.media-amazon.com/images/M/MV5BMTUxOGE3OTUtM2I2My00YzE3LTg2NDktZTI3NjE4NDdjMGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'The Darkest Minds',
	'url': 'https://abc.com',
	'genre': ['Sci-Fi', 'Thriller'],
	'rating': 5.6
},
{
	'id': 37,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjg0MzA4MDE0N15BMl5BanBnXkFtZTgwMzk3MzAwNjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'The Meg',
	'url': 'https://abc.com',
	'genre': ['Action', 'Horror', 'Sci-Fi', 'Thriller'],
	'rating': 5.7
},
{
	'id': 38,
	'img': 'https://m.media-amazon.com/images/M/MV5BZDdjOWMwNjYtNWE3Zi00Y2JjLTgzODItNTg1YjNjM2U3ZWMyXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Show Dogs',
	'url': 'https://abc.com',
	'genre': ['Adventure', 'Comedy', 'Family'],
	'rating': 3.6
},
{
	'id': 39,
	'img': 'https://m.media-amazon.com/images/M/MV5BNjA1MzU5MTY3OF5BMl5BanBnXkFtZTgwNTU5MDA3NTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Hotel Transylvania 3: A Monster Vacation',
	'url': 'https://abc.com',
	'genre': ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
	'rating': 6.3
},
{
	'id': 40,
	'img': 'https://m.media-amazon.com/images/M/MV5BZmFhMjM2NmQtYWM3Yi00YmJhLWIxOTgtYWY3ZjNlYzMwOWJmXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UY268_CR16,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Super Troopers 2',
	'url': 'https://abc.com',
	'genre': ['Comedy', 'Crime', 'Mystery'],
	'rating': 6.1
},
{
	'id': 41,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Ocean\'s Eight',
	'url': 'https://abc.com',
	'genre': ['Action', 'Comedy', 'Crime', 'Thriller'],
	'rating': 6.2
},
{
	'id': 42,
	'img': 'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Jurassic World: Fallen Kingdom',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Sci-Fi'],
	'rating': 6.2
},
{
	'id': 43,
	'img': 'https://m.media-amazon.com/images/M/MV5BNDA1NjA3ODU3OV5BMl5BanBnXkFtZTgwOTg3MTIwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Rampage',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Sci-Fi'],
	'rating': 6.1
},
{
	'id': 44,
	'img': 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Ready Player One',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Sci-Fi'],
	'rating': 7.5
},
{
	'id': 45,
	'img': 'https://m.media-amazon.com/images/M/MV5BMzI5MzZmZjItOGQzZC00NjNiLWFjMjQtMGNhY2NmNDMyNGM1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'Peter Rabbit',
	'url': 'https://abc.com',
	'genre': ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
	'rating': 6.6
},
{
	'id': 46,
	'img': 'https://m.media-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2018,
	'title': 'The Hurricane Heist',
	'url': 'https://abc.com',
	'genre': ['Action', 'Crime', 'Thriller'],
	'rating': 5.0
},
{
	'id': 47,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2016,
	'title': 'Suicide Squad',
	'url': 'https://abc.com',
	'genre': ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
	'rating': 6.1
},
{
	'id': 48,
	'img': 'https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2013,
	'title': 'Furious 6',
	'url': 'https://abc.com',
	'genre': ['Action', 'Crime', 'Thriller'],
	'rating': 7.1
},
{
	'id': 49,
	'img': 'https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2015,
	'title': 'Fast & Furious 7',
	'url': 'https://abc.com',
	'genre': ['Action', 'Crime', 'Thriller'],
	'rating': 7.2
},
{
	'id': 50,
	'img': 'https://m.media-amazon.com/images/M/MV5BMjMxODI2NDM5Nl5BMl5BanBnXkFtZTgwNjgzOTk1MTI@._V1_UX182_CR0,0,182,268_AL_.jpg',
	'year': 2017,
	'title': 'Fast & Furious 8',
	'url': 'https://abc.com',
	'genre': ['Action', 'Crime', 'Thriller'],
	'rating': 6.7
}
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