<template>
    <v-card class="px-2 d-flex align-end justify-center" :height="heightSize" flat>
        <v-row>
            <v-spacer></v-spacer>
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
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
#titulo-parte1{
    color: #f579aa;
    font-size: 117px;
    font-family: 'Major Mono Display', monospace;
}
#titulo-parte2{
    color: #a7e5fb;
    font-size: 60px;
    font-family: 'Major Mono Display', monospace;
}
.v-card {
    background-color: transparent !important;
}

</style>