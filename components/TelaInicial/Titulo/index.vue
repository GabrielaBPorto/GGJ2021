<template>
    <v-card class="px-2 d-flex align-end justify-center" :height="heightSize">
        <v-img
            lazy-src="./images/afterporreTelaInicial.png"
            src="./images/afterporreTelaInicial.png"
            alt="Imagem de fundo"
            class="background-image"
            ></v-img>
        <v-img
            lazy-src="./images/afterporreTelaInicialPersonagem.png"
            src="./images/afterporreTelaInicialPersonagem.png"
            class="char-image"> </v-img>
        <v-row class="content">
            <v-container class="title-box">
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
                        <v-card flat class="d-flex justify-center" >
                            <v-btn id="botaoStart" outlined text x-large @click="startButton()">START</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container> 
        </v-row>
    </v-card>
</template>

<script src="./script.js" />

<script src="./style.scss" />