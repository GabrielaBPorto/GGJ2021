<template>
  <v-container>
    <v-row class="mx-5">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="12">
          <v-card flat class="d-flex justify-center">
              <v-btn v-on:click="playsound('/yoshi-tongue.mp3')">START</v-btn>
          </v-card>
      </v-col>
    </v-row>
  </v-container>  
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
              console.error('o: ' + error)
            })
          }
        }
      }
    }
</script>
