import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAvtoЗаданиеLForm from './forms/i-i-s-avto-задание-l';
import IISAvtoЗаявкаLForm from './forms/i-i-s-avto-заявка-l';
import IISAvtoКурсLForm from './forms/i-i-s-avto-курс-l';
import IISAvtoМатериалыLForm from './forms/i-i-s-avto-материалы-l';
import IISAvtoПреподавательLForm from './forms/i-i-s-avto-преподаватель-l';
import IISAvtoСтудентLForm from './forms/i-i-s-avto-студент-l';
import IISAvtoЗаданиеEForm from './forms/i-i-s-avto-задание-e';
import IISAvtoЗаявкаEForm from './forms/i-i-s-avto-заявка-e';
import IISAvtoКурсEForm from './forms/i-i-s-avto-курс-e';
import IISAvtoМатериалыEForm from './forms/i-i-s-avto-материалы-e';
import IISAvtoПреподавательEForm from './forms/i-i-s-avto-преподаватель-e';
import IISAvtoСтудентEForm from './forms/i-i-s-avto-студент-e';
import IISAvtoБДМатериаловModel from './models/i-i-s-avto-б-д-материалов';
import IISAvtoЗаданиеModel from './models/i-i-s-avto-задание';
import IISAvtoЗаявкаModel from './models/i-i-s-avto-заявка';
import IISAvtoКурсModel from './models/i-i-s-avto-курс';
import IISAvtoМатериалыModel from './models/i-i-s-avto-материалы';
import IISAvtoПреподавательModel from './models/i-i-s-avto-преподаватель';
import IISAvtoСтудентModel from './models/i-i-s-avto-студент';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avto-б-д-материалов': IISAvtoБДМатериаловModel,
    'i-i-s-avto-задание': IISAvtoЗаданиеModel,
    'i-i-s-avto-заявка': IISAvtoЗаявкаModel,
    'i-i-s-avto-курс': IISAvtoКурсModel,
    'i-i-s-avto-материалы': IISAvtoМатериалыModel,
    'i-i-s-avto-преподаватель': IISAvtoПреподавательModel,
    'i-i-s-avto-студент': IISAvtoСтудентModel
  },

  'application-name': 'Avto',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Avto',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avto',
          title: 'Avto'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        avto: {
          caption: 'Avto',
          title: 'Avto',
          'i-i-s-avto-курс-l': {
            caption: 'Курс',
            title: ''
          },
          'i-i-s-avto-задание-l': {
            caption: 'Задание',
            title: ''
          },
          'i-i-s-avto-студент-l': {
            caption: 'Студент',
            title: ''
          },
          'i-i-s-avto-преподаватель-l': {
            caption: 'Преподаватель',
            title: ''
          },
          'i-i-s-avto-материалы-l': {
            caption: 'Материалы',
            title: ''
          },
          'i-i-s-avto-заявка-l': {
            caption: 'Заявка',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-avto-задание-l': IISAvtoЗаданиеLForm,
    'i-i-s-avto-заявка-l': IISAvtoЗаявкаLForm,
    'i-i-s-avto-курс-l': IISAvtoКурсLForm,
    'i-i-s-avto-материалы-l': IISAvtoМатериалыLForm,
    'i-i-s-avto-преподаватель-l': IISAvtoПреподавательLForm,
    'i-i-s-avto-студент-l': IISAvtoСтудентLForm,
    'i-i-s-avto-задание-e': IISAvtoЗаданиеEForm,
    'i-i-s-avto-заявка-e': IISAvtoЗаявкаEForm,
    'i-i-s-avto-курс-e': IISAvtoКурсEForm,
    'i-i-s-avto-материалы-e': IISAvtoМатериалыEForm,
    'i-i-s-avto-преподаватель-e': IISAvtoПреподавательEForm,
    'i-i-s-avto-студент-e': IISAvtoСтудентEForm
  },

});

export default translations;
