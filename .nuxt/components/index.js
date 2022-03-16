export { default as Cena } from '../../components/Cena/index.vue'
export { default as CenaScript } from '../../components/Cena/script.js'
export { default as TelaInicialTela } from '../../components/TelaInicial/Tela/index.vue'
export { default as TelaInicialTelaScript } from '../../components/TelaInicial/Tela/script.js'
export { default as TelaInicialTitulo } from '../../components/TelaInicial/Titulo/index.vue'
export { default as TelaInicialTituloScript } from '../../components/TelaInicial/Titulo/script.js'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
