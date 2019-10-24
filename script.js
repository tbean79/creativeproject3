let app = new Vue({
    el:'#app',
    data: {
        number: 1,
        image: '',
        current: {
            id: '',
            name: '',
            description: '',
        },
    },
    created() {
         this.images(); 
    },

    methods: {
      images() {
          axios.get('https://picsum.photos/id/' + this.number + '/info')
            .then(response => {
                this.current = response.data;
                this.current.width = 500;
                this.current.height = 500;
                this.current.download_url = 'https://picsum.photos/id/' + this.number + '/1000';
                console.log(this.number);
                console.log(this.current);
                return true;
            })
            .catch(error => {
                console.log(error);
            });
      },
      previousImage() {
          this.number--;
        if (this.number < 1)
            this.number = 1;
        
    },
    nextImage() {
        this.number++;
    },
    
    randomComic() {
      var rando = Math.random() * 1000;
      rando = Math.ceil(rando);
      this.number = rando;
    },
},
    watch: {
    number(value, oldvalue) {
      if (oldvalue === '') {
        this.number = 1;
      } else {
        this.images();
      }
    }
    }
    
});