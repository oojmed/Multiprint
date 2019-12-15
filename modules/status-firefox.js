write('status-firefox', 'Setting <span class="var">window.status_300 = false</span>', 1, 4);
window.status_300 = false;

write('status-firefox', 'Injecting script which will return a <span class="var">300 status code</span>', 2, 4);
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = sfTest;
script.src = 'https://vps.oojmed.com/W-MP/api/v1/status?s=300'; // Hard-coded due to Cloudflare disliking statuses
document.body.appendChild(script);

write('status-firefox', 'Waiting for script to load', 3, 4);

setTimeout(function() { sfTest(true); }, 1000); // Firefox doesn't actually load it, so a timeout is needed to check as well

function sfTest(isTimeout = false) {
  if (window.status_300) {
    if (isTimeout !== true) {
      write('status-firefox', '<span style="color: red;">Browser is not Firefox <span class="var">(JS with 300 status code was loaded)</span></span>', 4, 4);
    }

    //write('status-chromium', '<span style="color: lightgreen;">Main test succeeded, checking if on mobile <span class="var">from UA-chrome-mobile results</span>', 4, 5);

    /*if (!window.allGcmTestsPassed) {
      write('status-chromium', '<span style="color: lightgreen;">Browser is a Chromium-based browser on a desktop <span class="var">(JS with 100 status code was loaded and not all UA-chrome-mobile passed)</span></span>', 5, 5);
    } else {
      write('status-chromium', '<span style="color: lightgreen;">Browser is Chrome on Android <span class="var">(JS with 100 status code was loaded and all UA-chrome-mobile passed)</span></span>', 5, 5);
    }*/
  } else {
    write('status-firefox', '<span style="color: lightgreen;">Browser is Firefox <span class="var">(JS with 300 status code was not loaded)</span></span>', 4, 4);
  }
}
