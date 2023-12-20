import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БДМатериаловMixin
} from '../mixins/regenerated/models/i-i-s-avto-б-д-материалов';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БДМатериаловMixin, Validations, {
});

defineProjections(Model);

export default Model;
