Clean URL Bookmarklet
=====================

Bookmarklet to grab a cleaned-up URL of the current page (canonical; stripped of tracking params; etc.).

This is especially useful for Amazon, as Amazon product URLs contain lots of parameters indicating how you got there and such, **and** Amazon doesn't automatically redirect desktop browsers away from its mobile site, so if you send yourself a link (or use Chrome's tab-syncing) from a mobile device to a desktop device, you're left staring at a mobile site blown up to desktop size! This bookmarklet grabs the "canonical" URL that's stored in a `<meta>` tag in the page source and which provides the "base" URL for that page, without any superfluous parameters of any kind - and always pointing to the desktop site!

Once the bookmarklet finds the clean URL, it displays it using a JavaScript `prompt()` dialog so that it can be easily copied to the clipboard, and if you then click "OK" on tha dialog (or hit your enter key), you'll be taken to that cleaned-up URL; the "cancel" button skips this. If a canonical URL can't be found and the URL can't be cleaned, the prompt will simply display the current URL, again, ready to be copied - so this bookmarklet can be part of your standard link-sharing flow for all sites!

Note that this bookmarklet is in no way limited to use *only* on Amazon sites! It makes use of standard Web functionality, so any website implementing the necessary code will work with it! If you want to copy a URL to a friend/Twitter/email/wherever and you notice that it seems needlessly verbose and bloated, give this bookmarklet a go and see if it helps! I've never come across a site that it *breaks*, so no harm should come from using it (and if there is a site that doesn't play nice, let me know and I'll see if it can be worked around).

Installation
------------

Simply click on the [`bookmarklet.js`](https://github.com/aziraphale/clean-url/blob/master/bookmarklet.js) file in this repository (the ["raw" version](https://raw.githubusercontent.com/aziraphale/clean-url/master/bookmarklet.js) might be easier to use!), copy the entirety of its contents into your clipboard, then create a new bookmark in your browser, name it what you want and paste in the copied JS code into the bookmark's "URL" field.

Bookmarklets work best if they're in your bookmarks bar, but that's purely a convenience thing - feel free to save it anywhere!

Note that I only personally test this on **Google Chrome**, but it doesn't do anything too fancy so recent versions of any browsers should work ([including IE8+](http://caniuse.com/#feat=queryselector)). If it doesn't work anywhere, open an issue here and hopefully someone (me or otherwise) can find a fix for it!

Updates
-------

Since bookmarklets don't/can't really auto-update themselves, I suggest you watch this GitHub project so that you get a notification when anything gets updated!

I *could* make this into a fully-fledged browser extension, but that's a crap-ton more maintenance and really ought to be unnecessary for a simple little script like this...

History
-------

Originally [posted as a gist](https://gist.github.com/aziraphale/7d71b139ed77a30a75ec), now moved to a full repository for easier access, commenting, forking, etc.

Later additions inspired by a Twitter thread:
- https://twitter.com/irondavy/status/594212305606291456
- https://twitter.com/josephschmitt/status/594374411815358465
- https://github.com/josephschmitt/un-utm
- https://twitter.com/lorddeath/status/594794115004571648

Licence
-------

MIT Licence: it's just a tiny bit of JS code! Go nuts with it, enjoy, and do your part in keeping the Internet free of needlessly-bloated URLs!
