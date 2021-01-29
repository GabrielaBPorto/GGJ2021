<template>
  <v-btn v-on:click="playsound('../assets/yoshi-tongue.mp3')">MLEM</v-btn>
</template>
<script>
export default {
    data: () => ({
    }),
    methods: {
      playsound: function (nomeArquivo) {
        var sound = new Audio(require(nomeArquivo));
        console.log(sound)
        sound.play();
        }
      }
    }
</script>
