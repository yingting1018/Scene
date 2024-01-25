// Code Practice: Making a Scene
// Name: Yingting Huang
// Date: 1/17/2023

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    scene: [MainMenu, Play ]
}

let game = new Phaser.Game(config)