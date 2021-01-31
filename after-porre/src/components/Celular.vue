<template>
    <v-container class="mt-0 pt-0">
        <v-card
            max-width="450"
            class="mx-auto"
        >
            <v-card max-width="450" class="pa-2" color="cyan">
                
                <v-card color="white">
                    <v-toolbar
                    color="green"
                    dark
                    class="d-flex justify-center align-center"
                    >
                    <v-avatar>
                         <v-img :src="characterImage('melhor_amigo')"></v-img>
                    </v-avatar>
                    <v-spacer></v-spacer>
                        <v-toolbar-title >Melhor amigo</v-toolbar-title>
                    </v-toolbar>
                    <v-virtual-scroll
                        :bench="benched"
                        :items="msgs"
                        height="730"
                        item-height="80"
                    >
                        <template v-slot:default="{ item }">
                            <v-container fluid v-if="!item.sender" :key="item.id" class="my-2 pa-1">

                                    <v-list-item
                                    :key="item.title"
                                    class="d-flex justify-center"
                                    style="background-color:yellow;border:solid;border-radius:50px" 
                                    >

                                        <v-list-item-content >
                                        
                                                <v-list-item-title class="mt-2" >{{ item.text }}</v-list-item-title>
                                                <v-list-item-subtitle class="d-flex justify-end align-end">{{ item.time }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-container>
                                <v-container fluid v-if="item.sender" :key="item.id" class="my-2 pa-1">
                                    <v-list-item
                                    :key="item.title"
                                    class="d-flex justify-center"
                                    style="background-color:green;border:solid;border-radius:50px"
                                    >
                                        <v-list-item-content  >
                                                <v-list-item-title class="mt-2" >{{ item.text }}</v-list-item-title>
                                                <v-list-item-subtitle class="d-flex justify-end align-end">{{ item.time }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-container>
                        </template>
                    </v-virtual-scroll>
                    <v-card>
                        <v-textarea
                            disabled
                            class="ma-1 pa-1"
                            filled
                            dense
                            height="40px"
                            value=". . ."
                            append-icon="mdi-send"
                            ></v-textarea>
                        
                    </v-card>
                </v-card>
            </v-card>
        </v-card>
    </v-container>
</template>
<script>
    
export default {
    data: () => ({
        msgs : [
            { cena: 1, msg: 1, chat: 'melhor_amigo', sender: false, time: '04:07', text: 'Kdê vcê?????'},
            { cena: 1, msg: 2, chat: 'melhor_amigo', sender: false, time: '05:11', text: 'Te perdi na festa e já voltei pra casa.' },
            { cena: 1, msg: 3, chat: 'melhor_amigo', sender: false, time: '05:12', text: 'Avisa quando chegar em casa!'},
            { cena: 1, msg: 4, chat: 'melhor_amigo', sender: false, time: '13:58', text: 'Já acordou?????'},
            { cena: 1, msg: 5, chat: 'melhor_amigo', sender: false, time: '15:33', text: 'Alou???'},
            { cena: 1, msg: 6, chat: 'melhor_amigo', sender: false, time: '16:00', text: 'Você tem duas ligações perdidas'},
            { cena: 1, msg: 7, chat: 'melhor_amigo', sender: true, time: '16:59', text: 'Bom dia...'},
            { cena: 1, msg: 8, chat: 'melhor_amigo', sender: true, time: '17:00', text: 'Não sei como nem quando cheguei'},
            { cena: 1, msg: 9, chat: 'melhor_amigo', sender: true, time: '17:00', text: 'Mas tirando a ressaca eu tô bem, acho'},
            { cena: 1, msg: 10, chat: 'melhor_amigo', sender: true, time: '17:01', text: 'O que foi que aconteceu ontem a noite???'},],
            benched: 0,
    }),
    methods: {
        characterImage(avatarName) {
            return this.$store.getters.getImageById(avatarName)
        },
    }
}
</script>