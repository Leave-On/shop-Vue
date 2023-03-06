import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: ['en', 'ru']
  })

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}


// ,
//     backend: {
//       // for all available options read the backend's repository readme file
//       loadPath: '/locales/{{lng}}/{{ns}}.json'
//     }