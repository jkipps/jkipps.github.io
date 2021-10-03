function start(){
    var buttonEvent = document.getElementById("eventButtonValidation");
    buttonEvent.textContent = "ready button 2";

    var buttton = document.getElementById("button");
    buttton.onclick = loader;
}

function loader(){
    var xhr = new XMLHttpRequest();

xhr.onload = function(){

  
    if(xhr.status === 200){
        
         alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
        
        //This part process the XML
        var response = xhr.responseXML;
        var events = response.getElementsByTagName('event');

        for (var i = 0; i < events.length; i++){
            var container, image, location, city, newline;
            container = document.createElement('div');
            container.className = 'event';

            image = document.createElement('img');
            image.setAttribute('src', getNodeValue(events[i], 'map'));
             image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')))
            container.appendChild(image);

            location = document.createElement('p');
            city = document.createElement('b');
            newline = document.createElement('br');
            city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
            location.appendChild(newline);
            location.insertBefore(city, newline);
            location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
            container.appendChild(location);

            document.getElementById('content').appendChild(container);
        }

        function getNodeValue (obj, tag){
            return obj.getElementsByTagName(tag)[0].firstchild.nodeValue;
        }

    }else{
          var buttonEvent = document.getElementById("eventfailValidation");
    buttonEvent.textContent = "response failed";
    }
};
   xhr.onerror = function() { // only triggers if the request couldn't be made at all
  alert(`Network Error`);
};


xhr.open('GET', '/data/data.xml');
xhr.send();
}

window.addEventListener("load", start, false);
