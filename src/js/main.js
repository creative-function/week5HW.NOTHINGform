console.log('hello, chello week 5 web dev');

setTimeout(function(){
    let sub = document.getElementById("subscribe");
    sub.classList.add("show");

    let subName = document.getElementById("sub-name");
    subName.focus();
}, 3000)