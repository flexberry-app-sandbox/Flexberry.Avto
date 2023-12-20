import { Serializer as БДМатериаловSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avto-б-д-материалов';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БДМатериаловSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
