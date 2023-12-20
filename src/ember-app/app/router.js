import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-avto-задание-l');
  this.route('i-i-s-avto-задание-e',
  { path: 'i-i-s-avto-задание-e/:id' });
  this.route('i-i-s-avto-задание-e.new',
  { path: 'i-i-s-avto-задание-e/new' });
  this.route('i-i-s-avto-заявка-l');
  this.route('i-i-s-avto-заявка-e',
  { path: 'i-i-s-avto-заявка-e/:id' });
  this.route('i-i-s-avto-заявка-e.new',
  { path: 'i-i-s-avto-заявка-e/new' });
  this.route('i-i-s-avto-курс-l');
  this.route('i-i-s-avto-курс-e',
  { path: 'i-i-s-avto-курс-e/:id' });
  this.route('i-i-s-avto-курс-e.new',
  { path: 'i-i-s-avto-курс-e/new' });
  this.route('i-i-s-avto-материалы-l');
  this.route('i-i-s-avto-материалы-e',
  { path: 'i-i-s-avto-материалы-e/:id' });
  this.route('i-i-s-avto-материалы-e.new',
  { path: 'i-i-s-avto-материалы-e/new' });
  this.route('i-i-s-avto-преподаватель-l');
  this.route('i-i-s-avto-преподаватель-e',
  { path: 'i-i-s-avto-преподаватель-e/:id' });
  this.route('i-i-s-avto-преподаватель-e.new',
  { path: 'i-i-s-avto-преподаватель-e/new' });
  this.route('i-i-s-avto-студент-l');
  this.route('i-i-s-avto-студент-e',
  { path: 'i-i-s-avto-студент-e/:id' });
  this.route('i-i-s-avto-студент-e.new',
  { path: 'i-i-s-avto-студент-e/new' });
});

export default Router;
