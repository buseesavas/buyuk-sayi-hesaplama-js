let birinciSayi = Number(prompt('Birinci sayıyı giriniz.'));
let ikinciSayi = Number(prompt('İkinci sayıyı giriniz.'));
let ucuncuSayi = Number(prompt('Üçüncü sayıyı giriniz.'));

if((birinciSayi > ikinciSayi) && (birinciSayi > ucuncuSayi)) {
  alert('En büyük sayı: ' + birinciSayi);
}else if((ikinciSayi > birinciSayi) && (ikinciSayi > ucuncuSayi)) {
  alert('En büyük sayı: ' + ikinciSayi);
}else {
  alert('En büyük sayı: ' + ucuncuSayi);
}