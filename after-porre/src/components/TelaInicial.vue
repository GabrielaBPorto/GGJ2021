<template>
    <v-container fluid> 
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
        audioIsPlaying: false,
    }),
    components:{
        TituloInicial
    },
    methods: {
      soundStart(){
        
      },

      playsound (nomeArquivo) {
        const arqBase = require(`@/assets${nomeArquivo}`)
        const sound = new Audio(arqBase);
        sound.volume=0.1;

        sound.addEventListener('ended', () => {
        this.audioIsPlaying=false,
        console.log("audioIsPlaying: " + this.audioIsPlaying);
        });

        if (!this.audioIsPlaying) {
          var playPromise = sound.play()
          if (playPromise !== undefined) {
            playPromise.then( () => {
              console.log('Música tocando')
              this.audioIsPlaying = true
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
