<template>
<div class="home_wrapper">
  <UserHamburgerMenu :show="showHamburgerMenu"
                     :src="require('@/assets/hamburger_icon_dark.png')"
                     @toggle-show="showHamburgerMenu=$event"/>
  <div class="home_title"><img src="@/assets/title.png" alt="title"></div>
  <div class="home-button_container">
    <button class="new-game_button">New Game</button>
    <button class="resume_button">Resume</button>
  </div>

</div>
</template>

<script>
import UserHamburgerMenu from "../components/UserHamburgerMenu";
export default {
  name: "Home",
  components: {UserHamburgerMenu},
  data() {
    return {
      showHamburgerMenu: false,
    }
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
$theme-color: #59007a;
.home_wrapper{
  width: 100%;
  max-width: 1500px;
  margin: auto;
  .home_title{
    width: 60%;
    margin: auto;
    img{
      width: 100%;
    }
  }

  .home-button_container{
    padding-top: 5%;
    flex-flow: row;
    margin: auto;

    button{
      width: 25%;
      margin: 3%;
      border: 1px solid $theme-color;
      color: $theme-color;
      &:hover{
        background-color: $theme-color;
        color: white;
      }
    }
  }
}
</style>