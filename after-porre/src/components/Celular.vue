<template>
    <v-container class="mt-0 pt-0">
        <v-card
        max-width="475">
            <v-card
                max-width="450"
                class="mx-auto"
            >
            <v-toolbar
            color="green"
            dark
            class="d-flex justify-center align-center"
            >
                <v-toolbar-title >Melhor amigo</v-toolbar-title>
            </v-toolbar>

            <v-list three-line>
                <template v-for="(item) in msgs">
                    <v-divider
                    :key="item.id"
                    :inset="item.inset"
                    ></v-divider>

                    <v-list-item
                    :key="item.title"
                    >
                    <v-list-item-avatar>
                        <v-img :src="characterImage(item.chat)"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content >
                        <v-list-item-title class="mt-2" >{{ item.text }}</v-list-item-title>
                        <v-list-item-subtitle class="d-flex justify-end align-end">{{ item.time }}</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </template>
                </v-list>
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
            { cena: 1, msg: 6, chat: 'melhor_amigo', sender: false, time: '16:00', text: 'Você tem duas ligações perdidas'}],
    }),
    methods: {
        characterImage(avatarName) {
            return this.$store.getters.getImageById(avatarName)
        },
    }
}
</script>