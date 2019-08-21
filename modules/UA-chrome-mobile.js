var gcmTests = {
  "userAgentContainsMobileSafari": navigator.userAgent.includes('Mobile Safari')
};

gcmTests = [gcmTests, window.gcTests].reduce(function (r, o) { Object.keys(o).forEach(function (k) { r[k] = o[k]; }); return r; }, {});

var gcmTestsKeys = Object.keys(gcmTests);

var allPassed = true;

for (var i = 0; i < gcmTestsKeys.length; i++) {
  var color = gcmTests[gcmTestsKeys[i]] ? 'lightgreen' : 'red';

  write('UA-chrome-mobile', '<span class="var">' + gcmTestsKeys[i] + '</span> = <span style="color: ' + color + '">' + gcmTests[gcmTestsKeys[i]] + '</span>');

  if (!gcmTests[gcmTestsKeys[i]]) { allPassed = false; }
}

var text = allPassed ? '<span style="color: lightgreen;">All Chrome Mobile tests passed</span>' : '<span style="color: red;">Not all Chrome Mobile tests passed</span>';
write('UA-chrome-mobile', text);