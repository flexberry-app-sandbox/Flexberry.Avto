import {
  defineNamespace,
  defineProjections,
  Model as БДМатериаловMixin
} from '../mixins/regenerated/models/i-i-s-avto-б-д-материалов';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БДМатериаловMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
