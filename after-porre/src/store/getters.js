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
            case 0:
                return getters.getImageById('tela_inicial')
            case 1:
                return getters.getImageById('quarto_manha')
            case 3:
                return getters.getImageById('bar')
            default:
                return getters.getImageById('quarto_dia')
        }
    },
    getSceneMusicStart: (state, getters) => () => {
        switch (state.cena) {
            case 0:
                return getters.getSoundById('inicio_inicio')
            case 1:
                return getters.getSoundById('quarto_inicio')
            case 3:
                return getters.getSoundById('balada_inicio')
            default:
                return getters.getSoundById('inicio_inicio')
        }
    },
    getSceneMusicLoop: (state, getters) => () => {
        switch (state.cena) {
            case 0:
                return getters.getSoundById('inicio_loop')
            case 1:
                return getters.getSoundById('quarto_loop')
            case 3:
                return getters.getSoundById('balada_loop')
            default:
                return getters.getSoundById('inicio_loop')
        }
    },
    getMsgs: (state) => (cena, msg) => {
        return state.msgs.find(dialog => dialog.cena === cena & dialog.msg === msg)
    },
    getObjectMsg: (state) => (cena, item) => {
        return state.objetos.find(objeto => objeto.cena === cena & objeto.objeto === item)
    }
}