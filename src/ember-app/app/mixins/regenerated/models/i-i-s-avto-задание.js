import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  описание: DS.attr('string'),
  срокСдачи: DS.attr('date'),
  заявка: DS.belongsTo('i-i-s-avto-заявка', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-avto-задание.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-avto-задание.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  срокСдачи: {
    descriptionKey: 'models.i-i-s-avto-задание.validations.срокСдачи.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  заявка: {
    descriptionKey: 'models.i-i-s-avto-задание.validations.заявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаданиеE', 'i-i-s-avto-задание', {
    iD: attr('ID', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    срокСдачи: attr('Срок сдачи', { index: 2 }),
    заявка: belongsTo('i-i-s-avto-заявка', 'Заявка', {
      содержание: attr('Содержание', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'содержание' })
  });

  modelClass.defineProjection('ЗаданиеL', 'i-i-s-avto-задание', {
    iD: attr('ID', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    срокСдачи: attr('Срок сдачи', { index: 2 }),
    заявка: belongsTo('i-i-s-avto-заявка', 'Содержание', {
      содержание: attr('Содержание', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
