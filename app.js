new Vue({
  el: '#wrapper',
  data: {
    view: 'v-a',
    page_num: 1,
    max_page_num: 1
  },
  components: {
    'v-a': {
      template: "<div> <h2>This is a Home Page</h2> </div>"
    },
    'v-b': {
      template: '<div><h2>Using CSS, Javascript and Vue.js</h2> \
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
  }
})