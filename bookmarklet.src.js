// javascript:

var u;
try {
    u = document.querySelector("link[rel=canonical]").href;
} catch (e) {}

if (u) {
    if (prompt("Canonical URL: - Press OK to navigate", u)) {
        window.location = u;
    } else {
        /* Chrome goes silly if I don't do something here */
        u = null;
    }
} else {
    u = window.location.href;
    /* Lack of PCRE lookahead/behind assertions makes me sad :( */
    u = u
        .replace(/([?&])((utm_(source|medium|term|content|campaign))(=?.*?)(&|$))+/g, '$1')
        .replace(/[?&]$/g, '');
    prompt("No canonical URL found. Displaying current URL:", u);
}
