import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПреподавательMixin
} from '../mixins/regenerated/models/i-i-s-avto-преподаватель';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПреподавательMixin, Validations, {
});

defineProjections(Model);

export default Model;
