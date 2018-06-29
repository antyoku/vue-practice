var app = new Vue({
  el: '#app',
  data: {
    message: 'Fruits Expo!'
  }
})

var list = new Vue({
  el: '#list',
  data: {
    fruits: ['apple', 'banana', 'strawberry']
  }
})

var count = 0

var click = new Vue({
  el: '#click',
  methods: {
    handleClick: function(event) {
      list.fruits.push('unko')
      count++
      if (count > 3) {
        attention.show = true
      }
    }
  }
})

var attention = new Vue({
  el: '#attention',
  data: {
    show: false
  }
})
