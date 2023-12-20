import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.avto.caption'),
          title: i18n.t('forms.application.sitemap.avto.title'),
          children: [{
            link: 'i-i-s-avto-курс-l',
            caption: i18n.t('forms.application.sitemap.avto.i-i-s-avto-курс-l.caption'),
            title: i18n.t('forms.application.sitemap.avto.i-i-s-avto-курс-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-avto-задание-l',
            caption: i18n.t('forms.application.sitemap.avto.i-i-s-avto-задание-l.caption'),
            title: i18n.t('forms.application.sitemap.avto.i-i-s-avto-задание-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-avto-студент-l',
            caption: i18n.t('forms.application.sitemap.avto.i-i-s-avto-студент-l.caption'),
            title: i18n.t('forms.application.sitemap.avto.i-i-s-avto-студент-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-avto-преподаватель-l',
            caption: i18n.t('forms.application.sitemap.avto.i-i-s-avto-преподаватель-l.caption'),
            title: i18n.t('forms.application.sitemap.avto.i-i-s-avto-преподаватель-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-avto-материалы-l',
            caption: i18n.t('forms.application.sitemap.avto.i-i-s-avto-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.avto.i-i-s-avto-материалы-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-avto-заявка-l',
            caption: i18n.t('forms.application.sitemap.avto.i-i-s-avto-заявка-l.caption'),
            title: i18n.t('forms.application.sitemap.avto.i-i-s-avto-заявка-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})