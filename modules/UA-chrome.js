var gcTests = {
  "userAgentDoesNotContainFirefox": !navigator.userAgent.includes('Firefox'),
  "userAgentContainsChrome": navigator.userAgent.includes('Chrome'),
  "userAgentContainsMozilla": navigator.userAgent.includes('Mozilla'),
  "userAgentContainsWebKit": navigator.userAgent.includes('WebKit'),
  "userAgentContainsSafari": navigator.userAgent.includes('Safari'),
  "appCodeNameEqualsMozilla": navigator.appCodeName === "Mozilla",
  "appNameEqualsNetscape": navigator.appName === "Netscape",
  "venderDoesNotEqualBlank": navigator.vendor !== "",
  "vendorEqualsGoogleInc": navigator.vendor === "Google Inc."
};

window.gcTests = gcTests;

var gcTestsKeys = Object.keys(gcTests);

var allPassed = true;

for (var i = 0; i < gcTestsKeys.length; i++) {
  var color = gcTests[gcTestsKeys[i]] ? 'lightgreen' : 'red';

  write('UA-chrome', '<span class="var">' + gcTestsKeys[i] + '</span> = <span style="color: ' + color + '">' + gcTests[gcTestsKeys[i]] + '</span>');

  if (!gcTests[gcTestsKeys[i]]) { allPassed = false; }
}

var text = allPassed ? '<span style="color: lightgreen;">All Chrome tests passed</span>' : '<span style="color: red;">Not all Chrome tests passed</span>';
write('UA-chrome', text);