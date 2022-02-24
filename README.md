# Bookmarklet
You can get the bookmarklet by dragging this to your bookmarks bar:
```
javascript:(function(){var el=document.createElement('script');el.type='text/javascript';el.src='https://zution.github.io/Bookmarklet/bookmarklet.js';el.onerror=function(){alert("Due to the Content Security Policy, this bookmarklet is unable to run. There is nothing you can do. If you are the owner and are a developer, consider going here: \n\n https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP");};document.getElementsByTagName('body')[0].appendChild(el);})();
```
After that, you can right click it and edit the name to whatever you would like.
## Functions
* calc: calculates two-number equations; supports addition, subtraction, multiplication, division, modulus, and power
* srch: searches Google for your inputted search query
* dark: enables dark mode; does not work on some sites
* revert dark: reverts dark mode
* remove cookies: removes stored cookies on the current page
* shorten url: shortens the current URL with is.gd URL shortener
* edit page: has an interface for editing the page (for coders mainly; usable by most people with a bit of experimenting and guessing)
* performance: shows technical statistics, most will not understand
## Troubleshooting
### It says something about the Content Security Policy
This is something to maintain security in modern browsers, and wesbites may choose to block certain functions of boomarklets if they wish. There is, unfortunately, nothing that can be done to fix this, unless you (the user) are the operator of the site.
### Nothing is happening when I click on it
Some sites, such as chrome://version, will fail to execute bookmarklets at all. This is likely due to security reasons.
### When I search the page or shorten the URL (and if searching for a page inputs the query), nothing happens after that
You'll likely see something along the lines of "Pop-up Blocked". Most browsers block new tabs being opened by default, so the user isn't spammed with tabs, forced to see certain tabs, etc.. You can click on this and enable it, or search up how to enable it for all websites if you wish.
## Credit
https://forum.duolingo.com/comment/39222130/GUIDE-How-to-get-features-like-DarkMode-and-Font-Style-using-Bookmarklets
https://github.com/timothybrady/Clear-cookies-bookmarklet
https://x-ray-goggles.mouse.org/
https://github.com/micmro/performance-bookmarklet

