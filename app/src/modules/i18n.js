import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

// eslint-disable-next-line no-undef
const isDev = process.env.NODE_ENV === "development";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(ChainedBackend)
  .init({
    backend: {
      backends: [
        // On désactive le localStorageBackend en développement, pour répercuter les modifications instantanément
        ...(!isDev ? [LocalStorageBackend] : []),
        resourcesToBackend((language) => {
          // Pour l'instant, on gère les paths à la main pour que parcel s'en
          // occupe tout seul
          switch (language) {
            case "en-DEFAULTS":
              return import(`../locales/en/translation.json`);
            case "fr-DEFAULTS":
              return import(`../locales/fr/translation.json`);
          }
        }),
        HttpBackend,
      ],
      backendOptions: [
        // Options LocalStorageBackend
        ...(!isDev
          ? [
              {
                // Permet de versionner les traductions sur les builds de prod,
                // invalide donc le cache en cas de mise à jour de l'application
                defaultVersion: process.env.APP_VERSION, // eslint-disable-line no-undef
                expirationTime: 12 * 60 * 60 * 1000, // 12 heures
              },
            ]
          : []),
        // Options ResourceToBackend
        {},
        // Options HttpBackend
        {
          loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
      ],
    },
    supportedLngs: ["en", "fr"],
    nonExplicitSupportedLngs: true,
    fallbackLng: {
      en: ["en-DEFAULTS"],
      fr: ["fr-DEFAULTS"],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      // On ne gère pas les variants pour l'instant, on le supprime donc de la
      // détection, pour éviter de faire une requête supplémentaire inutile au
      // backend http (requête sur fr-FR, puis sur fr après la 404), qui bloque
      // l'affichage initial (fr-FR => fr)
      convertDetectedLanguage: (lng) => lng.split("-")[0],
    },
  });

export default i18n;
