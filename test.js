var fs = require('fs');
var gm = require('gm');

gm('./testpng.png')
.transparent("#fff")
.noProfile()
.write('./outpng.png', function (err) {
  if (!err) console.log('done');
  console.log(err);
});