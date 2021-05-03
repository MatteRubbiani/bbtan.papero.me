<template>
<div class="home_wrapper">
  <UserHamburgerMenu :show="showHamburgerMenu"
                     :src="require('@/assets/hamburger_icon_dark.png')"
                     @toggle-show="showHamburgerMenu=$event"/>
  <ActionsMenu :highest-score="game.highestScore"></ActionsMenu>
  <GameScene></GameScene>
</div>
</template>

<script>
import axios from "axios";
import store from "../store";
//import mitt from "mitt"

import UserHamburgerMenu from "../components/UserHamburgerMenu";
import ActionsMenu from "../components/ActionsMenu";
import GameScene from "../components/GameScene";
import {urls} from "../constants/constants";

//window.mitt = window.mitt ||  new mitt()

export default {
  name: "Game",
  components: {GameScene, ActionsMenu, UserHamburgerMenu},
  data() {
    return {
      showHamburgerMenu: false,
      game: {highestScore: 0}
    }
  },
  methods: {
    createNewGame(){
      let blocks = [1, 0, 1, 1, 1]
      return {
        blocks,
        level: 1
      }
    }
  },
  mounted() {
    axios.get(urls.game).then((res) => {
      this.game = res.data ? res.data : this.createNewGame()
    })
  },
  beforeRouteEnter(to, from, next){
    const createLocalAccount = () => {
      axios
          .get(urls.createLocalAccountUrl)
          .then((response) => {
            store.dispatch("setLogged", false);
            store.dispatch("setUsername", response.data.username);
            next();
          })
          .catch(() => {
            location.href = location.origin + "/error?from=" + location.pathname;
          });
    }
    if (store.state.logged === -1 || store.state.username === "") {
      axios.get(urls.getLoginInfoUrl)
          .then(response => {
            if (!response.data) createLocalAccount();
            else {
              store.dispatch("setLogged", response.data.google_signed_in);
              store.dispatch("setUsername", response.data.username);
              next();
            }
          })
          .catch(() => {
            location.href = location.origin + "/error?from=" + location.pathname;
          });
    } else if(store.state.username === null && store.state.logged === false){
      createLocalAccount();
    } else next();
  }
}
</script>

<style scoped lang="scss">
$theme-color: #59007a;
$second-color: #ffffff;

.home_wrapper{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: $second-color;
}
</style>