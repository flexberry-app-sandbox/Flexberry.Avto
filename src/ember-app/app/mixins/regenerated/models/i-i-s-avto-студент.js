import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-avto-студент.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-avto-студент.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтудентE', 'i-i-s-avto-студент', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 })
  });

  modelClass.defineProjection('СтудентL', 'i-i-s-avto-студент', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 })
  });
};
