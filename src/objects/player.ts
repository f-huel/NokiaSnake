import "phaser";

export default class Player {
    private sprite: Phaser.Physics.Arcade.Sprite;
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(scene: Phaser.Scene, x: number, y: number, spriteKey: string, controls: Phaser.Types.Input.Keyboard.CursorKeys, initialSpeed: number) {
        this.sprite = scene.physics.add.sprite(x, y, spriteKey);

        this.sprite.setScale(0.8);

        this.sprite.setOrigin(0.5);
        this.sprite.setCollideWorldBounds(true);

        this.cursors = controls;

        this.sprite.setVelocity(initialSpeed, 0);
    }

    update() {
        const speed = 100;

        let velocityX = 0;
        let velocityY = 0;

        if (this.cursors.left?.isDown) {
            velocityX = -speed;
        } else if (this.cursors.right?.isDown) {
            velocityX = speed;
        }

        else if (this.cursors.up?.isDown) {
            velocityY = -speed;
        } else if (this.cursors.down?.isDown) {
            velocityY = speed;
        }

        if (velocityX !== 0 || velocityY !== 0) {
            this.sprite.setVelocity(velocityX, velocityY);
        }
    }
}
