'use strict'

class LoginUser {
  get rules () {
    return {
      'email':'required|email',
      'password':'required'
    }
  }
  get messages() {
    return{
      'required':'{{field}} is required! Please check, left empty.'
    }
  }
  async fails(error){
    this.ctx.session.withErrors(error).flashAll();
    return this.ctx.response.redirect('back');
  }
}

module.exports = LoginUser
