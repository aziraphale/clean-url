# Clean URL Bookmarklet
Bookmarklet to grab a cleaned-up URL of the current page (canonical; stripped of tracking params; etc.).

This is especially useful for Amazon, as Amazon product URLs contain lots of parameters indicating how you got there and such, **and** Amazon doesn't automatically redirect desktop browsers away from its mobile site, so if you send yourself a link (or use Chrome's tab-syncing) from a mobile device to a desktop device, you're left staring at a mobile site blown up to desktop size! This bookmarklet grabs the "canonical" URL that's stored in a `<meta>` tag in the page source and which provides the "base" URL for that page, without any superfluous parameters of any kind - and always pointing to the desktop site!

Once the bookmarklet finds the clean URL, it displays it using a JavaScript `prompt()` dialog so that it can be easily copied to the clipboard, and if you then click "OK" on tha dialog (or hit your enter key), you'll be taken to that cleaned-up URL; the "cancel" button skips this.

Originally [posted as a gist](https://gist.github.com/aziraphale/7d71b139ed77a30a75ec), now moved to a full repository for easier access, commenting, forking, etc.

Later additions inspired by a Twitter thread:
- https://twitter.com/irondavy/status/594212305606291456
- https://twitter.com/josephschmitt/status/594374411815358465
- https://github.com/josephschmitt/un-utm
- https://twitter.com/lorddeath/status/594794115004571648

MIT Licence: it's just a tiny bit of JS code! Go nuts with it, enjoy, and do your part in keeping the Internet free of needlessly-bloated URLs!
