require('../less/entry.less');
var debang1 = require('./debang1.js');
debang1.init();
debang1.city();

var debang2 = require('./debang2.js');
debang2.init();
debang2.event();

require('./ajax.js');