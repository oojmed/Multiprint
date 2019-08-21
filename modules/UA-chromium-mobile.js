var gcmInterval = setInterval(gcmTest, 100);

function gcmTest() {
  if (window.gcTestsAllPassed === undefined) { return; }
  clearInterval(gcmInterval);

  var gcmTests = {
    "UA-chrome_TestsAllPassed": window.gcTestsAllPassed,
    "userAgentContainsMobileSafari": navigator.userAgent.includes('Mobile Safari')
  };

  var gcmTestsKeys = Object.keys(gcmTests);

  var allPassed = true;

  for (var i = 0; i < gcmTestsKeys.length; i++) {
    var color = gcmTests[gcmTestsKeys[i]] ? 'lightgreen' : 'red';

    write('UA-chromium-mobile', '<span class="var">' + gcmTestsKeys[i] + '</span> = <span style="color: ' + color + '">' + gcmTests[gcmTestsKeys[i]] + '</span>');

    if (!gcmTests[gcmTestsKeys[i]]) { allPassed = false; }
  }

  var text = allPassed ? '<span style="color: lightgreen;">All Chrome Mobile tests passed</span>' : '<span style="color: red;">Not all Chrome Mobile tests passed</span>';
  write('UA-chromium-mobile', text);

  window.allGcmTestsPassed = allPassed;
}
