<template>
  <v-container>
    <v-row class="mx-5">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="12">
          <v-card flat class="d-flex justify-center">
              <v-btn v-on:click="playsound('inicio_inicio')">START</v-btn>
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
        const arqBase = this.$store.getters.getSoundById(nomeArquivo)
        const sound = new Audio(arqBase);
        var playPromise = sound.play();

        if (playPromise !== undefined) {
          
            playPromise.then(response => {
              console.log('Foi: ' + response)
            })
            .catch(error => {
              console.error('Erro: ' + error)
            })
          }
        }
      }
    }
</script>
