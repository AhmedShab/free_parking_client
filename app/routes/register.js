import Ember from 'ember';

export default Ember.Route.extend({

  api: Ember.inject.service(),


  model(){
    return this.get('api').request(`/register`);
  },

  actions: {
    error(error, transition) {
      if (error.errors[0].status === "401") {
        alert("Please login first");
        return this.transitionTo('index');
      }
    }
  }
});
