import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  материалы: DS.belongsTo('i-i-s-avto-материалы', { inverse: null, async: false }),
  курс: DS.belongsTo('i-i-s-avto-курс', { inverse: 'бДМатериалов', async: false })
});

export let ValidationRules = {
  материалы: {
    descriptionKey: 'models.i-i-s-avto-б-д-материалов.validations.материалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  курс: {
    descriptionKey: 'models.i-i-s-avto-б-д-материалов.validations.курс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БДМатериаловE', 'i-i-s-avto-б-д-материалов', {
    материалы: belongsTo('i-i-s-avto-материалы', 'Материалы', {
      содержание: attr('Содержание', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'содержание' })
  });
};
