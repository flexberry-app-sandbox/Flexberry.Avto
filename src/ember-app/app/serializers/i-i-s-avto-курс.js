import { Serializer as КурсSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avto-курс';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КурсSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
