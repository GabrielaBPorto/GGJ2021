export default {
    data: () => ({
        heightSize: window.innerHeight
    }),
    created() {
        this.heightSize = window.innerHeight
        this.pageLoaded()
    },
    components: {},
    methods: {
        startButton() {
            console.log('meow')
            this.$router.push('/cena')
                // this.$store.dispatch('trocarCena')
                // this.$router.push('/cena')
                // this.$store.dispatch('musicStart')
        },

        pageLoaded() {
            // this action, music Start
            // this.$store.dispatch('musicStart')
        },
    }
}