write('navigator', 'Displaying <span class="var">navigator</span> variables', 1, 1);

var navVars = {
  'appCodeName': navigator.appCodeName,
  'appName': navigator.appName,
  'appVersion': navigator.appVersion,
  'language': navigator.language,
  'platform': navigator.platform,
  'product': navigator.product,
  'productSub': navigator.productSub,
  'userAgent': navigator.userAgent,
  'vendor': navigator.vendor
};

var navVarsKeys = Object.keys(navVars);

for (var i = 0; i < navVarsKeys.length; i++) {
  write('navigator', navVarsKeys[i] + ' = <span class="var">"' + navVars[navVarsKeys[i]] + '"</span>');
}
