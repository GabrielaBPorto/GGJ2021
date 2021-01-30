// https://vuex.vuejs.org/en/actions.html

// const nome = function 

export default {
    trocarCena( { commit, getters }) {
        commit('trocarCena');
        const inicio = getters.getSceneMusicStart()
        const loop = getters.getSceneMusicLoop()
        commit('alterarMusica', inicio, loop)
    },
    rotaCena1 ( {commit, rota} ) {
        commit('rotaCena1', rota)
    },    
}
  
  
  