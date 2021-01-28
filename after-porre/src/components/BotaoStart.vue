<template>
  <v-btn v-on:click="playsound('http://www.sousound.com/music/healing/healing_01.mp3')">MLEM</v-btn>
</template>
<script>
export default {
    data: () => ({
    }),
    methods: {
      playsound: function (nomeArquivo) {
        var sound = new Audio(nomeArquivo);
        console.log(sound)
        sound.play();
        }
      }
    }
</script>
