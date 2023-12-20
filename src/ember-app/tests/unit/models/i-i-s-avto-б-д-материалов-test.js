import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avto-б-д-материалов', 'Unit | Model | i-i-s-avto-б-д-материалов', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
