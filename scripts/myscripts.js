var a = document.getElementsByTagName('a'),
    ajax;
for (var i=0; i<a.length; ++i) {
   a[i].addEventListener('click', handleAnchor, false);
}
function handleAnchor(e){
    e.preventDefault();
    if(ajax) ajax.abort();
    ajax = new XMLHttpRequest();
    ajax.onload = updateContent;
    ajax.open("get", this.href, true);
    ajax.send();
}
function updateContent() {
    // Do something with `this.responseText`
}