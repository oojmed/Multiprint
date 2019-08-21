var ffTests = {
  "userAgentDoesNotContainChrome": !navigator.userAgent.includes('Chrome'),
  "userAgentDoesNotContainKHTML": !navigator.userAgent.includes('KHTML'),
  "userAgentDoesNotContainLikeGecko": !navigator.userAgent.includes('like Gecko'),
  "userAgentDoesNotContainWebKit": !navigator.userAgent.includes('WebKit'),
  "userAgentDoesNotContainSafari": !navigator.userAgent.includes('Safari'),
  "userAgentContainsFirefox": navigator.userAgent.includes('Firefox'),
  "userAgentContainsGeckoSlash": navigator.userAgent.includes('Gecko/'),
  "userAgentContainsMozilla": navigator.userAgent.includes('Mozilla'),
  "appCodeNameEqualsMozilla": navigator.appCodeName === "Mozilla",
  "appNameEqualsNetscape": navigator.appName === "Netscape",
  "vendorEqualsBlank": navigator.vendor === ""
};

var ffTestsKeys = Object.keys(ffTests);

var allPassed = true;

for (var i = 0; i < ffTestsKeys.length; i++) {
  var color = ffTests[ffTestsKeys[i]] ? 'lightgreen' : 'red';

  write('UA-firefox', '<span class="var">' + ffTestsKeys[i] + '</span> = <span style="color: ' + color + '">' + ffTests[ffTestsKeys[i]] + '</span>', i + 1, ffTestsKeys.length);

  if (!ffTests[ffTestsKeys[i]]) { allPassed = false; }
}

var text = allPassed ? '<span style="color: lightgreen;">All Firefox tests passed</span>' : '<span style="color: red;">Not all Firefox tests passed</span>';
write('UA-firefox', text);
