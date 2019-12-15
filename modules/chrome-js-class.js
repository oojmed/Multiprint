write('chrome-js-class', 'Checking if the <span class="var">chrome JS class</span> exists', 1, 1);
try {
  if (chrome !== undefined) {
    write('chrome-js-class', '<span style="color: lightgreen;">Chrome detected <span class="var">(chrome JS class exists)</span></span>');
  } else {
    write('chrome-js-class', '<span style="color: red;">Chrome not detected <span class="var">(chrome JS class does not exist)</span></span>');
  }
} catch (err) {
  write('chrome-js-class', '<span style="color: red;">Chrome not detected <span class="var">(chrome JS class does not exist)</span></span>');
}
