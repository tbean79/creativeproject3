
let app = new Vue({

  // bind it to the #root div in the DOM
  el: "#app",
  // provide data for bindings
  data: {
            number: 1,
        image: '',
        current: {
            id: '',
            name: '',
            description: '',
        },
     results: '',
     button: 'Feeling Down?',
     quotes:
     {
       1: "Someone I loved once gave me a box full of darkness. It took me years to understand that this too, was a gift. -Mary Oliver",
       2: "It is only in sorrow bad weather masters us; in joy we face the storm and defy it.  -Amelia Barr",
       3: "There's not a word yet for old friends who've just met.  -Jim Henson",
       4: "Don't Let Yesterday Take Up Too Much Of Today.  -Will Rogers",
       5: "We Generate Fears While We Sit. We Overcome Them By Action.  -Dr. Henry Link",
       6: "The Man Who Has Confidence In Himself Gains The Confidence Of Others.  -Hasidic Proverb",
       7: "Faith is not so much something we believe; faith is something we live.  -Joseph B. Wirthlin",
       8: "God not only loves the obedient - He enlightens them.  -Henry B. Eyring",
       9: "They always say time changes things, but you actually have to change them yourself. -Andy Warhol",
       10: "Remember there’s no such thing as a small act of kindness. Every act creates a ripple with no logical end. -Scott Adams",
       11: "Kindness is like snow- It beautifies everything it covers. -Kahlil Gibran",
       12: "Having somewhere to go is home. Having someone to love is family. And having both is a blessing.",
       13: "Manners and politeness will never become old-fashioned.  -Auliq Ice",
       14: "Life is not a fairy tale.  If you lose your shoe at midnight, you're drunk",
       15: "You get all the French fries the President can't get to.  -Al Gore",
       16: "Her heart was a secret garden and the walls were very high. -William Goldman",
       17: "No boundary or barrier surrounds the heart of a person that loves their self and others. -Shannon L. Alder",
       18: "If you think you are too small to make a difference, try sleeping with a mosquito.  -Dalai Lama",
       19: "I am an early bird and a night owl… so I am wise and I have worms  -Michael Scott",
       20: "I love making new friends and I respect people for a lot of different reasons. -Taylor Swift"
     }
  },
  created() 
  {
    this.images(); 
  },
  methods:
  {
    motivateUser()
    {
      var rando = Math.random() * 20;
      rando = Math.ceil(rando);
      this.results = this.quotes[rando];
      console.log("Hello?")
    },
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
        var rando = Math.random() * 20;
      rando = Math.ceil(rando);
      this.results = this.quotes[rando];
      console.log("Hello?")
          this.number--;
        if (this.number < 1)
            this.number = 1;
        
    },
    nextImage() {
      var rando = Math.random() * 20;
      rando = Math.ceil(rando);
      this.results = this.quotes[rando];
      console.log("Hello?")
        this.number++;
    },
    
    randomComic() {
      var rando = Math.random() * 20;
      rando = Math.ceil(rando);
      this.results = this.quotes[rando];
      console.log("Hello?")
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