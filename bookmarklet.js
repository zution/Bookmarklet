/*
BOOKMARKLET: javascript:(function(){var el=document.createElement('script');el.type='text/javascript';el.src='https://zution.github.io/Bookmarklet/bookmarklet.js';el.onerror=function(){alert("Due to the Content Security Policy, this bookmarklet is unable to run. There is nothing you can do. If you are the owner and are a developer, consider going here: \n\nhttps://developer.mozilla.org/en-US/docs/Web/HTTP/CSP");};document.getElementsByTagName('body')[0].appendChild(el);})();

I feel rusty in my coding skills tbh
*/
var answer = prompt("What do you need?");
console.log(answer);
answer = String(answer)
answer = answer.toLowerCase();
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
                alert("Invalid answer.");
        }
        break;
    case "srch":
        window.open("https://www.google.com/search?q=" + prompt("Search Google"), "_blank");
        break;
    case "dark":
        javascript:(d=>{d.head.appendChild(d.createElement('style')).innerText='html,img,video{filter:invert(1)hue-rotate(180deg)sepia(0)grayscale(0.05);filter:invert(0.8)hue-rotate(180deg)sepia(0)grayscale(0.05))}';})(document);
        alert("Dark mode activated! Note that some websites may break, and websites already in dark mode (not using this) will turn into light mode.");
        break;
    case "revert dark":
        javascript:(d=>{d.head.appendChild(d.createElement('style')).innerText='html,img,video{filter:invert(0)hue-rotate(0deg)sepia(0)grayscale(0);filter:invert(0)hue-rotate(0deg)sepia(0)grayscale(0))}';})(document);
        alert("Dark mode reverted! Broken websites will now appear normal, and all websites with dark mode activated using this will be in light mode.");
        break;
    case "remove cookies":
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        alert("Done! All cookies were removed.")
        break;
    case "edit page":
        var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);
        break;
    case "shorten url":
        window.open("https://is.gd/create.php?longurl=" + encodeURIComponent(location.href), "_blank");
        break;
    case "performance":
        javascript:(function(){var el=document.createElement('script');el.type='text/javascript';el.src='https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js';el.onerror=function(){alert("Looks like the Content Security Policy directive is blocking the use of bookmarklets\n\nYou can copy and paste the content of:\n\n\"https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js\"\n\ninto your console instead\n\n(link is in console already)");console.log("https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js");};document.getElementsByTagName('body')[0].appendChild(el);})();
        break;
    case "joke":
        var jokes = ["What do you call a bagel that can fly?", "Why can't a nose be 12 inches long?", "If you're American when you go in and when you go out, what are you when you're inside the bathroom?", "What do you call a can opener that can't open cans?", "Did you hear about the Italian chef that passed away?", "I sold my vacuum cleaner.", "What do you call an alligator in a vest?", "The wedding was so beautiful.", "What did the janitor say when he jumped out of the closet?", "What did the bison say to his son when he left?", "What did the pirate say when he turned 80?", "That's a pretty good ceiling.", "Did you hear about the kidnapping at the school?", "I hate Russian dolls."];
        var answers = ["A plane bagel!", "Then it would be a foot.", "European (try to understand it)", "A can't opener", "He pasta-way", "All it did was collecting dust.", "An in-vest-i-gator", "Even the cake was in tiers.", "Supplies!", "Bison.", "Aye, matey!", "It's not the best, but it's certainly up there!", "He woke up eventually.", "They're so full of themselves."];
        var randNum = Math.floor(Math.random() * (14));
        alert(jokes[randNum]);
        alert(answers[randNum]);
        break;
    case "convert temp":
        var ans = prompt("C to F or F to C?");
        ans = ans.toLowerCase();
        if (ans == 1 || ans == "c to f" || ans == "one" || ans == "first") {
            alert(Math.round(Number(prompt("temperature?")) * 1.8 + 32) + "° F");
        } else if (ans == 2 || ans == "f to c" || ans == "two" || ans == "second") {
            alert(Math.round((prompt("temperature?") - 32) * 5 / 9) + "° C");
        } else {
            alert("Invalid answer.");
        }
        break;
    case "using":
        javascript: (function() { var d = document, e = d.getElementById('wappalyzer-container'); if (e !== null) { d.body.removeChild(e); } var u = 'https://www.wappalyzer.com/', t = new Date().getTime(), c = d.createElement('div'), p = d.createElement('div'), l = d.createElement('link'), s = d.createElement('script'); c.setAttribute('id', 'wappalyzer-container'); l.setAttribute('rel', 'stylesheet'); l.setAttribute('href', u + 'css/bookmarklet.css'); d.head.appendChild(l); p.setAttribute('id', 'wappalyzer-pending'); p.setAttribute('style', 'background-image: url(' + u + 'images/spinner.gif) !important'); c.appendChild(p); s.setAttribute('src', u + 'bookmarklet/wappalyzer.js'); s.onload = function() { window.wappalyzer = new Wappalyzer(); s = d.createElement('script'); s.setAttribute('src', u + 'bookmarklet/apps.js'); s.onload = function() { s = d.createElement('script'); s.setAttribute('src', u + 'bookmarklet/driver.js'); c.appendChild(s); }; c.appendChild(s); }; c.appendChild(s); d.body.appendChild(c); })();
        break;
    case "help":
        alert("calc: supports two number equations, with addition, subtraction, multiplication, division, modulus, and exponents\nsrch: searches google\ndark: enables dark mode\nrevert dark: reverts dark mode\nremove cookies: removes cookies\nqr code: gives you a qr code for the current site, a link, or text\nshorten url: shortens url with is.gd\nedit page: shows an interface to edit the page\nperformance: shows technical statistics\njoke: tells a joke\nconvert temp: converts C to F or vice versa\nusing: shows what the site is using\nhelp: list of commands");
        break;
    case "qr code":
        var ans = prompt("The current site, a link, or text?");
        ans = ans.toLowerCase();
        function validUrl(str) { // shamelessly copied from stack overflow
            var pattern = new RegExp('^(https?:\\/\\/)?'+
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
            '((\\d{1,3}\\.){3}\\d{1,3}))'+
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
            '(\\?[;&a-z\\d%_.~+=-]*)?'+
            '(\\#[-a-z\\d_]*)?$','i');
            return !!pattern.test(str);
        }
        if (ans == "site" || ans == "current site" || ans == "this site" || ans == document.URL) {
            window.open("https://chart.apis.google.com/chart?cht=qr&chs=500x500&choe=UTF-8&chld=H|0&chl=" + document.URL);
        } else if (ans == "link" || ans == "a link" || ans.includes("https://") || ans.includes("http://" || ans == "url")) {
            var link = prompt("What link?");
            if (validUrl(link) == true) {
                window.open("https://chart.apis.google.com/chart?cht=qr&chs=500x500&choe=UTF-8&chld=H|0&chl=" + link);
            } else {
                alert("Not a valid link. Make sure you include things like \"https://\".");
            }
        } else if (ans == "text" || ans == "txt") {
            window.open("https://chart.apis.google.com/chart?cht=qr&chs=500x500&choe=UTF-8&chld=H|0&chl=" + prompt("What text?"));
        } else {
            alert("\"" + ans + "\" is not a valid choice.")
        }
        break;
    default:
        if (answer !== "" && answer !== "null") {
            alert("Sorry, please enter another command. That command is not recognized.");
        } else {
            alert("You want me to do nothing? Then I will!");
        }
}
