module.exports = function getZerosCount(number) {
  let count,date;
  count = 0;
  date = number;
  do {
    date = Math.floor(date / 5); 
    count += date;
  } while (Math.floor(date / 5) > 0);
  return count;
}
