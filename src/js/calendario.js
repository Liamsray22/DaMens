var events = [
  {'Date': new Date(2020, 0, 28), 'Title': 'Esto funciona!'},
  {'Date': new Date(2016, 6, 18), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
  {'Date': new Date(2016, 6, 27), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
]; //Eventos de ejemplo


$.getJSON("test.json", function(json) {
  console.log(json); // this will show the info it in firebug console
  array.forEach(json => {
    events.push({'Date': new Date(json.fecha), 'Title': 'Hice mis ejercicios!'})
  });
});

var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
