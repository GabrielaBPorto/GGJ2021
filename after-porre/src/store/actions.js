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
        var dialog = []

        if (state.cena === 1 && state.dialogo_sequencia < 8 && !state.cena1_rota){
            commit('nextDialog')
            dialog = getters.getDialog(state.cena, state.dialogo_sequencia)
            commit('adicionaDialogVisto', dialog)
            if (state.dialogo_sequencia === 8){
                commit('notif_celular')
            }
        }
        if (state.cena === 1 && state.dialogo_sequencia === 8 && state.msgs_sequencia === 31){
            commit('nextDialog')
            dialog = getters.getDialog(state.cena, state.dialogo_sequencia)
            commit('adicionaDialogVisto', dialog)
        }
    },

    proxMsg ( {commit, state, getters }){
        var dialog = []

        if(state.cena === 1 && state.msgs_sequencia < 14 && !state.cena1_rota){
            commit('nextMsg')
            dialog = getters.getMsgs(state.cena, state.msgs_sequencia)
            commit('adicionaMsgVista', dialog)
        }

        if(state.cena === 1 && state.msgs_sequencia === 14 && state.cena1_rota === 1){
            commit('setMsgSequence', 15)
            dialog = getters.getMsgs(state.cena, state.msgs_sequencia)
            commit('adicionaMsgVista', dialog)
        }

        if(state.cena === 1 && state.msgs_sequencia === 14 && state.cena1_rota === 2){
            commit('setMsgSequence', 24)
            dialog = getters.getMsgs(state.cena, state.msgs_sequencia)
            commit('adicionaMsgVista', dialog)
        }

        if(state.cena === 1 && state.msgs_sequencia < 31 && state.cena1_rota > 0){
            if (state.msgs_sequencia === 23){
                commit('setMsgSequence', 31)
            }
            else{
                commit('nextMsg')
            }
            dialog = getters.getMsgs(state.cena, state.msgs_sequencia)
            commit('adicionaMsgVista', dialog)
            if (state.msgs_sequencia === 31){
                commit('notif_celular')
            }
        }
    }
}
  
  
  