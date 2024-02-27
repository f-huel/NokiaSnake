import "phaser";

export default class Food extends Phaser.GameObjects.Image {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture);
        scene.add.existing(this);
    }

    spawnRandomly(player1Segments: Phaser.Geom.Point[], player2Segments: Phaser.Geom.Point[]) {
        const spawnX = Phaser.Math.Between(0, this.scene.sys.canvas.width);
        const spawnY = Phaser.Math.Between(0, this.scene.sys.canvas.height);

        const overlapping = player1Segments.some(segment => segment.x === spawnX && segment.y === spawnY)
            || player2Segments.some(segment => segment.x === spawnX && segment.y === spawnY);

        if (!overlapping) {
            this.setPosition(spawnX, spawnY);
        } else {
            this.spawnRandomly(player1Segments, player2Segments);
        }
    }
}
