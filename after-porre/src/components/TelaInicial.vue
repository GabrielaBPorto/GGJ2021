<template>
    <v-container fluid>
        <v-row justify="center" align="end">
            <v-col cols="12" sm="6" justify="center" align="end">
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
import TituloInicial from './TituloInicial';
import BotaoStart from './BotaoStart.vue'
export default {
    data: () => ({
        
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
