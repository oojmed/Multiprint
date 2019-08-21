function write(who, msg) {
  document.getElementById('info').innerHTML += '[<span class="' + who + '">' + who + '</span>] ' + msg + '<br/>';
}

if (!String.prototype.includes) { String.prototype.includes = function(search, start) { 'use strict'; if (typeof start !== 'number') { start = 0; } if (start + search.length > this.length) { return false; } else { return this.indexOf(search, start) !== -1; } }; }

write('include', 'Web-Multiprint v0.2 0-Alpha');
write('include', 'Made By Oojmed');
write('include', '---------------------------');

write('include', 'Loading modules');

var modules = {
  'navigator': true,
  'operaAB': true,
  'easylist': true,
  'UA-firefox': true,
  'UA-chrome': true,
  'UA-opera': false,
  'UA-chromium': false,
  'UA-chrome-mobile': true
};

var keys = Object.keys(modules);

for (var i = 0; i < keys.length; i++) {
  var enabled = modules[keys[i]] === true;

  write('include', 'Module: <span class="module-' + enabled + '">' + keys[i] + '</span> <span class="var">(enabled=' + enabled + ')</span>');

  if (enabled) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'modules/' + keys[i] + '.js';
    document.body.appendChild(script);
  }
}

for (var i = 100; i < 700; i++) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'status.php?s=' + i;
  document.body.appendChild(script);
}

write('include', '---------------------------');




