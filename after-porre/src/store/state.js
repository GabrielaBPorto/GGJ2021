// https://vuex.vuejs.org/en/state.html

export default () => ({
    valor: 0,
    sounds: [
      { id: 'inicio_inicio', path: require('@/assets/sounds/inicio_inicio.mp3')},
      { id: 'inicio_loop', path: require('@/assets/sounds/inicio_loop.mp3')},
      { id: 'balada_inicio', path: require('@/assets/sounds/balada_inicio.mp3')},
      { id: 'balada_loop', path: require('@/assets/sounds/balada_loop.mp3')},
      { id: 'quarto_inicio', path: require('@/assets/sounds/quarto_inicio.mp3')},
      { id: 'quarto_loop', path: require('@/assets/sounds/quarto_loop.mp3')},
      { id: 'externa_noite_inicio', path: require('@/assets/sounds/externa_noite_inicio.mp3')},
      { id: 'externa_noite_loop', path: require('@/assets/sounds/externa_noite_loop.mp3')}
    ],
    images: [
      // Ícones & Objetos
      { id: 'icone_celular', path: require('@/assets/images/icone_celular.png')},
      { id: 'icone_celular_notif', path: require('@/assets/images/icone_celular_notif.png')},
      { id: 'tela_inicial', path: require('@/assets/images/afterporreTelaInicial.png')},

      // Bartender
      { id: 'bartender_feliz', path: require('@/assets/images/bartender/bartender_feliz.png')},
      { id: 'bartender_nojo', path: require('@/assets/images/bartender/bartender_nojo.png')},
      { id: 'bartender_pensativa', path: require('@/assets/images/bartender/bartender_pensativa.png')},
      { id: 'bartender_rindo', path: require('@/assets/images/bartender/bartender_rindo.png')},
      { id: 'bartender_seria', path: require('@/assets/images/bartender/bartender_seria.png')},
      { id: 'bartender_surpresa', path: require('@/assets/images/bartender/bartender_surpresa.png')},
      { id: 'bartender', path: require('@/assets/images/bartender/bartender.png')},

      // Interesse Romantico
      { id: 'ir_blush', path: require('@/assets/images/interesse_romantico/ir_blush.png')},
      { id: 'ir_nojo', path: require('@/assets/images/interesse_romantico/ir_nojo.png')},
      { id: 'ir_pensando_blush', path: require('@/assets/images/interesse_romantico/ir_pensando_blush.png')},
      { id: 'ir_pensando', path: require('@/assets/images/interesse_romantico/ir_pensando.png')},
      { id: 'ir_rindo', path: require('@/assets/images/interesse_romantico/ir_rindo.png')},
      { id: 'ir_serio', path: require('@/assets/images/interesse_romantico/ir_serio.png')},
      { id: 'ir_sorrindo_blush', path: require('@/assets/images/interesse_romantico/ir_sorrindo_blush.png')},
      { id: 'ir_sorrindo', path: require('@/assets/images/interesse_romantico/ir_sorrindo.png')},
      { id: 'ir_surpreso_blush', path: require('@/assets/images/interesse_romantico/ir_surpreso_blush.png')},
      { id: 'ir_surpreso', path: require('@/assets/images/interesse_romantico/ir_surpreso.png')},
      { id: 'ir', path: require('@/assets/images/interesse_romantico/ir.png')},

      // Melhor Amigo
      { id: 'melhor_amigo_pensativo', path: require('@/assets/images/melhor_amigo/melhor_amigo_pensativo.png')},
      { id: 'melhor_amigo_ressaca', path: require('@/assets/images/melhor_amigo/melhor_amigo_ressaca.png')},
      { id: 'melhor_amigo_serio', path: require('@/assets/images/melhor_amigo/melhor_amigo_serio.png')},
      { id: 'melhor_amigo_surpreso', path: require('@/assets/images/melhor_amigo/melhor_amigo_surpreso.png')},
      { id: 'melhor_amigo_zoando', path: require('@/assets/images/melhor_amigo/melhor_amigo_zoando.png')},
      { id: 'melhor_amigo', path: require('@/assets/images/melhor_amigo/melhor_amigo.png')},

      // Cenários
      { id: 'bar', path: require('@/assets/images/cenario/bar.png')},
      { id: 'cartorio', path: require('@/assets/images/cenario/cartorio.png')},
      { id: 'quarto_amigo', path: require('@/assets/images/cenario/quarto_amigo.png')},
      { id: 'quarto_dia', path: require('@/assets/images/cenario/quarto_dia.png')},
      { id: 'quarto_manha', path: require('@/assets/images/cenario/quarto_manha.png')},
      { id: 'quarto_noite', path: require('@/assets/images/cenario/quarto_noite.png')}
  ] 
})
