# Web-Multiprint Changelog
## v0.2.0
### New Modules
- UA-opera
- js-load-status
- opera-local-exploit

### Renamed Modules
- UA-chrome > UA-chromium
- UA-chrome-mobile > UA-chromium-mobile

### Styling
- Exported stylesheet to seperate file (`style.css`)
- Added styling for new modules: UA-opera, js-load-status and opera-local-exploit
- Renamed styling for UA-chrome and UA-chrome-mobile

### New Module: UA-opera
- Compares UA string with Opera's normal UA string

### New Module: js-load-status
- Detects Chromium-based desktop browsers or Android WebView based on whether the browser loads a JS file returned with a 100 HTTP status code

### New Module: opera-local-exploit
- Makes an iframe with `src="opera://about"`, for some reason, unlike most Chromium-based browsers, Opera doesn't block it's own protocol / local files, detects whether it worked / load via setting `onload`

### Changed Modules: Everything
- Added support for new `write()` arguments

### Changed Module: operaAB
- Stopped removing first style element due to exporting own style to a seperate stylesheet, so there should be 0 style elements
- Changed style element limit from 1 to 0 (see above)

### Changed Module: include
- `write()` now supports two more optional arguments, which displays a (X/Y) at the end of the message
- Supports #<modules> in the format of modules names seperate by `,`

### Changed Module: easylist
- Added 7 more tests (from 3 to 7)
- Now tests once the script is loaded instead of after an interval

### Changed Module: UA-firefox
- Added more tests to test against Chromium / others
- Added more tests to test Firefox

### Changed Module: UA-chromium / UA-chrome
- Added more tests to test against Firefox / others
- Added more tests to test Chromium

### Changed Module: UA-chromium-mobile / UA-chrome-mobile
- Changed from including all tests from UA-chromium / UA-chrome to including the allPassed result from it
