// https://vuex.vuejs.org/en/actions.html

// const nome = function 

export default {
    trocarCena (state) {
        state.cena++
    },
    oculosAntigos (state) {
        state.oculos = 1
    },
    oculosNovos (state) {
        state.oculos = 2
    },
    alterarMusica (state, inicio, loop){
        state.musica_inicio = inicio;
        state.musica_loop = loop;
    },
    rotaCena1 (state, rota){
        state.rotaCena1 = rota
    }

}
  
  
  