<template>
    <v-container fluid class="mx-0 pa-0" :style="styleBlur">
        <v-img id="fundo"
            :lazy-src="backgroundImage()"
            :src="backgroundImage()"
            style="position:relative; display:inline-block;"
            ></v-img>
        <v-container fluid style="position:absolute;top:0px;" id="tela">
            <v-row style="right:0px">
                <v-container fluid class="ma-2 d-flex justify-end">
                    <v-col cols="12" sm="2">
                        <v-card flat @click="openPhone()" :ripple="false" id="celular" class="d-flex justify-end" style="background-color: transparent !important;">
                            <v-img :src="cellphoneImage()" contain max-height="150" max-width="250"></v-img>
                        </v-card>
                    </v-col>
                </v-container>
            </v-row>
            <v-row style="right:0px;min-height:380px;" class="mt-10 pt-10">
                <v-container fluid class="ma-2 d-flex justify-end" v-for="escolha in escolhas" :key="escolha.id" >
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
                <v-container fluid class="ma-2 d-flex justify-end" style="position:relative;">
                    <v-col cols="12" sm="12">
                        <v-card class="caixaTexto" min-height="200px" max-height="200px" @click="getNextDialog()" >
                            <v-img :src="characterImage()" max-height="180" max-width="180"
                            style="position:relative; display:inline-block;top:0;"
                            class="mt-2">
                            </v-img>
                            <v-card-text id="dialogo">
                                {{ this.textoAtual }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="2" style="position:absolute;top:-10%;left:10%">
                        <v-card class="caixaTexto" style="background: rgba(0, 0, 0, 1) !important;">
                            <v-card-text>
                                {{ this.nomePersonagem }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-container>
            </v-row>
        </v-container>
        <v-dialog
            v-model="phone"
            fullscreen
            >
            <Celular />
            
        </v-dialog>
    </v-container>
</template>
<script>

import Celular from "@/components/Celular"

export default {
    data: () => ({
        notificationCelular: false,
        escolhas : [],
        textoAtual : '. . .',
        imagemPersonagem : 'transparente',
        sequencia: 0,
        dialog: {},
        nomePersonagem: '',
        phone: true,
        styleBlur: 'filter: blur(5px);'
    }),
    components: {
        Celular
    },
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
        getNextDialog(){
            if (!this.$store.getters.readyNextScene()){
                this.$store.dispatch('proxDialog')
                this.dialog = this.$store.getters.getLastDialog()
                this.textoAtual = this.dialog.text
                this.notificationCelular = this.$store.getters.getCellNotif()
                this.nomePersonagem = this.dialog.nome
                this.imagemPersonagem = this.dialog.imagem
            }
            else {
                this.$store.dispatch('trocarCena')
                this.$router.push('/cena')
                this.$store.dispatch('musicStart')
            }
        },
        characterImage() {
            return this.$store.getters.getImageById(this.imagemPersonagem)
        },
        openPhone(){
            this.dialog = !this.dialog
            if(this.dialog){
                this.styleBlur = "filter: blur(5px)"
            }
            else{
                this.styleBlur = 'filter: blur(0px);'
        }
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
    position:absolute;
    top:0;
    left:10%;
    margin-top:15px
}
.celular {
    max-width:250px;
    max-height:250px;
    width: auto;
    height: auto;
}

</style>
