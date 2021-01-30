// https://vuex.vuejs.org/en/actions.html

// const nome = function 

export default {
    getSoundById: (state) => (id) => {
        return state.sounds.find(sound => sound.id === id).path
    },
    getImageById: (state) => (id) => {
        return state.images.find(img => img.id === id).path
    },
    getDialog: (state) => (cena, sequencia) => {
        return state.dialogs.find(dialog => dialog.cena === cena & dialog.sequencia === sequencia)
    },
    getImageByScene: (state, getters) => () => {
        switch (state.cena) {
            case 1:
                return getters.getImageById('quarto_manha')
            case 3:
                return getters.getImageById('bar')
            default:
                return getters.getImageById('quarto_dia')
        }
    }
}