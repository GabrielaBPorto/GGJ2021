<template>
    <v-container fluid class="mx-0 pa-0">
        <v-img id="fundo"
            :lazy-src="backgroundImage()"
            :src="backgroundImage()"
            style="position:relative; display:inline-block;"
            ></v-img>
        <v-container fluid style="position:absolute;top:0px;">
            <v-row style="right:0px">
                <v-container fluid class="ma-2 d-flex justify-end">
                    <v-col cols="12" sm="2">
                        <v-card flat @click="changePhoneNotification()" :ripple="false" id="celular" class="d-flex justify-end" style="background-color: transparent !important;">
                            <v-img :src="cellphoneImage()" contain max-height="150" max-width="250"></v-img>
                        </v-card>
                    </v-col>
                </v-container>
            </v-row>
            <v-row style="right:0px;" class="mt-10 pt-10" >
                <v-container fluid class="ma-2 d-flex justify-end" v-for="escolha in escolhas" :key="escolha.id">
                    <v-col cols="12" sm="4">
                        <v-card min-height="100px" class="caixaTexto" tile>
                            <v-card-text>
                                {{ escolha.msg }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-container>
            </v-row>
            <v-row style="right:0px" class="mt-7 pt-7" >
                <v-container fluid class="ma-2 d-flex justify-end">
                    <v-col cols="12" sm="12">
                        <v-card class="caixaTexto" min-height="200px" max-height="200px" @click="randomizeInfo()">
                            <v-img :src="characterImage()" max-height="180" max-width="180"
                            style="position:relative; display:inline-block;top:0;"
                            class="mt-2">

                            </v-img>
                            <v-card-text id="dialogo" style="position:absolute;top:0;left: 10%">
                                {{this.textoAtual}}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-container>
            </v-row>
        </v-container>
    </v-container>
</template>
<script>

export default {
    data: () => ({
        notificationCelular: false,
        escolhas : [{id:0, msg:'Por que isso'}, {id:1, msg:'2'}],
        textoAtual : '',
        bartenderAtual : 'bartender_rindo',
        sequencia: 0,
        dialog: {}
    }),
    methods: {
        backgroundImage() {
            return this.$store.getters.getImageByScene()
        },
        changePhoneNotification(){
            this.notificationCelular = ! this.notificationCelular
        },
        cellphoneImage(){
            if (this.notificationCelular){
                return this.$store.getters.getImageById('icone_celular_notif')
            }
            else {
                return this.$store.getters.getImageById('icone_celular')
            }
        },
        randomizeInfo(){
            this.sequencia = ((this.sequencia % 7) + 1)
            this.dialog = this.$store.getters.getDialog(this.$store.state.cena, this.sequencia)
            this.textoAtual = this.dialog.text
        },
        characterImage() {
            return this.$store.getters.getImageById(this.bartenderAtual)
        }
    }

  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
#fundo {
    height: 100%;
    width: 100%;
}
#teste {
    position: absolute;
}
.caixaTexto{
    background: rgba(0, 0, 0, 0.35) !important;
    border: solid;
    border-color: #20e2e3 !important;
}
.v-card__text{
    font-family: 'VT323', monospace;
    font-size: 24px !important;
    color: white !important;
}
#dialogo{
    font-size: 30px !important;
    -webkit-text-stroke: 0.5px black;
}
</style>
