function countOfChar(metin, karakter) {
  count = 0;
  metin = metin.toLowerCase();
  const karakterler = metin.split('');
  for (let i = 0; i < karakterler.length; i++) {
    if (karakterler[i] === karakter) {
      count = count + 1;
    }
  }
  return count;
}
