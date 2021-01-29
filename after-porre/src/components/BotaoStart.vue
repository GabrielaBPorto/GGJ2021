<template>
  <div>
    <v-btn v-on:click="playsound('/yoshi-tongue.mp3')">MLEM</v-btn>
  </div>  
</template>
<script>
export default {
    data: () => ({
    }),   
    methods: {
      playsound: function (nomeArquivo) {
        const arqBase = require(`@/assets${nomeArquivo}`)
        const sound = new Audio(arqBase);
        var playPromise = sound.play();

        if (playPromise !== undefined) {
            playPromise.then(response => {
              console.log('Foi: ' + response)
            })
            .catch(error => {
              console.log('Erro: ' + error)
            })
          }
        }
      }
    }
</script>
