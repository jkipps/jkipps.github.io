function start(){

    var buttton = document.getElementById("buttom");
    buttton.addEventListener(click,loader(),false);
}

function loader(){
    var xhr = new XMLHttpRequest();

xhr.onload = function(){

    if(xhr.status === 200){
        //This part process the XML
        var response = xhr.responseXML;
        var events = response.getElementsByTagName('event');

        for (var i = 0; i < events.length; i++){
            var container, image, location, city, newline;
            container = document.createElement('div');
            container.className = 'event';

            image = document.createElement('img');
            image.setAttribute('src', getNodeValue(events[i], 'map'));
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

    }
};

xhr.open('GET', 'pages.github.io/data/data.xml', true);
xhr.send(null);
}

window.onload = start();