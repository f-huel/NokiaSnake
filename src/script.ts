import "phaser";

class TitleScene extends Phaser.Scene {
    constructor() {
        super({key: 'TitleScene'});
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload(this: Phaser.Scene):void {};
function create(this: Phaser.Scene):void {};
function update():void {};