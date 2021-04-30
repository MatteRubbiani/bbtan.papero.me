<template>
<div class="scene_wrapper" id="parent"></div>
  <button class="full-screen-button" @click="document.getElementById('parent').requestFullscreen() ">full screen</button>
</template>

<script>
import Phaser from "phaser"
import {config, phaser, urls} from "../constants/constants"
import GameScene from "../../phaser/GameScene";
import mitt from "mitt"
import axios from "axios"

window.mitt = window.mitt || new mitt()
import {createGame} from "../constants/constants"
export default {
  name: "GameScene",
  mounted(){
    let div =  document.getElementById("parent")
    axios.get(urls.game).then(res => {
      let g = {
        level: res.data.level,
        spritePosition: res.data.position,
        blocks: res.data.blocks
      }
      if (res.data){
        this.gameScene = new Phaser.Game(config(
            new GameScene(g),
            div,
            phaser.width,
            phaser.height,
            Phaser.Scale.FIT
        ))
      }else{
        this.gameScene = new Phaser.Game(config(
            new GameScene(createGame()),
            div,
            phaser.width,
            phaser.height,
            Phaser.Scale.FIT
        ))
      }
    })
    window.mitt.on("restart", () => {
      this.gameScene.destroy(true)
      this.gameScene = new Phaser.Game(config(
          new GameScene(createGame()),
          div,
          phaser.width,
          phaser.height,
          Phaser.Scale.FIT
      ))
    })
  }
}
</script>

<style scoped lang="scss">
.scene_wrapper{
  height: 80%;
  width: 50%;
  margin-left: 25%;
  margin-top: 5%;
  @media (max-width: 700px) {
    width: 90%;
    margin-left: 5%;
    height: 90%;
    margin-top: 5%;
  }
  .full-screen-button{
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>