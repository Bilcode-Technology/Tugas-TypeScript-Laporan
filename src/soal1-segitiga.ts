// Soal 1: tinggi segitiga diambil dari digit terakhir NIM.
const nim = "045252492";
const tinggi = Number(nim[nim.length - 1]);

console.log(`NIM: ${nim}`);
console.log(`Tinggi segitiga: ${tinggi}\n`);

for (let baris = 1; baris <= tinggi; baris++) {
  const angka: number[] = [];

  for (let nomor = 1; nomor <= baris; nomor++) {
    angka.push(nomor);
  }

  console.log(angka.join(" "));
}
