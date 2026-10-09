// Soal 2: 2 digit terakhir menjadi angka awal, digit ke-3 dari belakang + 1 menjadi beda.
const nim = "045252492";
const mulai = Number(nim.slice(-2));
const digitKetigaDariBelakang = Number(nim[nim.length - 3]);
const beda = digitKetigaDariBelakang + 1;
const jumlahAngka = 10;
const deret: number[] = [];

for (let indeks = 0; indeks < jumlahAngka; indeks++) {
  deret.push(mulai + indeks * beda);
}

console.log(`NIM: ${nim}`);
console.log(`Angka awal: ${mulai}`);
console.log(`Beda (digit ke-3 dari belakang + 1): ${beda}`);
console.log(`10 angka pertama: ${deret.join(", ")}`);
