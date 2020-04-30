var events = [
  {'Date': new Date(2020, 0, 28), 'Title': 'Esto funciona!'},
  {'Date': new Date(2016, 6, 18), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
  {'Date': new Date(2016, 6, 27), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
]; //Eventos de ejemplo

data = JSON.parse(localStorage.getItem("test.json"))
console.log("toy jalto")
console.log(datos["events"])

// $.getJSON("./test.json", function(json) {
//   console.log(json); // this will show the info it in firebug console
//   array.forEach(data => {
//     alert(JSON.parse(data["events"]));
//     events.push({'Date': new Date(JSON.parse(data["events"])), 'Title': 'Hice mis ejercicios!'})
//   });
// });

// $.getJSON("./test.json", function(data) {
//     $.each(data["events"], function(idx,events) {
//       var date = JSON.parse(events);
//       console.log("Prime number: " + date);
//       events.push({'Date': new Date(date), 'Title': 'Hice mis ejercicios!'});
//     });
// });



var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);