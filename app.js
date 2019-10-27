new Vue({
  el: '#wrapper',
  data: {
    view: 'v-a',
    
  },
  components: {
    'v-a': {
      template: "<div> <h2>This is a Home Page.</h2> </div>"
    },
    'v-b': {
      template: '<div><h2>Using CSS, Javascript and Vue.js.</h2></div>'
    },
    'v-c': {
      template: '<div><h2>Simple animations that engage the <br/> enduser are now possible.</h2></div>'
    },
    'v-d': {
      template: '<div><h2>Making websites slick, professional <br/>  and engaging.</h2></div>'
    }
  },
  methods:{
    turnA(){
      if(this.view != 'v-a') this.view = 'v-a';
    },
    turnB(){
      if(this.view != 'v-b') this.view = 'v-b';
    },
    turnC(){
      if(this.view != 'v-c') this.view = 'v-c';
    },
    turnD(){
      if(this.view != 'v-d') this.view = 'v-d';
    }
  }
})