import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avto-курс', 'Unit | Serializer | i-i-s-avto-курс', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-avto-курс',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-avto-б-д-материалов',
    'model:i-i-s-avto-задание',
    'model:i-i-s-avto-заявка',
    'model:i-i-s-avto-курс',
    'model:i-i-s-avto-материалы',
    'model:i-i-s-avto-преподаватель',
    'model:i-i-s-avto-студент',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
