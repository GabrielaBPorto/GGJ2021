<template>
    <v-container fluid class="mx-0 pa-0">
        <v-img id="fundo"
            lazy-src="https://cdn.discordapp.com/attachments/804482043093844018/804844809802088478/bar2.png"
            src="https://cdn.discordapp.com/attachments/804482043093844018/804844809802088478/bar2.png"
            style="position:relative; display:inline-block;"
            ></v-img>
        <v-container >
            <v-row style="position:absolute;top:0px;right:0px">
                <v-container style="right:0px" class="ma-2 d-flex justify-end">
                    <v-spacer></v-spacer>
                    <v-col cols="12" sm="12">
                        <v-card id="celular" class="d-flex justify-end" style="background-color: transparent !important;">
                            <v-img src="https://cdn.discordapp.com/attachments/804368222953537627/804524478323359794/iconecelular.png"></v-img>
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
        
    }),
    methods: {
        backgroundImage() {
            return 'background-image: url(https://cdn.discordapp.com/attachments/804482043093844018/804844809802088478/bar2.png);'
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
</style>
