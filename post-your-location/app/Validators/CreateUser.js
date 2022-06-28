'use strict'

class CreateUser {
  get rules () {
    return {
      'username':'required|unique:users',
      'email':'required|unique:users',
      'password':'required'
    }
  }

  get messages(){
    return{
      'required': 'Left {{field}} empty?! Please check!',
      'unique': '{{field}} value already exist! Please choose a different one.',
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error).flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateUser
