<template>
  <div class="scene_wrapper-container" id="parent-container">
    <div class="scene_wrapper" id="parent">
      <div id="fullScreenButton" class="full-screen" @click="fullScreen">
        <img src="@/assets/fullScreen.png" alt="full screen">
      </div>
    </div>
  </div>
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
  data(){
    return {
      inFullScreen: false
    }
  },
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
  },
  methods: {
    fullScreen: function (){
      let elem = document.getElementById('parent-container')
      let elem1 = document.getElementById('fullScreenButton')
      if (!this.inFullScreen){
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
          elem1.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
          elem1.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
          elem1.msRequestFullscreen();
        }
      }else{
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
      }
      this.inFullScreen = !this.inFullScreen
    }
  }
}
</script>

<style scoped lang="scss">
.scene_wrapper-container{
    height: 80%;
    width: 50%;
    margin-left: 25%;
    margin-top: 5%;
    padding: 5px;
  .scene_wrapper {
    height: 100%;
    width: 100%;
    @media (max-width: 700px) {
      position: fixed;
      padding: 0;
      top: 50px;
      left: 5%;
      width: 90%;
      height: 90%;
    }
    .full-screen {
      width: 50px;
      position: absolute;
      right: 20%;
      bottom: 10%;
      @media (max-width: 700px){
        bottom: 10px;
        right: 5px;
      }
      img {
        width: 100%;
      }
    }
  }
}


</style>