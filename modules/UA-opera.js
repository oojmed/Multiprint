var oprInterval = setInterval(oprTest, 100);

function oprTest() {
  if (window.gcTestsAllPassed === undefined) { return; }
  clearInterval(oprInterval);

  var oprTests = {
    "UA-chrome_TestsAllPassed": window.gcTestsAllPassed,
    "userAgentContainsOPRSlash": navigator.userAgent.includes('OPR/')
  };

  var oprTestsKeys = Object.keys(oprTests);

  var allPassed = true;

  for (var i = 0; i < oprTestsKeys.length; i++) {
    var color = oprTests[oprTestsKeys[i]] ? 'lightgreen' : 'red';

    write('UA-opera', '<span class="var">' + oprTestsKeys[i] + '</span> = <span style="color: ' + color + '">' + oprTests[oprTestsKeys[i]] + '</span>');

    if (!oprTests[oprTestsKeys[i]]) { allPassed = false; }
  }

  var text = allPassed ? '<span style="color: lightgreen;">All Opera tests passed</span>' : '<span style="color: red;">Not all Opera tests passed</span>';
  write('UA-opera', text);
}
