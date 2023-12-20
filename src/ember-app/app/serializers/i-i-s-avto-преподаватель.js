import { Serializer as ПреподавательSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avto-преподаватель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПреподавательSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
