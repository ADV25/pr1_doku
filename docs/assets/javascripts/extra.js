function externalLinks() {
    let c = document.getElementsByTagName("a"), a = 0;
    for (; a < c.length; a++) {
        var b = c[a];
        b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
    }
}

externalLinks();
