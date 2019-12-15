# Multiprint
### A webapp that fingerprints / guesses / works out what you use.

# Technology
Web-Multiprint uses Plain JS. It uses modules, which are seperate files. `modules/include.js` loads these modules.

# Modules
## operaAB
Detects Opera's built-in adblock

### How
Opera's built-in adblock injects a style element / tag into the head (`<head>`). This modules detects how many style elements there are, if more than normal, iterate over all style elements except from W-MP's own. When iterating it checks the elements innerHTML to see if it includes a string that is always in Opera's CSS.

## easylist
Detects if the client uses an adblocker which uses the easylist adblocking list

## navigator
Primarily used for debugging / identifying navigator variables. Doesn't detect anything, just shows information.

## UA-firefox
Guesses whether the browser is Firefox from the user agent string

## UA-chromium
Guesses whether the browser is Chromium-based from the user agent string

## UA-chromium-mobile
Guesses whether the browser is Chromium-based Mobile from the user agent string

## UA-opera
Guesses whether the browser is Opera from the user agent string

## js-load-status
Detects Chromium-based desktop browsers or Android WebView based on whether the browser loads a JS file returned with a 100 HTTP status code

## opera-local-exploit
Makes an iframe with `src="opera://about"`, for some reason, unlike most Chromium-based browsers, Opera doesn't block it's own protocol / local files, detects whether it worked / load via setting `onload`
