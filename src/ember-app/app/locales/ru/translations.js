import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Avto',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avto',
          title: 'Avto'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
