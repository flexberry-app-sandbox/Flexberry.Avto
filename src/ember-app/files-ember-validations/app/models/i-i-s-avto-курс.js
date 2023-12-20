import {
  defineNamespace,
  defineProjections,
  Model as КурсMixin
} from '../mixins/regenerated/models/i-i-s-avto-курс';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КурсMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
