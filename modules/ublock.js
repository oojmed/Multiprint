write('ublock', 'Setting <span class="var">window easylist test variables to true</span>', 1, 4);

window.ublock_1 = true;

window.ublock_1_done = false;

window.ublock_count = 0;

write('ublock', 'Injecting triggering script tag 1 <span class="var">(mod_ablockdetector/test.js)</span>', 2, 4);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/ublock/mod_ablockdetector/test.js';
script.onload = uBTest1;
script.onerror = uBTest1;
document.body.appendChild(script);

write('ublock', 'Injected all triggering scripts', 3, 4);
write('ublock', 'Waiting for scripts to load for results', 4, 4);

function uBTest1() {
  window.ublock_count++;

  var output = window.ublock_1 ? '<span style="color: red">Test 1 <span class="var">(mod_ablockdetector/test.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 1 <span class="var">(mod_ablockdetector/test.js)</span> was not blocked</span>'
  write('ublock', output, window.ublock_count, 1);

  window.ublock_1_done = true;

  if (window.ublock_count === 1) { uBFinal(); }
}

function uBFinal() {
  var final = window.ublock_1 ? '<span style="color: lightgreen;">uBlock Adblocking List is installed <span class="var">(all tests were blocked)</span></span>' : '<span style="color: red;">uBlock Adblocking List is not installed<span class="var"> (not all tests were blocked)</span></span>';
  write('ublock', final);
}
