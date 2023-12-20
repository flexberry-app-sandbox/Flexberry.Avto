import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  название: DS.attr('string'),
  задание: DS.belongsTo('i-i-s-avto-задание', { inverse: null, async: false }),
  преподаватель: DS.belongsTo('i-i-s-avto-преподаватель', { inverse: null, async: false }),
  бДМатериалов: DS.hasMany('i-i-s-avto-б-д-материалов', { inverse: 'курс', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-avto-курс.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-avto-курс.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  задание: {
    descriptionKey: 'models.i-i-s-avto-курс.validations.задание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  преподаватель: {
    descriptionKey: 'models.i-i-s-avto-курс.validations.преподаватель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  бДМатериалов: {
    descriptionKey: 'models.i-i-s-avto-курс.validations.бДМатериалов.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КурсE', 'i-i-s-avto-курс', {
    iD: attr('ID', { index: 0 }),
    название: attr('Название', { index: 1 }),
    преподаватель: belongsTo('i-i-s-avto-преподаватель', 'Преподаватель', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' }),
    задание: belongsTo('i-i-s-avto-задание', 'Задание', {
      описание: attr('Описание', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'описание' }),
    бДМатериалов: hasMany('i-i-s-avto-б-д-материалов', 'материалы', {
      материалы: belongsTo('i-i-s-avto-материалы', 'Материалы', {
        содержание: attr('Содержание', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'содержание' })
    })
  });

  modelClass.defineProjection('КурсL', 'i-i-s-avto-курс', {
    iD: attr('ID', { index: 0 }),
    название: attr('Название', { index: 1 }),
    преподаватель: belongsTo('i-i-s-avto-преподаватель', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true }),
    задание: belongsTo('i-i-s-avto-задание', 'Описание', {
      описание: attr('Описание', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
