import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: '',

  ajax: Ember.inject.service(),

  actions: {
    saveParking() {
      return this.get('ajax').request('/', {
        method: 'POST',
        data: {
          emailAddress: this.get('emailAddress'),
          date : this.get('date'),
          from : this.get('from'),
          to : this.get('to'),
          no_days : this.get('no_days'),
          homeAddress: this.get('homeAddress'),
        }
      });
    }
  }
});
