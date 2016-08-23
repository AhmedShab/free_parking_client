import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['search'],
  search: "",

  actions: {
    done(){
      console.log('done');
    },
    placeChanged(result){
      console.log('placeChanged');
      console.log(result);
    }
  }
});
