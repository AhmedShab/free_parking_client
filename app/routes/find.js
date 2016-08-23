import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),

  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model(params){
    return this.get('api').request(`/parkings/?${params}`);
  }
});
