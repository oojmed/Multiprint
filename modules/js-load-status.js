write('js-load-status', 'Setting <span class="var">window.status_100 = false</span>', 1, 5);
window.status_100 = false;

write('js-load-status', 'Injecting script which will return a <span class="var">100 status code</span>', 2, 5);
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = scTest;
script.src = 'https://vps.oojmed.com/status.php?s=100'; // Hard-coded due to Cloudflare disliking 1XX statuses
document.body.appendChild(script);

write('js-load-status', 'Waiting for script to load', 3, 5);

function scTest() {
  if (window.status_100) {
    write('js-load-status', '<span style="color: lightgreen;">Main test succeeded, checking if on mobile <span class="var">from UA-chrome-mobile results</span>', 4, 5);

    if (!window.allGcmTestsPassed) {
        write('js-load-status', '<span style="color: lightgreen;">Browser is a Chromium-based browser on a desktop <span class="var">(JS with 100 status code was loaded and not all UA-chrome-mobile passed)</span></span>', 5, 5);
    } else {
      write('js-load-status', '<span style="color: lightgreen;">Browser is Chrome WebView on Android <span class="var">(JS with 100 status code was loaded and all UA-chrome-mobile passed)</span></span>', 5, 5);
    }
  } else {
    write('js-load-status', '<span style="color: red;">You are not using a Chromium-based browser on a desktop <span class="var">(JS with 100 status code was loaded)</span></span>', 5, 5);
  }
}
