# Movies Client

<img src="https://media.giphy.com/media/1gWkAUGkR4r8FlU6cq/giphy.gif">

## Demo

[https://movies-website.herokuapp.com](https://movies-website.herokuapp.com)

## Features

* Allow a user to search for movies by title

* Display visual results as the user types

* Add navigation for large result sets (e.g., pagination, infinite scroll)

## Setup

Add `.env` with REACT_APP_API_KEY

```
REACT_APP_API_KEY=yourapikey
```

### Start

```
yarn
yarn start
```


## Challenges

### Prioritizing Tasks

With a short timeframe, it was crucial to focus on the three main features and not get sidetracked. I was able to overcome this by wireframing the MVP and studying the API before jumping into code.

## Design Decisions

### Pagination

I decided to use pagination instead of infinite scroll for two main reasons. 

* Pagination indicates to the user how big the query size is

* Pagination prevents rendering too many movies at once

### MobX

I used MobX as the state management library so that the main components could interact with movies data through the same store

## Further Improvements

* Option to search with more than just movie title (i.e. genre, release date, vote count)

* Text commands (i.e. /popular, /latest)

* Ability for users to login and add movies to their favorites

* Use Sass instead of CSS

* Better responsive design

* Testing
