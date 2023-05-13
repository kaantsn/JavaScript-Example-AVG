// Bir dizi oluştur
let numbers = [1, 2, 3, 4, 5];

// Dizideki sayıların toplamını hesapla
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Ortalamayı hesapla ve konsola yazdır
let average = sum / numbers.length;
console.log("Sayıların ortalaması: " + average);
