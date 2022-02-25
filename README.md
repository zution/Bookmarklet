# Bookmarklet
This is a small project I made for fun. This is not possible with out the people who worked on bookmarklets in the credit section, so be sure to check them out. It's a mash of random, somewhat useful bookmarklets that might prove helpful. This bookmarklet does update automatically, and some things may change, making certain commands irrelevant.

You can get the bookmarklet by dragging this to your bookmarks bar:
```
javascript:(function(){var el=document.createElement('script');el.type='text/javascript';el.src='https://zution.github.io/Bookmarklet/bookmarklet.js';el.onerror=function(){alert("Due to the Content Security Policy, this bookmarklet is unable to run. There is nothing you can do. If you are the owner and are a developer, consider going here: \n\nhttps://developer.mozilla.org/en-US/docs/Web/HTTP/CSP");};document.getElementsByTagName('body')[0].appendChild(el);})();
```
After that, you can right click it and edit the name to whatever you would like.

If you are on mobile, save any page as a bookmark, edit the bookmark, rename it to "Bookmarklet" or something like that, copy the above code, and paste the above code into the "link" field. Save your changes, and now you'll have access to some useful functions on mobile.

## Functions
* calc: calculates two-number equations; supports addition, subtraction, multiplication, division, modulus, and power
* srch: searches Google for your inputted search query (not very useful, perhaps marginally useful when using another search engine as default)
* dark: enables dark mode; does not work on some sites
* revert dark: reverts dark mode
* remove cookies: removes stored cookies on the current page
* shorten url: shortens the current URL with is.gd URL shortener
* edit page: has an interface for editing the page (for coders mainly; usable by most people with a bit of experimenting and guessing)
* performance: shows technical statistics, most will not understand
* joke: tells a random, terrible joke that you will not laugh at
* convert temp: converts temperature from Celsius to Farenheit or vice versa
* using: tells you what the site is using (Bootstrap, Ruby on Rails, GitHub Pages, etc.)
* qr code: makes a qr code for a link, the current site, or text
* help: a list of commands

## Troubleshooting
### It says something about the Content Security Policy
This is something to maintain security in modern browsers, and wesbites may choose to block certain functions of boomarklets if they wish. There is, unfortunately, nothing that can be done to fix this, unless you (the user) are the operator of the site. Or you can see below for a solution to this if you really want to use it.
### Nothing is happening when I click on it
Some sites, such as chrome://version, will fail to execute bookmarklets at all. This is likely due to security reasons. [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) is a nice place to test all the features if you want to test this bookmarklet. Then again, there is a likely possibility of something happening to GitHub, or some other technical reason, as this bookmarklet runs code from GitHub, and most of the code is hosted here. See below if you really want to use this bookmarklet regardless.
### When I search Google or shorten the URL (and if searching for a page inputs the query), nothing happens after that
You'll likely see something along the lines of "Pop-up Blocked". Most browsers block new tabs being opened by default, so the user isn't spammed with tabs, forced to see certain tabs, etc.. You can click on this and then proceed to enable it for that site only, or search up how to enable it for all websites if you wish.
### I want to run the bookmarklet, but I can't because of CSP or otherwise
If you _really_ want to use it and decide it's worth the fuss, go to [the code](https://zution.github.io/Bookmarklet/bookmarklet.js), copy all of it, and paste it into your browser's console.

## Credits
[Dark Mode](https://forum.duolingo.com/comment/39222130/GUIDE-How-to-get-features-like-DarkMode-and-Font-Style-using-Bookmarklets)

[Clear Cookies](https://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript)

[Edit Page](https://x-ray-goggles.mouse.org/)

[Performance](https://github.com/micmro/performance-bookmarklet)
