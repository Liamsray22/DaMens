var events = [
  {'Date': new Date(2020, 0, 28), 'Title': 'Esto funciona!'},
  {'Date': new Date(2016, 6, 18), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
  {'Date': new Date(2016, 6, 27), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
]; //Eventos de ejemplo


var jsondata = $.getJSON("/test.json", function(json) {
  console.log(json); // this will show the info it in firebug console
  array.forEach(json => {
    console.log(Date.parse(json.fecha))
    events.push({'Date': new Date(Date.parse(json.fecha)), 'Title': 'Hice mis ejercicios!'})
  });
});

// function read_json() {
//   $.getJSON("/test.json", function(data) {
//       $.each(data["events"], function(idx,events) {
//           alert("Prime number: " + Data.parse(events.fecha));
//       });
//   });
// }

var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);