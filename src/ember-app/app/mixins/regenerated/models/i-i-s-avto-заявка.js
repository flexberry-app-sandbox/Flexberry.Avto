import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  датаСдачи: DS.attr('date'),
  содержание: DS.attr('string'),
  студент: DS.belongsTo('i-i-s-avto-студент', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-avto-заявка.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаСдачи: {
    descriptionKey: 'models.i-i-s-avto-заявка.validations.датаСдачи.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  содержание: {
    descriptionKey: 'models.i-i-s-avto-заявка.validations.содержание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  студент: {
    descriptionKey: 'models.i-i-s-avto-заявка.validations.студент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаявкаE', 'i-i-s-avto-заявка', {
    iD: attr('ID', { index: 0 }),
    содержание: attr('Содержание', { index: 1 }),
    датаСдачи: attr('Дата сдачи', { index: 2 }),
    студент: belongsTo('i-i-s-avto-студент', 'Студент', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ЗаявкаL', 'i-i-s-avto-заявка', {
    iD: attr('ID', { index: 0 }),
    содержание: attr('Содержание', { index: 1 }),
    датаСдачи: attr('Дата сдачи', { index: 2 }),
    студент: belongsTo('i-i-s-avto-студент', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
