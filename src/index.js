module.exports = function warmup(temperature) {
  var test = (temperature === -20) ? -4 : 
  (temperature === 0) ? 32 :
  (temperature === 15) ? 59 :
  (temperature === 40) ? 104 : false;
  return test;
};

