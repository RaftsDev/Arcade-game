
===============================
# Arcade-game project

## Table of Contents

* [Install](#install)
* [Instructions](#instructions)
* [Rules](#rules)
* [Contributing](#contributing)

## Install

Source code in advanced-version branch of [GitHub.com](https://github.com/kubr2017/Arcade-game)


## Instructions

### Files and folders

The code consist in 3 folders:
  * **images** - its has images for game.
  * **css** - for `style.css` file.
  * **js** - for `app.js` `engine.js` `resources.js` file.

  #### Styles

  Game stylized by `style.css` file.

  ### Working code

  Code use module pattern.

  Main code locate in `engine.js`. Code in this file 

  Code locate in `app.js` file in **js** folder.
  Code in `resources.js` load images to cash and return for code in `engine.js`.
  When you start runing the function `createDeck()` to create html code of cards.

  `createDeck()` function use function `createCardsArray()` which build Array with elements. Each element - one card.

  After built array start shuffle through function  `shuffle()`.

  When shuffle complete array element will push to **html** code.

  All clicked cards  is flip over by adding a **css** classes `"show"` and `"open"`.
  Matching cards get **css** class `"match"`.

  Work with flip over  cards realized through `flipOver()` function and Map collection `flipMap`.

## Rules

In the same time its possible to open just two cards.

Each card stands in open position just 3 seconds.

If you had case with clicked the card that you already opened before - you lose stars.

The game finish when all cards is matched. And then popup message with your results regards your stars rate:

- No stars - very bad
- :star: - bad
- :star::star: - good
- :star::star::star: - very good

To restart game click restart button :repeat:.


## Contributing

This repository for **Udacity** learning programm.
Contributing will be decline.
