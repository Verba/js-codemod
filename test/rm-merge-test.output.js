'use strict';

var x = {
  ...a
};

({
  ...a,
  ...b
});

({
  a: 1,
  ...b
});

({
  a: 1,
  ...c,
  b: 2
});
