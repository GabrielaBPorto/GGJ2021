// https://vuex.vuejs.org/en/actions.html

// const nome = function 

export default {
    trocarCena( { commit, getters }) {
        commit('trocarCena');
        const payload = { 'inicio': getters.getSceneMusicStart(), 'loop': getters.getSceneMusicLoop()}
        commit('alterarMusica', payload)
        commit('audioPlaying', false)
        commit('resetSequencias')
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
    },

    proxDialog ( {commit, state, getters }){
        commit('nextDialog')
        var dialog = getters.getDialog(state.cena, state.dialogo_sequencia)
        commit('adicionaDialogVisto', dialog)
    },

    proxMsg ( {commit, state, getters }){
        commit('nextMsg')
        var dialog = getters.getMsgs(state.cena, state.msgs_sequencia)
        commit('adicionaMsgVista', dialog)
    }
}
  
  
  