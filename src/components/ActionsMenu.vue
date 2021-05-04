<template>
<div class="menu_wrapper_container">
  <div class="up-arrow-container" id = "arrow-container" @click="changeVisible">
    <img src="@/assets/upArrow.png" alt="">
  </div>
  <div class="menu_wrapper" id="actions_menu">
    <div class="home_title"><img src="@/assets/title.png" alt="title" ></div>
    <div class="menu_container">
      <div class="level_info_wrapper">
        <a class="level_info_label">Highest score: {{highestScore}}</a>
      </div>
      <div class="restart_wrapper">
        <button class="restart_button" @click="restartGame">Restart</button>
      </div>
      <div class="quit_wrapper">
        <button class="quit_button" id="quit_button">Save & Quit</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import mitt from "mitt"
window.mitt = window.mitt || new mitt()
export default {
  name: "ActionsMenu",
  props: {
    highestScore: Number
  },
  methods: {
    restartGame: function (){
      window.mitt.emit("restart")
      document.getElementById("actions_menu").classList.remove("visible")
      document.getElementById("quit_button").innerHTML = "Save & Quit"
    },
    changeVisible: function (){
      let elem = document.getElementById("actions_menu")
      let arrow = document.getElementById("arrow-container")
      if (elem.classList.contains("visible")){
        elem.classList.remove("visible")
        arrow.classList.remove("visible")

      }else{
        elem.classList.add("visible")
        arrow.classList.add("visible")
      }
    }
  }
}
</script>

<style scoped lang="scss">
$theme-color: #59007a;
button{
  font-size: 200%;
}
.menu_wrapper_container{
  //height: 100%;
  width: 100%;
  .up-arrow-container {
    @media (min-width: 700px) {
      display: none;
    }
    position: absolute;
    top: 50px;
    left: 5px;
    width: 50px;
    transform: translateY(85vh);
    transition: .7s;

    img {
      width: 100%;
    }

    &.visible {
      @media (max-width: 700px) {
        transform: translateY(0)  rotate(180deg);
      }
    }
  }
  .menu_wrapper{
    position: relative;
    transition: .7s;
    height: 100%;
    width: 30%;
    margin-left: 70%;
    background-color: $theme-color;
    display: flex;
    flex-flow: column;
    transform: translateX(80%);
    z-index: 2;
    @media (max-width: 700px){
      width: 100%;
      height: 100%;
      margin-left: 0;
      margin-top: 30%;
      transform: translateY(100vh);
    }

    &:hover, &.visible{
      @media (max-width: 700px){
        transform: translateY(0);
      }
      transform: translateX(0);
      .up-arrow-container{
        transform: rotate(180deg);
      }
    }
    .home_title{
      width: 100%;
      height: fit-content;
      img{
        width: 100%;
      }
    }
    .menu_container{
      width: 100%;
      margin-top: 20%;
      @media (max-width: 700px) {
        margin-top: 0;
      }
      .level_info_wrapper{
        margin-bottom: 10%;
        .level_info_label{
          font-size: 300%;
          color: white;
        }
      }
      .restart_wrapper{
      }
    }
  }
}


</style>