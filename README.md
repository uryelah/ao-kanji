[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://uryelah.github.io/ao-kanji/">
    <img src="./public/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">
    <a href="https://uryelah.github.io/ao-kanji/">
    Ao Kanji
    </a>
  </h1>

  <p align="center">
    A simple one page kanji study webapp
    <br />
    <a href="https://uryelah.github.io/"><strong>Use it live here »</strong></a>
    <br />
    <br />
    <a href="https://github.com/uryelah/ao-kanji/issues">Report Bug</a>
    ·
    <a href="https://github.com/uryelah/ao-kanji/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About](#about)
* [About the App](#about-the-app)
* [Navigation](#navigation)
* [Characters](#characters)
* [Views](#views)
* [Routes](#routes)
* [Prerequisites](#prerequisites)
* [Built With](#built-with)
* [Commands](#available-commands)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)
* [CopyRight/Attributions](#copyRight/Attributions)


## About

This project was about making a shooter game, similar to space asteroids, using the Phaser3 Javascript game engine.

In this project I implemented a game with projectiles comming both from and towards the player, player sprite movement, enemy 'downward' movement and collisions, with an oceanic theme.

Project requirements [here](https://www.notion.so/Shooter-game-203e819041c7486bb36f9e65faecba27).

Repository: https://github.com/uryelah/ao-kanji

## About The App

**From the depths** consists of a shooter game with the twist that it happens under the sea instead of the in space.

You control an ancient, squid-like, sea creature that has their domains invaded by humans, much to its demise. 

The games object is to get points from eliminating the humans and its machines, while keeping your hp, or health points, above zero.

All the art feature in this game is original if not indicated otherwise at the Attributions section.

**Features**

- Shoot stuff!
- Eat fish!
- Squeeze humans slowly to their death!
- Battle a submarine!
- Wiggle a tentacle around
- Check if your score at the top of the LeaderBoard!

-----

## Navigation

[![Product Name Screen Shot][product-screenshot]](https://uryelah.github.io/ao-kanji/)

This game is completelly controlled with your mouse or touch pad.

To start choose your name, it will be used to save your score at the end.

Move your mouse and your character tentacle will follow it.

Click to shoot bubbles at humans and their submarines.

Click and hold to squeeze humans to death or to eat fish and get more hp.

Click and hold while moving your cursor, for less time, to carry a human around.

Avoid human projectiles or carry a dumb humans to use as your shield, good for a maximum of two shots.

Avoid the submarine ray attacks.

The game starts very slow but gets harder and harder with time, so good luck staying alive ;-)

## Views

This game consists of four scenes:

- The Main Menu scene
This scene takes you to the Leader Board scene and the Main Game scene.
<img src='./assets/Screenshot_2020-04-06 From the depths .png' width='300'>

- The Main Game scene
In this scene you can play the actual game and it takes you to the Game Over scene if your hp drops to 0 points.
<img src='./assets/Screenshot_2020-04-06 From the depths (2).png' width='300'>

- The Game Over scene
This scene appears on losing the Game and has a button to refresh the page and play again.
<img src='./assets/Screenshot_2020-04-06 From the depths (3).png' width='300'>

- The Leader Board scene
This scene is accessed from the Main Menu and has a link back to it. It shows the top 15 scores recorded in the API.
<img src='./assets/Screenshot_2020-04-06 From the depths (1).png' width='300'>

## Routes

routes info

## Prerequisites

If you want to...

**View this app online**

Simply access [this link](https://uryelah.github.io/ao-kanji/) and enjoy the game!

**Run it locally**

1. Make sure you have [node installed](https://nodejs.org/en/download/) in you local environment.

2. Download or clone this repository

3. Navigate to the game root directory in your terminal

4. Install the required packages:
```sh
npm i
```
5. Start the game in your browser:
```sh
npm run start
```

------

### Built With
This project was built using the React SPA framework, consuming the data from the [Learn to read and write Japanese kanji API](https://rapidapi.com/KanjiAlive/api/learn-to-read-and-write-japanese-kanji/endpoints), together with Redux for state management.

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
* [Learn to read and write Japanese kanji API](https://rapidapi.com/KanjiAlive/api/learn-to-read-and-write-japanese-kanji/endpoints)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)


## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `npm eject` | Eject configuration files for customization
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |
| `npm run test` | Run the available tests |
| `npm run predeploy` | Build code for deployment |
| `npm run deploy` | Pushes built code to gh-pages |

-------

## Contact

Sarah Chamorro - [@your_twitter](https://twitter.com/sarah_chamorro) - sarahchamorro@gmail.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

-------

## Acknowledgements
* [StackOverflow](stackoverflow.com/)
* [Create React App](https://github.com/facebook/create-react-app)
* Microverse
* Team 54

## CopyRight/Attributions

This project was only possible thanks to the cretors bellow:

[Design idea by Nelson Sakwa on Behance](https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs))

[Kanji Alive great free kanji API](https://rapidapi.com/user/KanjiAlive)

-------

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/uryelah/ao-kanji/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/uryelah/ao-kanji/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/uryelah/ao-kanji/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/uryelah/ao-kanji/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/uryelah/ao-kanji/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/uryelah/
[product-screenshot]: ./assets/gameplay.gif
