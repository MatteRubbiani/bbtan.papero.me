<template>
<div class="menu_wrapper" id="actions_menu">
  <div class="home_title"><img src="@/assets/title.png" alt="title"></div>
  <div class="menu_container">
    <div class="level_info_wrapper">
      <a class="level_info_label">level: {{level}}</a>
    </div>
    <div class="restart_wrapper">
      <button class="restart_button" @click="restartGame">Restart</button>
    </div>
    <div class="quit_wrapper">
      <button class="quit_button" id="quit_button">Save & Quit</button>
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
    level: Number
  },
  methods: {
    restartGame: function (){
      window.mitt.emit("restart")
      document.getElementById("actions_menu").classList.remove("visible")
      document.getElementById("quit_button").innerHTML = "Save & Quit"
    }
  }
}
</script>

<style scoped lang="scss">
$theme-color: #59007a;
button{
  font-size: 200%;
}
.menu_wrapper{
  transition: .7s;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 30%;
  background-color: $theme-color;
  display: flex;
  flex-flow: column;
  transform: translateX(80%);
  @media (max-width: 700px){
    width: 80%;
    height: 100%;
  }
  &:hover, &.visible{
    transform: translateX(0);

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

</style>