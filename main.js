var app = new Vue({
  el: '#app',
  data: {
    message: 'hinako',
    scroll: 0,
    count: 0,
    hogeS: true,
    hogeS2: false
  },
  methods: {
    increment() {
      this.count += 1
      this.hogeS2 = true
    }
  },
  mounted: function() {
    this.scroll = 100
  }
})
