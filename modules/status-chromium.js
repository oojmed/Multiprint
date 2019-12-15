write('status-chromium', 'Setting <span class="var">window.status_100 = false</span>', 1, 4);
window.status_100 = false;

write('status-chromium', 'Injecting script which will return a <span class="var">100 status code</span>', 2, 4);
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = scTest;
script.src = 'https://vps.oojmed.com/W-MP/api/v1/status?s=100'; // Hard-coded due to Cloudflare disliking statuses
document.body.appendChild(script);

write('status-chromium', 'Waiting for script to load', 3, 4);

function scTest() {
  if (window.status_100) {
    write('status-chromium', '<span style="color: lightgreen;">Browser is a Chromium-based <span class="var">(JS with 100 status code was loaded)</span></span>', 4, 4);

    //write('status-chromium', '<span style="color: lightgreen;">Main test succeeded, checking if on mobile <span class="var">from UA-chrome-mobile results</span>', 4, 5);

    /*if (!window.allGcmTestsPassed) {
      write('status-chromium', '<span style="color: lightgreen;">Browser is a Chromium-based browser on a desktop <span class="var">(JS with 100 status code was loaded and not all UA-chrome-mobile passed)</span></span>', 5, 5);
    } else {
      write('status-chromium', '<span style="color: lightgreen;">Browser is Chrome on Android <span class="var">(JS with 100 status code was loaded and all UA-chrome-mobile passed)</span></span>', 5, 5);
    }*/
  } else {
    write('status-chromium', '<span style="color: red;">You are not using a Chromium-based browser on a desktop <span class="var">(JS with 100 status code was not loaded)</span></span>', 4, 4);
  }
}
