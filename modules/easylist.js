write('easylist', 'Setting <span class="var">window easylist test variables to true</span>', 1, 13);
window.easylist_1 = true;
window.easylist_2 = true;
window.easylist_3 = true;
window.easylist_4 = true;
window.easylist_5 = true;
window.easylist_6 = true;
window.easylist_7 = true;
window.easylist_8 = true;
window.easylist_9 = true;
window.easylist_10 = true;

window.easylist_1_done = false;
window.easylist_2_done = false;
window.easylist_3_done = false;
window.easylist_4_done = false;
window.easylist_5_done = false;
window.easylist_6_done = false;
window.easylist_7_done = false;
window.easylist_8_done = false;
window.easylist_9_done = false;
window.easylist_10_done = false;

window.easylist_test_count = 0;

write('easylist', 'Injecting triggering script tag 1 <span class="var">(seo-ads.js)</span>', 2, 13);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/seo-ads.js';
script.onload = elTest1;
script.onerror = elTest1;
document.body.appendChild(script);

write('easylist', 'Injecting triggering script tag 2 <span class="var">(sevenads.js)</span>', 3, 13);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/sevenads.js';
script.onload = elTest2;
script.onerror = elTest2;
document.body.appendChild(script);

write('easylist', 'Injecting triggering script tag 3 <span class="var">(show-ad.js)</span>', 4, 13);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/show-ad.js';
script.onload = elTest3;
script.onerror = elTest3;
document.body.appendChild(script);

write('easylist', 'Injecting triggering script tag 4 <span class="var">(serv.ads.js)</span>', 5, 13);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/serv.ads.js';
script.onload = elTest4;
script.onerror = elTest4;
document.body.appendChild(script);

write('easylist', 'Injecting triggering script tag 5 <span class="var">(secondads.js)</span>', 6, 13);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/secondads.js';
script.onload = elTest5;
script.onerror = elTest5;
document.body.appendChild(script);

write('easylist', 'Injecting triggering script tag 6 <span class="var">(serve.ads.js)</span>', 7, 13);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/serve.ads.js';
script.onload = elTest6;
script.onerror = elTest6;
document.body.appendChild(script);

write('easylist', 'Injecting triggering script tag 7 <span class="var">(servead.js)</span>', 8, 13);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/servead.js';
script.onload = elTest7;
script.onerror = elTest7;
document.body.appendChild(script);

write('easylist', 'Injecting triggering script tag 8 <span class="var">(serveads.js)</span>', 9, 13);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/serveads.js';
script.onload = elTest8;
script.onerror = elTest8;
document.body.appendChild(script);

write('easylist', 'Injecting triggering script tag 9 <span class="var">(show_ads.js)</span>', 10, 13);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/show_ads.js';
script.onload = elTest9;
script.onerror = elTest9;
document.body.appendChild(script);

write('easylist', 'Injecting triggering script tag 10 <span class="var">(showad.js)</span>', 11, 13);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/showad.js';
script.onload = elTest10;
script.onerror = elTest10;
document.body.appendChild(script);

write('easylist', 'Injected all triggering scripts', 12, 13);
write('easylist', 'Waiting for scripts to load for results', 13, 13);

function elTest1() {
  window.easylist_test_count++;

  var output = window.easylist_1 ? '<span style="color: red">Test 1 <span class="var">(seo-ads.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 1 <span class="var">(seo-ads.js)</span> was not blocked</span>'
  write('easylist', output, window.easylist_test_count, 10);

  window.easylist_1_done = true;

  if (window.easylist_1_done && window.easylist_2_done && window.easylist_3_done && window.easylist_4_done && window.easylist_5_done && window.easylist_6_done && window.easylist_7_done && window.easylist_8_done && window.easylist_9_done && window.easylist_10_done) { elFinal(); }
}

function elTest2() {
  window.easylist_test_count++;

  var output = window.easylist_2 ? '<span style="color: red">Test 2 <span class="var">(sevenads.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 2 <span class="var">(sevenads.js)</span> was not blocked</span>'
  write('easylist', output, window.easylist_test_count, 10);

  window.easylist_2_done = true;

  if (window.easylist_1_done && window.easylist_2_done && window.easylist_3_done && window.easylist_4_done && window.easylist_5_done && window.easylist_6_done && window.easylist_7_done && window.easylist_8_done && window.easylist_9_done && window.easylist_10_done) { elFinal(); }
}

function elTest3() {
  window.easylist_test_count++;

  var output = window.easylist_3 ? '<span style="color: red">Test 3 <span class="var">(show-ad.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 3 <span class="var">(show-ad.js)</span> was not blocked</span>'
  write('easylist', output, window.easylist_test_count, 10);

  window.easylist_3_done = true;

  if (window.easylist_1_done && window.easylist_2_done && window.easylist_3_done && window.easylist_4_done && window.easylist_5_done && window.easylist_6_done && window.easylist_7_done && window.easylist_8_done && window.easylist_9_done && window.easylist_10_done) { elFinal(); }
}

