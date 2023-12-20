import {
  defineNamespace,
  defineProjections,
  Model as ПреподавательMixin
} from '../mixins/regenerated/models/i-i-s-avto-преподаватель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПреподавательMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
