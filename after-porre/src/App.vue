<template>
  <v-app>
    <v-main>
      <TelaInicial/>
    </v-main>
  </v-app>
</template>

<script>
import TelaInicial from './components/TelaInicial';

export default {
  name: 'App',

  components: {
    TelaInicial,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.v-main{
  background-color: #331a38;
}
</style>