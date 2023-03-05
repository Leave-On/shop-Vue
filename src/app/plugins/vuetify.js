import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components'

export default createVuetify({
  aliases: {
    MyButton: VBtn,
  },
  defaults: {
    VBtn: { variant: 'flat' },
    MyButton: { variant: 'tonal' },
  },
  blueprint: md1
})