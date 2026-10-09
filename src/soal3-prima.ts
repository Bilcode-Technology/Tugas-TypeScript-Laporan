// Soal 3: batas pencarian adalah 2 digit terakhir NIM + 10.
const nim = "045252492";
const duaDigitTerakhir = Number(nim.slice(-2));
const batasAkhir = duaDigitTerakhir + 10;
const bilanganPrima: number[] = [];

for (let angka = 2; angka <= batasAkhir; angka++) {
  let prima = true;

  for (let pembagi = 2; pembagi <= Math.sqrt(angka); pembagi++) {
    if (angka % pembagi === 0) {
      prima = false;
      break;
    }
  }

  if (prima) {
    bilanganPrima.push(angka);
  }
}

console.log(`NIM: ${nim}`);
console.log(`Batas akhir: ${duaDigitTerakhir} + 10 = ${batasAkhir}`);
console.log(`Bilangan prima dari 1 sampai ${batasAkhir}:`);
console.log(bilanganPrima.join(", "));
