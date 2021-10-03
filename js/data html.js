function start(){
var xhr = new XMLHttpRequest();

xhr.onload = function(){
    // The following condition checks will not 
    // work locally only on a server.

    if(xhr.status === 200){
        document.getElementById('content').innerHTML = 
    xhr.responseText;

}
};

xhr.open('GET', data/data.html, true);
xhr.send(null);
}

window.addEventListener(load,start(), false);