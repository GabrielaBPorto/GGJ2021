<template>
    <v-container fluid class="mx-0 pa-0">
        <v-img id="fundo"
            lazy-src="https://cdn.discordapp.com/attachments/804482043093844018/804844809802088478/bar2.png"
            src="https://cdn.discordapp.com/attachments/804482043093844018/804844809802088478/bar2.png"
            style="position:relative; display:inline-block;"
            ></v-img>
        <v-container fluid style="position:absolute;top:0px;">
            <v-row style="right:0px">
                <v-container fluid class="ma-2 d-flex justify-end">
                    <v-col cols="12" sm="2">
                        <v-card flat v-if="!this.notificationCelular" @click="changePhoneNotification()" id="celular" class="d-flex justify-end" style="background-color: transparent !important;">
                            <v-img src="https://cdn.discordapp.com/attachments/804368222953537627/804524478323359794/iconecelular.png" contain max-height="150" max-width="250"></v-img>
                        </v-card>
                        <v-card flat v-else-if="this.notificationCelular" @click="changePhoneNotification()" id="celular" class="d-flex justify-end" style="background-color: transparent !important;">
                            <v-img src="https://cdn.discordapp.com/attachments/804368222953537627/804524480219185242/iconecelularnotif.png" contain max-height="150" max-width="250"></v-img>
                        </v-card>
                    </v-col>
                </v-container>
            </v-row>
            <v-row style="right:0px;" class="mt-10 pt-10" >
                <v-container fluid class="ma-2 d-flex justify-end">
                    <v-col cols="12" sm="4">
                        <v-card min-height="100px" class="caixaTexto" tile>
                            <v-card-text>
                                'Por que siiim'
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-container>
                <v-container fluid class="ma-2 d-flex justify-end">
                    <v-col cols="12" sm="4">
                        <v-card min-height="100px" class="caixaTexto"  tile>
                            <v-card-text>
                                'Por que siiim'
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-container>
            </v-row>
            <v-row style="right:0px" class="mt-7 pt-7" >
                <v-container fluid class="ma-2 d-flex justify-end">
                    <v-col cols="12" sm="12">
                        <v-card class="caixaTexto" min-height="200px" max-height="200px">
                            <v-img src="https://cdn.discordapp.com/attachments/804482043093844018/804887154543034418/bartender_rindo.png" max-height="180" max-width="180"
                            style="position:relative; display:inline-block;top:0;"
                            class="mt-2">

                            </v-img>
                            <v-card-text style="position:absolute;top:0;left: 10%">
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
        escolhas : ['Por que eu quis', 'Por que eu bebi demais'],
        textoAtual : 'WOAAAAAAAAAAAAAA'
    }),
    methods: {
        backgroundImage() {
            return 'background-image: url(https://cdn.discordapp.com/attachments/804482043093844018/804844809802088478/bar2.png);'
        },
        changePhoneNotification(){
            this.notificationCelular = ! this.notificationCelular
        }
    }

  }
</script>
<style>
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
</style>
