# Web-Multiprint
## A webapp that fingerprints / guesses / works out what you use.

## Technology
Web-Multiprint uses Plain JS. It uses modules, which are seperate files. `modules/include.js` loads these modules.

## Modules
### operaAB
Detects Opera's built-in adblock

#### How
Opera's built-in adblock injects a style element / tag into the head (`<head>`). This modules detects how many style elements there are, if more than normal, iterate over all style elements except from W-MP's own. When iterating it checks the elements innerHTML to see if it includes a string that is always in Opera's CSS.

### easylist
Detects if the client uses an adblocker which uses the easylist adblocking list

### navigator
Primarily used for debugging / identifying navigator variables. Doesn't detect anything, just shows information.

### UA-firefox
Guesses whether the browser is Firefox from the user agent string

### UA-chrome
Guesses whether the browser is Chrome from the user agent string