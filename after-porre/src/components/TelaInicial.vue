<template>
    <v-container fluid @click="playsound('/Inicio_full.mp3')"> 
        <v-row justify="center" align="end">
            <v-col cols="12" sm="6" justify="center" align="end">
                <TituloInicial />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import TituloInicial from './TituloInicial';
export default {
    data: () => ({
        audioIsPlaying:false,
    }),
    components:{
        TituloInicial
    },
    methods: {
      playsound: function (nomeArquivo) {
        const arqBase = require(`@/assets${nomeArquivo}`)
        const sound = new Audio(arqBase);
        sound.volume=0.1;
        sound.loop=true;

        sound.addEventListener('ended', () => {
          this.audioIsPlaying=false,
          console.log("audioIsPlaying: " + this.audioIsPlaying);
        });
        
        if (!this.audioIsPlaying) {
          var playPromise = sound.play();
          if (playPromise !== undefined) {
            
              playPromise.then(response => {
                console.log('Foi: ' + response);
                this.audioIsPlaying=true;
                console.log("audioIsPlaying: " + this.audioIsPlaying)
              })
              .catch(error => {
                console.error('Erro: ' + error)
              })
            }
          }
        }
      },
mounted: {
this:"playsound('/Inicio_full.mp3')",
}
  }
</script>
