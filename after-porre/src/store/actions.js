// https://vuex.vuejs.org/en/actions.html

// const nome = function 

export default {
    trocarCena( { commit, getters }) {
        commit('trocarCena');
        const payload = { 'inicio': getters.getSceneMusicStart(), 'loop': getters.getSceneMusicLoop()}
        commit('alterarMusica', payload)
        commit('audioPlaying', false)
    },

    rotaCena1 ( {commit, rota} ) {
        commit('rotaCena1', rota)
    },
    
    musicStart ( {commit, state, getters }) {
        if (!state.audioIsPlaying){
            commit('audioPlaying', true)
            const payload = { 'inicio': getters.getSoundById(state.musica_inicio), 'loop': getters.getSoundById(state.musica_loop) }
            commit('changeMusic', payload)
        }
    }
}
  
  
  