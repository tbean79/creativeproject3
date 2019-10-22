/*global Vue*/

let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
     query: "",
     results: ""
  }
});