<template>
  <Game></Game>
</template>

<script>
import Game from "./views/Game";
export default {
  name: 'App',
  components: {Game},
}
</script>

<style lang="scss">
html{
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}

body{
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: "Comic Sans MS", serif;
}

h1{
  font-size: 500%;
  margin: 2% 0 0 0;
  color: white;
}

button{
  font-size: 300%;
  padding: 2%;
  border-radius: 10px;
  outline: none;
  color: white;
  background: none;
  border: 2px solid white;
  transition: all 0.5s;
  margin: 10px;

&:hover{
   background-color: white;
   color: black;
 }
}

.popup-background{
  z-index: 2;
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
}

#app {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-size: cover;
  background-position: center;
}

::-webkit-scrollbar {
  width: 0;
}
</style>