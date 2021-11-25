// creating a new request object
var request = new XMLHttpRequest();
// Opening my request connection
request.open('GET','https://jsonplaceholder.typicode.com/users');
// sending the request 
request.send();
// receiving response
request.onload = function() {
    // Parsing the Json data to get it in array format
    var data =JSON.parse(this.response);
    for(i=0;i<data.length;i++) {
        console.log(data[i].id);
    }
    
}
