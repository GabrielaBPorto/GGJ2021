<template>
    <v-btn v-on:click="playsound('./mlem.mp3')">MLEM</v-btn>
</template>
<script>
export default {
    data: () => ({
    }),
    methods: {
      playsound: function () {
  var sound = new Audio('mlem.mp3');
  sound.play();
}
    }
    }
</script>
