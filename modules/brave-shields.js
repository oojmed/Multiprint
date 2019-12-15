write('brave-shields', 'Loading urls', 1, 1);

var bUrls = [
  'https://track.atom-data.io/test.js',
  'https://vidazoo.com/aggregate',
  'https://vidazoo.com/proxy',
  'https://mediabong.net/test.js',
  'https://imprvdosrv.com/test.js'
];

var bFuncs = [
  bTestLoad1,
  bTestError1,
  bTestLoad2,
  bTestError2,
  bTestLoad3,
  bTestError3,
  bTestLoad4,
  bTestError4,
  bTestLoad5,
  bTestError5
]

window.bABCount = 0;
window.bABAll = true;

for (var i = 0; i < bUrls.length; i++) {
  write('brave-shields', 'Injecting script tag <span class="var">(' + bUrls[i] + ')</span>', i + 1, bUrls.length);

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = bUrls[i];
  script.onload = bFuncs[i * 2];
  script.onerror = bFuncs[(i * 2) + 1];
  document.body.appendChild(script);
}

function bTestLoad1() {
  bTestLoad(0);
}
function bTestError1() {
  bTestError(0);
}

function bTestLoad2() {
  bTestLoad(1);
}
function bTestError2() {
  bTestError(1);
}

function bTestLoad3() {
  bTestLoad(2);
}
function bTestError3() {
  bTestError(2);
}

function bTestLoad4() {
  bTestLoad(3);
}
function bTestError4() {
  bTestError(3);
}

function bTestLoad5() {
  bTestLoad(4);
}
function bTestError5() {
  bTestError(4);
}

function bTestLoad(i) {
  var url = bUrls[i];

  window.bABCount++;

  write('brave-shields', '<span style="color: lightgreen;">Script ' + (i + 1) + ' <span class="var">(' + url + ')</span> loaded successfully</span>', window.bABCount, bUrls.length);

  if (window.bABCount === 5) { bTestFinal(); }
}

function bTestError(i) {
  window.bABAll = false;

  var url = bUrls[i];

  window.bABCount++;

  write('brave-shields', '<span style="color: red;">Script ' + (i + 1) + ' <span class="var">(' + url + ')</span> failed to load</span>', window.bABCount, bUrls.length);

  if (window.bABCount === 5) { bTestFinal(); }
}

function bTestFinal() {
  var output = window.bABAll ? '<span style="color: lightgreen;">Brave (Shields) detected</span>' : '<span style="color: red;">Brave (Shields) not detected</span>';
  write('brave-shields', output);
}
