import * as Phaser from "phaser";
import {phaser, colors, urls} from "../src/constants/constants";
import mitt from "mitt"
import axios from "axios"

window.mitt = window.mitt || new mitt()

let style = { font: "30px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: phaser.blockWidth, align: "left" };

export default class GameScene extends Phaser.Scene {
    nextFire = 0
    fireRate = 100
    fireX = 0
    fireY = 0
    gameOver = false
    constructor(game) {
        super();
        this.raw_blocks = game.blocks
        this.level = game.level
        this.spritePosition = game.spritePosition
        this.shooting = false
        this.bulletsKilled = 0
        this.bulletsShot = 0

    }

    preload(){
        this.load.image("sprite", "./sprite.png");
        this.load.image("bullet", "./bullet.png");
    }

    create(){
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa00aa }})
        this.createGroups()
        this.createBlocks()
        this.sprite = this.physics.add.sprite(this.spritePosition, phaser.height - (phaser.blockHeight / 2), "sprite")
        let bottomLine = this.add.rectangle(phaser.width / 2, phaser.height - (phaser.blockHeight / 4), phaser.width, phaser.blockHeight / 2, )
        this.bottomLines.add(bottomLine)
        this.physics.add.collider(this.bullets, this.blocks, (bullet, block) =>{
            this.removeLifeFromBlock(block)
        })
        this.physics.add.collider(this.bullets, this.bottomLines, (bullet) =>{
            if (this.bulletsKilled === 0){
                this.sprite.x = bullet.x
                this.spritePosition = bullet.x

            }
            this.bulletsKilled ++
            if (this.bulletsKilled >= this.level){
                //change level
                this.newLevel()
            }
            bullet.destroy()
        })
        this.input.on("pointerdown", () => {
            if (!this.shooting) {
                this.fire()
            }
        })
    }

    update() {
        this.graphics.clear();
        if (!this.gameOver) {
            //fire
            if (this.input.y > phaser.height - .5 * phaser.blockHeight) return null
            let dY = (phaser.height - (phaser.blockHeight / 2)) - this.input.y
            let dX = this.input.x - this.spritePosition
            let m =  dY / dX
            if (m * m < .05) return null

            if (this.bulletsShot === 0 && !this.shooting) {
            this.line = new Phaser.Geom.Line(
                this.spritePosition,
                phaser.height - (phaser.blockHeight / 2),
                this.input.x,
                this.input.y)
            this.graphics.strokeLineShape(this.line);
        }
        }
    }

    //creators
    createGroups(){
        this.blocks = this.physics.add.group({
            collideWorldBounds: true,
            immovable: true
        })
        this.bullets = this.physics.add.group({
            collideWorldBounds: true,
            bounceX: 1,
            bounceY: 1
        })
        this.bottomLines = this.physics.add.group({
            collideWorldBounds: true,
            immovable: true
        })
    }

    createBlocks(){
        for (let i=0; i<this.raw_blocks.length; i++){
            let a = this.add.rectangle(
                (this.raw_blocks[i].x + .5) * phaser.blockWidth,
                (this.raw_blocks[i].y + .5) * phaser.blockHeight,
                phaser.blockWidth,
                phaser.blockHeight,
                colors[this.raw_blocks[i].start % colors.length])
            let tB = this.add.text(
                (this.raw_blocks[i].x + .10) * phaser.blockWidth,
                (this.raw_blocks[i].y + .10) * phaser.blockHeight,
                this.raw_blocks[i].left, style)

            a.left = this.raw_blocks[i].left
            a.rawOriginBlock = this.raw_blocks[i]
            a.textBlock = tB
            this.blocks.add(a)
        }
    }

    createBullet(X, Y){
        let dY = Y - (phaser.height - (phaser.blockHeight / 2))
        let dX = X - (this.spritePosition )
        let m =   dY / dX
        let angle = Math.atan(m) * 180 / 3.1415
        if (dX < 0){
            angle =  180 + angle
        }
        let {x, y} = this.physics.velocityFromAngle(angle, phaser.bulletSpeed);
        const bullet = this.bullets.create(
        this.spritePosition,
        phaser.height - (phaser.blockHeight / 2),
        "bullet");
        bullet.setVelocity(x, y)

    }

    //updators
    fire() {
        if (!this.shooting) {
            this.fireX = this.input.x
            this.fireY = this.input.y
            this.shooting = true
        }
        if (this.bulletsShot < this.level){
            if (this.time.now > this.nextFire) {
                this.nextFire = this.time.now + this.fireRate;
                this.createBullet(this.fireX, this.fireY);
                this.bulletsShot ++;
            }
        } else {
            this.shooting = false
        }

    }

    removeLifeFromBlock(block){
        block.left --;
        block.textBlock.text = parseInt(block.textBlock.text) - 1
        block.rawOriginBlock.left --
        if (block.left <= 0) {
            block.textBlock.destroy()
            block.destroy()
        }
    }

    newLevel(){
        this.level ++;
        this.bulletsKilled = 0
        this.bulletsShot = 0
        let cleanBlocks = []
        this.raw_blocks.forEach(b => {
            if (b && b.left > 0){
                b.y ++
                cleanBlocks.push(b)
                //check game over
                if (b.y >= 9) this.gameOver = true
            }
        })
        this.raw_blocks = cleanBlocks
        let newBlocks = this.generateRow(5, this.level)
        newBlocks.forEach(block => {
            if (block) this.raw_blocks.push(block)
        })
        this.blocks.clear(true)
        this.createBlocks()
        //fai tutto il resto
        this.saveToDb()
        if (this.gameOver) this.finishGame()
    }

    saveToDb(){
        const data = {
            blocks: this.raw_blocks,
            level: this.level,
            position: this.spritePosition
        }
        axios.post(urls.game, data)
    }

    generateRow(numberOfBlocks, left){
        let blocks = []
        for (let i=0; i < numberOfBlocks; i++){
            let n = parseInt(Math.random() * 8)
            if (!blocks[n]) {
                blocks[n] = {
                    x: n,
                    y: 1,
                    left: left,
                    start: left
                }
            }else{
                i--
            }
        }
        return blocks
    }

    finishGame(){
        document.getElementById("actions_menu").classList.add("visible")
        document.getElementById("quit_button").innerHTML = "Quit"
        //this.blocks.clear(true)
    }

}