function elTest4() {
  window.easylist_test_count++;

  var output = window.easylist_4 ? '<span style="color: red">Test 4 <span class="var">(serv.ads.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 4 <span class="var">(serv.ads.js)</span> was not blocked</span>'
  write('easylist', output, window.easylist_test_count, 10);

  window.easylist_4_done = true;

  if (window.easylist_1_done && window.easylist_2_done && window.easylist_3_done && window.easylist_4_done && window.easylist_5_done && window.easylist_6_done && window.easylist_7_done && window.easylist_8_done && window.easylist_9_done && window.easylist_10_done) { elFinal(); }
}

function elTest5() {
  window.easylist_test_count++;

  var output = window.easylist_5 ? '<span style="color: red">Test 5 <span class="var">(secondads.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 5 <span class="var">(secondads.js)</span> was not blocked</span>'
  write('easylist', output, window.easylist_test_count, 10);

  window.easylist_5_done = true;

  if (window.easylist_1_done && window.easylist_2_done && window.easylist_3_done && window.easylist_4_done && window.easylist_5_done && window.easylist_6_done && window.easylist_7_done && window.easylist_8_done && window.easylist_9_done && window.easylist_10_done) { elFinal(); }
}

function elTest6() {
  window.easylist_test_count++;

  var output = window.easylist_6 ? '<span style="color: red">Test 6 <span class="var">(serve.ads.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 6 <span class="var">(serve.ads.js)</span> was not blocked</span>'
  write('easylist', output, window.easylist_test_count, 10);

  window.easylist_6_done = true;

  if (window.easylist_1_done && window.easylist_2_done && window.easylist_3_done && window.easylist_4_done && window.easylist_5_done && window.easylist_6_done && window.easylist_7_done && window.easylist_8_done && window.easylist_9_done && window.easylist_10_done) { elFinal(); }
}

function elTest7() {
  window.easylist_test_count++;

  var output = window.easylist_7 ? '<span style="color: red">Test 7 <span class="var">(servead.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 7 <span class="var">(servead.js)</span> was not blocked</span>'
  write('easylist', output, window.easylist_test_count, 10);

  window.easylist_7_done = true;

  if (window.easylist_1_done && window.easylist_2_done && window.easylist_3_done && window.easylist_4_done && window.easylist_5_done && window.easylist_6_done && window.easylist_7_done && window.easylist_8_done && window.easylist_9_done && window.easylist_10_done) { elFinal(); }
}

function elTest8() {
  window.easylist_test_count++;

  var output = window.easylist_8 ? '<span style="color: red">Test 8 <span class="var">(serveads.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 8 <span class="var">(serveads.js)</span> was not blocked</span>'
  write('easylist', output, window.easylist_test_count, 10);

  window.easylist_8_done = true;

  if (window.easylist_1_done && window.easylist_2_done && window.easylist_3_done && window.easylist_4_done && window.easylist_5_done && window.easylist_6_done && window.easylist_7_done && window.easylist_8_done && window.easylist_9_done && window.easylist_10_done) { elFinal(); }
}

function elTest9() {
  window.easylist_test_count++;

  var output = window.easylist_9 ? '<span style="color: red">Test 9 <span class="var">(show_ads.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 9 <span class="var">(show_ads.js)</span> was not blocked</span>'
  write('easylist', output, window.easylist_test_count, 10);

  window.easylist_9_done = true;

  if (window.easylist_1_done && window.easylist_2_done && window.easylist_3_done && window.easylist_4_done && window.easylist_5_done && window.easylist_6_done && window.easylist_7_done && window.easylist_8_done && window.easylist_9_done && window.easylist_10_done) { elFinal(); }
}

function elTest10() {
  window.easylist_test_count++;

  var output = window.easylist_10 ? '<span style="color: red">Test 10 <span class="var">(showad.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 10 <span class="var">(showad.js)</span> was not blocked</span>'
  write('easylist', output, window.easylist_test_count, 10);

  window.easylist_10_done = true;

  if (window.easylist_1_done && window.easylist_2_done && window.easylist_3_done && window.easylist_4_done && window.easylist_5_done && window.easylist_6_done && window.easylist_7_done && window.easylist_8_done && window.easylist_9_done && window.easylist_10_done) { elFinal(); }
}

function elFinal() {
  var final = window.easylist_1 && window.easylist_2 && window.easylist_3 && window.easylist_4 && window.easylist_5 && window.easylist_6 && window.easylist_7 && window.easylist_8 && window.easylist_9 && window.easylist_10 ? '<span style="color: red;">Easylist Adblocking List is installed <span class="var">(all tests were blocked)</span></span>' : '<span style="color: lightgreen;">Easylist Adblocking List is not installed<span class="var"> (not all tests were blocked)</span></span>';
  write('easylist', final);
}
