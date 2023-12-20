import {
  defineNamespace,
  defineProjections,
  Model as ЗаданиеMixin
} from '../mixins/regenerated/models/i-i-s-avto-задание';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаданиеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
