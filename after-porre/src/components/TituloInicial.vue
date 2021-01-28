<template>
    <v-card class="px-2" :height="heightSize" flat>
        <v-card :height="heightSize/2" flat >
            <v-card-title id="titulo1">AFTER</v-card-title>
        </v-card>
        <v-card flat :height="heightSize/2">
            <v-card-title id="titulo2">PORRE</v-card-title>
        </v-card>
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
#titulo1{
    color: #f579aa;
    font-size: 117px;
}
#titulo2{
    color: #a7e5fb;
    font-size: 60px;
}

</style>