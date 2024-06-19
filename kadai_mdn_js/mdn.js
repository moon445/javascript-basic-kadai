const formatDate = (date, format) => {

  format = format.replace(/YYYY/, date.getFullYear());
  format = format.replace(/MM/, date.getMonth() + 1);
  format = format.replace(/DD/, date.getDate());

  return format;
}

console.log( formatDate(new Date(), 'YYYY年MM月DD日') );