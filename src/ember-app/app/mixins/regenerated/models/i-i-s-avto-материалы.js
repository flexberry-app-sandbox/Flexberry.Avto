import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  содержание: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-avto-материалы.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  содержание: {
    descriptionKey: 'models.i-i-s-avto-материалы.validations.содержание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МатериалыE', 'i-i-s-avto-материалы', {
    iD: attr('ID', { index: 0 }),
    содержание: attr('Содержание', { index: 1 })
  });

  modelClass.defineProjection('МатериалыL', 'i-i-s-avto-материалы', {
    iD: attr('ID', { index: 0 }),
    содержание: attr('Содержание', { index: 1 })
  });
};
