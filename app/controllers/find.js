import Ember from 'ember';

export default Ember.Controller.extend({
  zoom: 17,
  centerLat: 14.7646531,
  centerLng: 102.8115874,

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
