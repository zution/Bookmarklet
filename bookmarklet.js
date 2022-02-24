/*
List of functions:
 - calc: calculates two-number equations, supporting addition, subtraction, multiplication, division, modulus, and power
 - srch: searches google
 - dark: enables dark mode (does not work on some sites, on others it may look ugly)
   CREDIT: https://forum.duolingo.com/comment/39222130/GUIDE-How-to-get-features-like-DarkMode-and-Font-Style-using-Bookmarklets
 - revert dark: reverts dark mode if activated via bookmarklet
   CREDIT: https://forum.duolingo.com/comment/39222130/GUIDE-How-to-get-features-like-DarkMode-and-Font-Style-using-Bookmarklets (modified code from here)
 - remove cookies: clears cookies on page
   CREDIT: https://github.com/timothybrady/Clear-cookies-bookmarklet
 - shorten url: shortens the current URL with is.gd URL shortener
 - edit page: edits the page (for coders mainly; usable by most people with a bit of experimenting and guessing)
CREDIT: https://x-ray-goggles.mouse.org/
 - performance: shows EXTREMELY technical statistics, most will not understand
   CREDIT: https://github.com/micmro/performance-bookmarklet
*/
var answer = prompt("What do you need?");
switch(answer) {
    case "calc":
        let num1 = Number(prompt("Number 1"));
        let opr = String(prompt("Operator"));
        let num2 = Number(prompt("Number 2"));
        switch(opr) {
            case "+":
                alert(num1 + num2);
                break;
            case "-":
                alert(num1 - num2);
                break;
            case "*":
                alert(num1 * num2);
                break;
            case "/":
                alert(num1 / num2);
                break;
            case "%":
                alert(num1 % num2);
                break;
            case "^":
                alert(Math.pow(num1, num2));
                break;
            default:
                alert("invalid answer");
        }
        break;
    case "srch":
        window.open("https://www.google.com/search?q=" + prompt("Search Google"), "_blank");
        break;
    case "dark":
        javascript:(d=>{d.head.appendChild(d.createElement('style')).innerText='html,img,video{filter:invert(1)hue-rotate(180deg)sepia(0)grayscale(0.05);filter:invert(0.8)hue-rotate(180deg)sepia(0)grayscale(0.05))}';})(document);
        alert("Dark mode activated! Note that some websites may break, and websites already in dark mode will turn to light mode.");
        break;
    case "revert dark":
        javascript:(d=>{d.head.appendChild(d.createElement('style')).innerText='html,img,video{filter:invert(0)hue-rotate(0deg)sepia(0)grayscale(0);filter:invert(0)hue-rotate(0deg)sepia(0)grayscale(0))}';})(document);
        alert("Dark mode reverted! Broken websites will now appear normal, and all websites with dark mode activated using this will be in dark mode.");
        break;
    case "remove cookies":
        var numCookies=0; var cookieArray=document.cookie.split("; "); for(var i=0; i<cookieArray.length && cookieArray[i]; i++) {numCookies++; for(var subDomain= "." + location.host; subDomain; subDomain=subDomain.replace(/^(?:%5C.|[^%5C.]+)/, "")){ for(var curPath =location.pathname; curPath; curPath=curPath.replace(/.$/,"")){document.cookie=(cookieArray[i] + "; domain=" + subDomain + "; path=" + curPath + "; expires="+new Date((new Date()).getTime()-1e11).toGMTString());}}} alert(numCookies + " cookies were removed."); window.location.href = "http://" + window.location.host + window.location.pathname;
        break;
    case "edit page":
        var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);
        break;
    case "shorten url":
        window.open("https://is.gd/create.php?longurl="+encodeURIComponent(location.href), "_blank");
        break;
    case "performance":
        javascript:(function(){var el=document.createElement('script');el.type='text/javascript';el.src='https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js';el.onerror=function(){alert("Looks like the Content Security Policy directive is blocking the use of bookmarklets\n\nYou can copy and paste the content of:\n\n\"https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js\"\n\ninto your console instead\n\n(link is in console already)");console.log("https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js");};document.getElementsByTagName('body')[0].appendChild(el);})();
        break;
    default:
        alert("Sorry, that is not recognized.")
}
