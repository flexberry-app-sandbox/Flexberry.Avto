import {
  defineNamespace,
  defineProjections,
  Model as СтудентMixin
} from '../mixins/regenerated/models/i-i-s-avto-студент';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтудентMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
