var gcTests = {
  "userAgentDoesNotContainFirefox": !navigator.userAgent.includes('Firefox'),
  "userAgentDoesNotContainGeckoSlash": !navigator.userAgent.includes('Gecko/'),
  "userAgentContainsChrome": navigator.userAgent.includes('Chrome'),
  "userAgentContainsMozilla": navigator.userAgent.includes('Mozilla'),
  "userAgentContainsWebKit": navigator.userAgent.includes('WebKit'),
  "userAgentContainsSafari": navigator.userAgent.includes('Safari'),
  "userAgentContainsKHTML": navigator.userAgent.includes('KHTML'),
  "userAgentContainsLikeGecko": navigator.userAgent.includes('like Gecko'),
  "appCodeNameEqualsMozilla": navigator.appCodeName === "Mozilla",
  "appNameEqualsNetscape": navigator.appName === "Netscape",
  "venderDoesNotEqualBlank": navigator.vendor !== "",
  "vendorEqualsGoogleInc": navigator.vendor === "Google Inc."
};

var gcTestsKeys = Object.keys(gcTests);

var allPassed = true;

for (var i = 0; i < gcTestsKeys.length; i++) {
  var color = gcTests[gcTestsKeys[i]] ? 'lightgreen' : 'red';

  write('UA-chromium', '<span class="var">' + gcTestsKeys[i] + '</span> = <span style="color: ' + color + '">' + gcTests[gcTestsKeys[i]] + '</span>', i + 1, gcTestsKeys.length);

  if (!gcTests[gcTestsKeys[i]]) { allPassed = false; }
}

var text = allPassed ? '<span style="color: lightgreen;">All Chrome tests passed</span>' : '<span style="color: red;">Not all Chrome tests passed</span>';
write('UA-chromium', text);

window.gcTestsAllPassed = allPassed;
