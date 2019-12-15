function write(who, msg, status, outof) {
  document.getElementById('info').innerHTML += '[<span class="' + who + '">' + who + '</span>] ' + msg;

  if (status !== undefined || outof !== undefined) {
    status = status === undefined ? 'X' : status;
    outof = outof === undefined ? 'X' : outof;

    document.getElementById('info').innerHTML += ' <span style="color: lightgray;">(' + status + '/' + outof + ')</span>'
  }

  document.getElementById('info').innerHTML += '<br/>';
}

if (!String.prototype.includes) { String.prototype.includes = function(search, start) { 'use strict'; if (typeof start !== 'number') { start = 0; } if (start + search.length > this.length) { return false; } else { return this.indexOf(search, start) !== -1; } }; }

write('include', 'Multiprint v1.0.0');
write('include', 'Made By Oojmed');
write('include', '---------------------------');

write('include', 'Loading modules');

var modules = {
  'navigator': true,
  'opera-adblock': true,
  'easylist': true,
  'ublock': true,
  'UA-firefox': true,
  'UA-chromium': true,
  'UA-opera': true,
  'UA-chromium-mobile': true,
  'status-chromium': true,
  'status-firefox': true,
  'opera-local-exploit': true,
  'brave-shields': true,
  'chrome-js-class': true
};

var keys = Object.keys(modules);

var hrefSplits = location.href.split('#');

if (hrefSplits.length > 1) {
  for (var i = 0; i < keys.length; i++) {
    modules[keys[i]] = false;
  }

  var modulesToLoad = hrefSplits[1].split(',');
  for (var i = 0; i < modulesToLoad.length; i++) {
    modules[modulesToLoad[i]] = true;
  }
}

for (var i = 0; i < keys.length; i++) {
  var enabled = modules[keys[i]] === true;

  write('include', 'Module: <span class="module-' + enabled + '">' + keys[i] + '</span> <span class="var">(enabled=' + enabled + ')</span>', i + 1, keys.length);

  if (enabled) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'modules/' + keys[i] + '.js';
    document.body.appendChild(script);
  }
}

write('include', '---------------------------');
