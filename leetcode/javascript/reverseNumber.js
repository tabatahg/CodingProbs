// Given a 32-bit signed integer, reverse digits of an integer.

const reverseInteger = function(x) {
  t = [];
  z = x + "";
  a = z.split("");
  console.log(a);
  for (let i = a.length - 1; i >= 0; i--) {
    t.push(a[i]);
  }
  y = t.join("");
  c = parseInt(y);
  if (a.includes("-")) {
    g = -c;
    if (g <= -2147483651) {
      return 0;
    }
    return g;
  }
  if (c >= 2147483651) {
    return 0;
  }
  return c;
};
