import Ember from 'ember';

export default Ember.Controller.extend({
  api: Ember.inject.service(),

  reset(){
    this.setProperties({
      emailAddress: '',
      password: '',
      errorMessage: ''
    });
  },

  clearToken(){
      this.set('token', '');
  },

  actions: {
    login(){
      this.set('errorMessage', '');
      this.get('api').post('/login', {
        jsonData: {
          emailAddress: this.get('emailAddress'),
          password: this.get('password')
        },
      }).then((response) => {
        if (response.success) {
          this.set('token', response.token);
          this.transitionToRoute('index');
        }
        else {
          this.set('errorMessage', 'Username or password is incorrect');
        }
      });
    }
  }
});
