import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      dark: {
        colors: {
          primary: '#4a00ff'
        }
      },
      light: {
        colors: {
          primary: '#4a00ff'
        }
      }
    }
  }
})