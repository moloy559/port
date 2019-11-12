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
  <p  v-if="count==2" key="key3">Simple animations that transform page elements are now possible</p>\
  <p  v-if="count==3" key="key4">Making websites slick, professional and engaging.</p>\
  </transition> \
  </div> \
  ',
  methods: {
    introBtn() {
      if (this.count == 3) this.count = 0; else this.count++;
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
    max_page_num: 4
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
                  <p> Try clicking this button a few times.</p> \
                  <button-intro></button-intro>\
                  <p>Using the arrow buttons below will navigate to the next page of my portfolio. Use the navigation bar to jump to a specific page instead</p>\
          </div> \
      </div> \
  </div>'
    },
    'v-b': {
      template: '<div><h2 class="title">Demo Reel</h2> \
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
      template: '<div class="frame"> \
      <h2 class="title">Skills</h2> \
      <div class="grid-container"> \
          <ul class="item-1"> \
              <li>HTML</li> \
              <li>CSS</li> \
              <li>Javascript</li> \
              <li>Vue.JS</li> \
              <li>Adobe Creative Suite</li> \
              <li>Unity3D</li> \
              <li>Create.JS</li> \
              <li>C#</li> \
              <li>XML</li> \
          </ul> \
          <ul class="item-2"> \
              <li>WordPress</li> \
              <li>Bootstrap</li> \
              <li>Java</li> \
              <li>PHP</li> \
              <li>Git</li> \
              <li>Gamemaker Studio 2</li> \
              <li>Server Hosting</li> \
              <li>SQL</li> \
              <li>More...</li> \
          </ul> \
      </div> \
  </div>'
    },
    'v-d': {
      template: '<div class="frame"> \
      <h2>Contact</h2> \
      <h3>msissons@confederationcollege.ca</h3> \
      <h3>(807)632-5509</h3> \
     </div>'
    }
  },
  methods: {
    turnA() {
      if (this.view != 'v-a') this.view = 'v-a';
      this.page_num = 1;
    },
    turnB() {
      if (this.view != 'v-b') this.view = 'v-b';
      this.page_num = 2;
    },
    turnC() {
      if (this.view != 'v-c') this.view = 'v-c';
      this.page_num = 3;
    },
    turnD() {
      if (this.view != 'v-d') this.view = 'v-d';
      this.page_num = 4;
    },
    prevPage() {
      if (this.page_num != 1) {
        this.page_num--;

        switch (this.page_num) {
          case 1:
            if (this.view != 'v-a') this.view = 'v-a';
            break;
          case 2:
            if (this.view != 'v-b') this.view = 'v-b';
            break;
          case 3:
            if (this.view != 'v-c') this.view = 'v-c';
            break;
          case 4:
            if (this.view != 'v-d') this.view = 'v-d';
            break;
        }
      }
    },
    nextPage() {
      if (this.page_num != this.max_page_num) {
        this.page_num++;
        switch (this.page_num) {
          case 1:
            if (this.view != 'v-a') this.view = 'v-a';
            break;
          case 2:
            if (this.view != 'v-b') this.view = 'v-b';
            break;
          case 3:
            if (this.view != 'v-c') this.view = 'v-c';
            break;
          case 4:
            if (this.view != 'v-d') this.view = 'v-d';
            break;
        }
      }
    },
  }
})
