// javascript:

var u, loc=window.location, canon=false;
try {
    u = document.querySelector("link[rel=canonical]").href;
    canon = true;
} catch (e) {
    u = loc.href;
}

/* Some sites (Patreon) actually include tracking spam in the canonical URL! So we have to strip out these args whether the URL came from the `link[rel=canonical]` tag or from `window.location`... */
/* Lack of PCRE lookahead/behind assertions makes me sad :( */
u = u
    .replace(/([?&])((utm_(source|medium|term|content|campaign))(=.*?)?(&|$))+/g, '$1')
    .replace(/[?&]$/g, '');

if (prompt(
    (
        canon ?
        "Canonical URL:" :
        "No rel=canonical tag found. Displaying (cleaned) current URL:"
    ) + " - Press OK to navigate"
    , u)) {
    loc.replace(u);
} else {
    /* Chrome goes silly if I don't do something here */
    u = null;
}
