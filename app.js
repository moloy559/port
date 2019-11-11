var introStrings = [
  "first", "second", "third"
]

Vue.component('button-intro', {
  data: function () {
    return {
      count: 0,
      intro_btn_num: 0,
      intro_content: introStrings[0],
    }
  },
  template: ' <div class="button-intro"> \
  <button class="txt-btn" v-on:click="introBtn">Click Me</button> \
  <transition name="some-fade" mode="out-in" > \
  <p  v-if="count==0" key="key1">This is a line of text. </p>\
  <p  v-if="count==1" key="key2">Using CSS, Javascript and Vue.js </p>\
  <p  v-if="count==2" key="key3">Simple animations that engage the end user are now possible</p>\
  <p  v-if="count==3" key="key4">Making websites slick, professional and engaging.</p>\
  </transition> \
  </div> \
  ',
  methods:{
    introBtn(){
      if(this.count == 3) this.count = 0; else this.count++;
      /*
      if(this.intro_btn_num == introStrings.length - 1){
        this.intro_btn_num = 0;
      }else{
        this.intro_btn_num++;
      }
      this.intro_content = introStrings[this.intro_btn_num]; */
    }
  }
})

new Vue({
  el: '#wrapper',
  data: {
    view: 'v-a',
    
    page_num: 1,
    max_page_num: 1
  },
  components: {
    'v-a': {
      template: '<div> \
      <div class="frame"> \
          <h2>Michael Sissons Portfolio</h2> \
          <div class="txt-box"> \
              <p>I am an application developer and designer that specializes in code. \
                  This website was made to display my abilities to provide technical \
                  solutions that enhance the design aspects within web and software applications. </p> \
              <p> As a designer that specialises in code, my portfolio itself gets to be a part of my \
                  portfolio.</p> \
                  <p> Try clicking this button a few times.</p> \
                  <button-intro></button-intro>\
          </div> \
      </div> \
  </div>'
    },
    'v-b': {
      template: '<div><h2 class="title">Using CSS, Javascript and Vue.js</h2> \
      <div class="demoHolder">\
      <div class="videoWrapper">\
      <iframe  width="1903" height="768" src="https://www.youtube.com/embed/MqbYFTkyW9Y" \
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; \
      picture-in-picture" allowfullscreen></iframe> \
      </div>\
      </div>\
      </div>'
    },
    'v-c': {
      template: '<div><h2>Simple animations that engage the end user are now possible</h2></div>'
    },
    'v-d': {
      template: '<div><h2>Making websites slick, professional and engaging.</h2></div>'
    }
  },
  methods:{
    turnA(){
      if(this.view != 'v-a') this.view = 'v-a';
      this.max_page_num = 1;
      this.page_num = 1;
    },
    turnB(){
      if(this.view != 'v-b') this.view = 'v-b';
      this.max_page_num = 2;
      this.page_num = 1;
    },
    turnC(){
      if(this.view != 'v-c') this.view = 'v-c';
      this.max_page_num = 3;
      this.page_num = 1;
    },
    turnD(){
      if(this.view != 'v-d') this.view = 'v-d';
      this.max_page_num = 4;
      this.page_num = 1;
    },
    prevPage(){
      if(this.page_num != 1) this.page_num--;
    },
    nextPage(){
      if(this.page_num != this.max_page_num) this.page_num++;
    },
    introBtn(){
      if(this.intro_btn_num == introStrings.length - 1){
        this.intro_btn_num = 0;
      }else{
        this.intro_btn_num++;
      }
      this.intro_content = introStrings[this.intro_btn_num];
    }
  }
})
