function handle() {
    var target = event.target;
    var href = target.href.split("#")[1];
    var section = document.getElementById(href);
    if (target.innerHTML == "[+]") {
        target.innerHTML = "[–]";
        section.hidden = false;
    } else {
        target.innerHTML = "[+]";
        section.hidden = true;
    }
    return false;
}