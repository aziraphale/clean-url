var u, loc=window.location, canon=false;

// Fetch this page's <link rel="canonical" href="..."> element if it has one,
//  falling back to the page's `window.location.href` property.
// TODO theguardian.com doesn't have a `link[rel=canonical]`` tag, but it looks
//      like their Facebook/OpenGraph `<meta property="og:url"
//      content="http://www.theguardian.com/..."/>` tag may be a good
//      alternative. That's something that other sites may also use, with or
//      without tracking spam...
try {
    u = document.querySelector("link[rel=canonical]").href;
    canon = true;
} catch (e) {
    u = loc.href;
}

// Strip from the URL (canonical or current) some annoying tracking (etc.)
//  arguments that shouldn't really be included when trying to bookmark a URL
//  or share it with someone. Not only can it look really messy to share very
//  long URLs in certain chat applications, but it will also arguably pollute
//  the site's analytics!
// (I seem to recall the Google Analytics documentation saying that sites
//  should remove those arguments from the URL once the page has loaded, but I
//  might be making that up!)
// Some sites (e.g. Patreon) actually include tracking spam in the canonical
//  URL!
// So we have to strip out these args whether the URL came from the
//  `link[rel=canonical]` tag or from `window.location`...
// `CMP` is used by theguardian.com in links from emails. Don't know if it's
//  from a third-party service or a Guardian-specific argument.
// Lack of PCRE lookahead/behind assertions makes me sad :(
u = u.replace(/([?&])((utm_(source|medium|term|content|campaign)|CMP)(=.*?)?(&|$))+/g, '$1');

// Site-specific replacements.
if (loc.hostname.match(/(^|\.)patreon\.com$/i)) {
    u = u.replace(/([?&])((token)(=.*?)?(&|$))+/g, '$1');
}

// Remove any trailing `?` or `&` characters that the above replacements may
//  have left behind.
u = u.replace(/[?&]$/g, '');

// Display the found and cleaned URL, navigating to it if requested.
if (prompt(
    (
        canon ?
        "Canonical URL:" :
        "No rel=canonical tag found. Displaying (cleaned) current URL:"
    ) + " - Press OK to navigate"
    , u)) {
    loc.replace(u);
} else {
    // Chrome goes silly if I don't do something here.
    u = null;
}
