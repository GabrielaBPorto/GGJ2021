<template>
    <div id="soundController">
    </div>
</template>
<script>

export default {
    data: () => ({
        audioIsPlaying: false,
        music: Audio,
        sounds: Audio
    }),
    components:{        
    },
    methods: {
      musicStart(){
          this.music.load(this.$store.getters.getSceneMusicStart());
          this.music.volume = 0.6;

          this.music.addEventListener('ended', () => {
              console.log('Acabou a música')
              this.music.load(this.$store.getters.getSceneMusicLoop())
              this.music.loop = true
              this.music.play()
              
          });

          if (!this.audioIsPlaying) {
              var playPromise = this.music.play()
              if (playPromise !== undefined) {
                    playPromise.then(() => {
                    console.log('Música tocando')
                    this.audioIsPlaying = true
                  })
                  .catch(error => {
                    console.error('Erro: ' + error)
                  })
              }
          }
      },
      
      soundEffect (efeito) {
            this.sounds.load(this.getters.getSoundById(efeito))
            var effectPromise = this.sounds.play()
            if (effectPromise !== undefined) {
                effectPromise.then(() => {
                    console.log('Tocando efeito: ' + efeito )
                })
                effectPromise.catch(error => {
                    console.error('Erro: ' + error)
                })
            }
      }
    },
    mounted: {
        
    }
  }
</script>
