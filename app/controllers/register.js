import Ember from 'ember';

export default Ember.Controller.extend({

  api: Ember.inject.service(),


  actions: {
    saveParking() {
      const emailAddress = this.get('emailAddress');
      const date = this.get('date');
      const from = this.get('from');
      const to = this.get('to');
      const no_days = this.get('no_days');
      const homeAddress= this.get('homeAddress');

      this.get('api').post('/parkings', {
        jsonData: {
          emailAddress: emailAddress,
          date: date,
          from: from,
          to: to,
          no_days: parseInt(no_days),
          homeAddress: homeAddress
        }
      });
    }
  }
});
