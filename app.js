
new Vue({
  el: '#app',
  data: {
    Artis: []
  },
  methods: {
  	addArt() {
  		fetch('http://localhost:8000/articles')
		.then(r => r.json())
		.then(json => {
  		this.Artis = json
	})
  	}
  }
})
