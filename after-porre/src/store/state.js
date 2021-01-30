// https://vuex.vuejs.org/en/state.html

export default () => ({
    valor: 0,

    // Músicas & Efeitos Sonoros
    sounds: [
      { id: 'inicio_inicio', path: require('@/assets/sounds/inicio_inicio.mp3')},
      { id: 'inicio_loop', path: require('@/assets/sounds/inicio_loop.mp3')},
      { id: 'balada_inicio', path: require('@/assets/sounds/balada_inicio.mp3')},
      { id: 'balada_loop', path: require('@/assets/sounds/balada_loop.mp3')},
      { id: 'quarto_inicio', path: require('@/assets/sounds/quarto_inicio.mp3')},
      { id: 'quarto_loop', path: require('@/assets/sounds/quarto_loop.mp3')},
      { id: 'externa_noite_inicio', path: require('@/assets/sounds/externa_noite_inicio.mp3')},
      { id: 'externa_noite_loop', path: require('@/assets/sounds/externa_noite_loop.mp3')},
      { id: 'externa_dia_inicio', path: require('@/assets/sounds/externa_dia_inicio.mp3')},
      { id: 'externa_dia_loop', path: require('@/assets/sounds/externa_dia_loop.mp3')},
      { id: 'melhor_amigo_inicio', path: require('@/assets/sounds/melhor_amigo_inicio.mp3')},
      { id: 'melhor_amigo_loop', path: require('@/assets/sounds/melhor_amigo_loop.mp3')},
      { id: 'interesse_romantico_inicio', path: require('@/assets/sounds/interesse_romantico_inicio.mp3')},
      { id: 'interesse_romantico_loop',   path: require('@/assets/sounds/interesse_romantico_loop.mp3')},
      { id: 'cartorio_inicio', path: require('@/assets/sounds/cartorio_inicio.mp3')},
      { id: 'cartorio_loop',   path: require('@/assets/sounds/cartorio_loop.mp3')},
    ],

    // Imagens
    images: [
      // Ícones & Objetos
      { id: 'icone_celular', path: require('@/assets/images/icone_celular.png')},
      { id: 'icone_celular_notif', path: require('@/assets/images/icone_celular_notif.png')},
      { id: 'tela_inicial', path: require('@/assets/images/afterporreTelaInicial.png')},
      { id: 'celular', path: require('@/assets/images/objetos/celular.png')},
      { id: 'coisas', path: require('@/assets/images/objetos/coisas.png')},
      { id: 'cueca', path: require('@/assets/images/objetos/cueca.png')},
      { id: 'oculos', path: require('@/assets/images/objetos/oculos.png')},
      { id: 'papel', path: require('@/assets/images/objetos/papel.png')},
      { id: 'remedio', path: require('@/assets/images/objetos/remedio.png')},

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
      { id: 'melhor_amigo_pe', path: require('@/assets/images/melhor_amigo/melhor_amigo_pe.png')},

      // Cenários
      { id: 'bar', path: require('@/assets/images/cenario/bar.png')},
      { id: 'cartorio', path: require('@/assets/images/cenario/cartorio.png')},
      { id: 'quarto_amigo', path: require('@/assets/images/cenario/quarto_amigo.png')},
      { id: 'quarto_dia', path: require('@/assets/images/cenario/quarto_dia.png')},
      { id: 'quarto_manha', path: require('@/assets/images/cenario/quarto_manha.png')},
      { id: 'quarto_noite', path: require('@/assets/images/cenario/quarto_noite.png')},
      { id: 'quarto_amigo_papel', path: require('@/assets/images/cenario/quarto_amigo_papel.png')}
    ],

    // Diálogos
    dialogs: [
      { cena: 1, sequencia: 1, personagem: 'narrador', text: 'Você acorda grunhindo em sua cama, olhos sensíveis a pouca luz do Sol entrando no quarto.'},
      { cena: 1, sequencia: 2, personagem: 'celular', text: 'Uuuugggghhh... que dor de cabeça... será que alguém anotou a placa do ônibus que me atropelou?'},
      { cena: 1, sequencia: 3, personagem: 'mc', text: 'A propósito, como será que eu cheguei em casa?'},
      { cena: 1, sequencia: 4, personagem: 'narrador', text: 'Você coloca as mãos na cabeça, massageando suas tempôras para fazer passar a dor'},
      { cena: 1, sequencia: 5, personagem: 'mc', text: 'Não consigo lembrar de nada que aconteceu ontem a noite... e já é tarde, mal entra luz pela janela...'},      
      { cena: 1, sequencia: 6, personagem: 'mc', text: 'Preciso achar meus óculos, não estou enxergando nada.'},

      { cena: 1, sequencia: 7, personagem: 'óculos', text: 'Droga, se esse é meu óculos antigo, onde será que está o novo? Bom, melhor que nada.'},
      { cena: 1, sequencia: 7, personagem: 'celular_blur', text: 'É, sem meus óculos não vou conseguir ler nada...'},
      { cena: 1, sequencia: 7, personagem: 'cueca_blur', text: 'O que diabos será que é isso?'},
      
      { cena: 1, sequencia: 8, personagem: 'cueca', text: '.... de quem é essa cueca e como ela veio parar aqui?'},
      { cena: 1, sequencia: 8, personagem: 'mc', text: 'Quantas mensagens não lidas...'},
    ],
    
    msgs_cel: [
      { cena: 1, msg: 1, chat: 'melhor_amigo', sender: false, time: '04:07', text: 'Kdê vcê?????'},
      { cena: 1, msg: 2, chat: 'melhor_amigo', sender: false, time: '05:11', text: 'Te perdi na festa e já voltei pra casa.' },
      { cena: 1, msg: 3, chat: 'melhor_amigo', sender: false, time: '05:12', text: 'Avisa quando chegar em casa!'},
      { cena: 1, msg: 4, chat: 'melhor_amigo', sender: false, time: '13:58', text: 'Já acordou?????'},
      { cena: 1, msg: 5, chat: 'melhor_amigo', sender: false, time: '15:33', text: 'Alou???'},
      { cena: 1, msg: 6, chat: 'melhor_amigo', sender: false, time: '16:00', text: 'Você tem duas ligações perdidas'}
    ],

    // Estados Internos do Jogo
    game_start: false,
    oculos: 0,
    notif_celular: false,
    cena: 3,
    musica_inicio: 'inicio_inicio',
    musica_loop: 'inicio_loop'
})
