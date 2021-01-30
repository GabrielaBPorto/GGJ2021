<template>
    <v-card class="px-2 d-flex align-end justify-center" :height="heightSize" flat>
        <v-img
            lazy-src="@/assets/images/afterporreTelaInicial.png"
            src="@/assets/images/afterporreTelaInicial.png"
            style="position:relative; display:inline-block;top:45%;margin-right:20px"
            ></v-img>
        <v-row style="position:absolute;top:45%">
            <v-container style="border:solid;border-color:#a7e5fb;">
                <v-col cols="12" sm="12">
                    <v-card flat class="d-flex justify-center">
                        <v-card-title id="titulo-parte1">After</v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-card flat class="d-flex justify-center mx-5">
                        <v-card-title id="titulo-parte2">Porre</v-card-title>
                    </v-card>
                </v-col>
            </v-container>
             <v-container>
                <v-row class="mt-5">
                    <v-spacer class="mt-4"></v-spacer>
                    <v-col cols="12" sm="12" class="mt-5">
                        <v-card flat class="d-flex justify-center">
                            <v-btn id="botaoStart" outlined flat x-large v-on:click="functionsStartButton()">START</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container> 
        </v-row>
    </v-card>
</template>
<script>

export default {
    data: () => ({
        heightSize: ''
    }),
    mounted() {
        this.heightSize = window.innerHeight/2
    },
    methods: {
        functionsStartButton(){
            this.$store.dispatch('trocarCena')
            this.playsound(this.$store.getters.getSceneMusicStart());
            this.$router.push('/cena')
        },

        playsound: function (nomeArquivo) {
        //const arqBase = this.$store.getters.getSoundById(nomeArquivo)
        const sound = new Audio(nomeArquivo);
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

#titulo-parte1{
    color: #f579aa;
    font-size: 117px;
    font-family: 'Major Mono Display', monospace;
}
#titulo-parte2{
    color: #a7e5fb;
    font-size: 117px;
    font-family: 'Major Mono Display', monospace;
}
.v-card {
    background-color: transparent !important;
}

.teste-wrap{
    position:relative;
    text-align:center;
}
.teste-wrap .v-row{
    position:absolute;
    z-index:1;
    top:50%;
    left:50%;
    padding:0;
    border:0 none;
}
#botaoStart{
    min-height: 84px;
    border-color: #8ef4c0;
}

#botaoStart span{
    height: 100%  !important;
    font-family: 'VT323', monospace;
    color:#8ef4c0;
    font-size: 60px;
}

</style>