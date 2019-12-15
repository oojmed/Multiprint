write('opera-adblock', 'Finding all <span class="var">style</span> elements');

var styles = document.getElementsByTagName('style');

var injection = styles.length > 0;
var color = injection ? 'red' : 'lightgreen';

write('opera-adblock', '<span style="color: ' + color + ';">' + styles.length + '</span> style element(s)');

var injectionText = injection ? 'CSS injection(s) found' : 'No CSS injections found';

write('opera-adblock', '<span style="color: ' + color + ';">' + injectionText + '</span>');

if (injection) {
  write('opera-adblock', 'Starting stage 2');

  write('opera-adblock', 'Converting <span class="var">styles array</span> from <span class="var">HTMLCollection</span> to <span class="var">Array</span>')
  styles = [].slice.call(styles);

  //write('opera-adblock', 'Removing original page style element from <span class="var">styles array</span>');
  //styles.shift();

  write('opera-adblock', 'Searching for <span class="var">":root topadblock"</span> in <span class="var">each style\'s innerText</span>');

  for (var i = 0; i < styles.length; i++) {
    console.log(styles[i]);

    var styleIsOperaAB = styles[i].innerText.includes(':root topadblock');

    var display = styleIsOperaAB ? '<span style="color: lightgreen;">Element is Opera Adblock</span>' : '<span style="color: red;">Element is not Opera Adblock';

    write('opera-adblock', display);

    if (styleIsOperaAB) { break; }
  }
}
