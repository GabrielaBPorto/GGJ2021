// https://vuex.vuejs.org/en/actions.html

// const nome = function 

export default {
    getSoundById: (state) => (id) => {
        return state.sounds.find(sound => sound.id === id).path
    },
    getImageById: (state) => (id) => {
        return state.images.find(img => img.id === id).path
    }
}