write('easylist', 'Setting <span class="var">window easylist test variables to true</span>');
window.easylist_1 = true;
window.easylist_2 = true;
window.easylist_3 = true;

write('easylist', 'Adding triggering script tag <span class="var">(seo-ads.js)</span>');

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/seo-ads.js';
document.body.appendChild(script);

write('easylist', 'Adding triggering script tag <span class="var">(sevenads.js)</span>');

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/sevenads.js';
document.body.appendChild(script);

write('easylist', 'Adding triggering script tag <span class="var">(show-ad.js)</span>');

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'ad-testing/easylist/show-ad.js';
document.body.appendChild(script);

write('easylist', 'Added all triggering scripts');
write('easylist', 'Waiting 300ms to examine results');

setTimeout(test, 300);

function test() {
  write('easylist', 'Checking <span class="var">window.easylist_1</span>');

  var output = window.easylist_1 ? '<span style="color: red">Test 1 <span class="var">(seo-ads.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 1 <span class="var">(seo-ads.js)</span> was not blocked</span>'
  write('easylist', output);

  write('easylist', 'Checking <span class="var">window.easylist_2</span>');

  var output = window.easylist_2 ? '<span style="color: red">Test 2 <span class="var">(sevenads.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 2 <span class="var">(sevenads.js)</span> was not blocked</span>'
  write('easylist', output);

  write('easylist', 'Checking <span class="var">window.easylist_3</span>');

  var output = window.easylist_3 ? '<span style="color: red">Test 3 <span class="var">(show-ad.js)</span> was blocked</span>' : '<span style="color: lightgreen;">Test 3 <span class="var">(show-ad.js)</span> was not blocked</span>'
  write('easylist', output);

  var final = window.easylist_1 && window.easylist_2 && window.easylist_3 ? '<span style="color: red;">Easylist Adblocking List is installed <span class="var">(all tests were blocked)</span></span>' : '<span style="color: lightgreen;">Easylist Adblocking List is not installed<span class="var"> (not all tests were blocked)</span></span>';
  write('easylist', final);
}
