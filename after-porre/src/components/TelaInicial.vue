<template>
    <v-container fluid>
        <v-row align="center">
            <v-col cols="12" sm="6" justify="center">
                <TituloInicial />
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col cols="12" sm="6" justify="center">
                <BotaoStart/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import BotaoStart from './BotaoStart.vue';
import TituloInicial from './TituloInicial';
export default {
    data: () => ({
        init:''          
    }),
    components:{
        TituloInicial,
        BotaoStart
    },
    mounted (){
        console.log(this.$store.state.valor)
    }
  }
</script>
