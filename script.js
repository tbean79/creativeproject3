/*global Vue*/

let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
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
       8: "God not only loves the obedient - He enlightens them.  -Henry B. Eyring"
     }
  },
  methods:
  {
    motivateUser()
    {
      var rando = Math.random() * 8;
      rando = Math.ceil(rando);
      this.results = this.quotes[rando];
      this.button = 'Not Doing it for Ya?'
    }
  }
});