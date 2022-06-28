'use strict'

class CreatePlace {
  get rules () {
    return {
      title:'required',
      link:'required'
    }
  }
  get messages(){
    return{
      'required':'Looks like, {{field}} is empty! Please input a value.'
    }
  }
  async fails(error){
    this.ctx.session.withErrors(error).flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = CreatePlace
