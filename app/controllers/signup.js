import Ember from 'ember';

export default Ember.Controller.extend({

  api: Ember.inject.service(),

  actions: {
    signup(){
      this.get('api').post('/signup', {
        jsonData: {
          emailAddress: this.get('emailAddress'),
          password: this.get('password')
        }
      });

      this.transitionToRoute('/');
    }
  }
});
