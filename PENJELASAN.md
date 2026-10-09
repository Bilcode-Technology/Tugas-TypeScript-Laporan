# Panduan Penjelasan Video Praktikum

**Nama:** M. Reyhan Alfiz Zidan  
**NIM:** 045252492

Dokumen ini bisa digunakan sebagai panduan saat menjelaskan program di video. Sampaikan dengan santai dan tunjukkan file yang sedang dibahas di layar.

## Pembukaan video

"Assalamualaikum warahmatullahi wabarakatuh. Perkenalkan, nama saya M. Reyhan Alfiz Zidan, dengan NIM 045252492. Di video ini saya akan menjelaskan tiga program TypeScript, yaitu pola segitiga, deret aritmatika, dan bilangan prima yang dihitung berdasarkan NIM saya."

## Soal 1 — Segitiga angka

Buka `src/soal1-segitiga.ts`.

"Di bagian awal, NIM saya disimpan sebagai teks. Angka nol di depan tetap ditulis supaya NIM tidak berubah. Program mengambil digit terakhir NIM, yaitu 2. Angka 2 ini menjadi tinggi segitiga."

"Perulangan pertama menentukan baris yang sedang dibuat. Perulangan di dalamnya menambahkan angka dari 1 sampai nomor baris. Setelah itu, angka-angka di baris tersebut dicetak dengan jarak spasi."

Jalankan `npm run soal1`, lalu tunjukkan hasil:

```text
1
1 2
```

"Hasilnya ada dua baris karena digit terakhir NIM saya adalah 2."

## Soal 2 — Deret aritmatika

Buka `src/soal2-deret.ts`.

"Pada soal kedua, dua digit terakhir NIM saya adalah 92. Angka ini menjadi angka pertama deret. Digit ketiga dari belakang adalah 4. Sesuai aturan soal, digit itu ditambah 1, jadi jarak antarangka atau bedanya adalah 5."

"Program mengulang proses sebanyak 10 kali. Setiap angka berikutnya didapat dengan menambahkan 5. Semua angka kemudian ditampilkan dalam satu baris."

Jalankan `npm run soal2`, lalu tunjukkan hasil:

```text
92, 97, 102, 107, 112, 117, 122, 127, 132, 137
```

## Soal 3 — Bilangan prima

Buka `src/soal3-prima.ts`.

"Pada soal ketiga, dua digit terakhir NIM saya yaitu 92 ditambah 10. Jadi batas pencarian bilangan prima adalah 102."

"Program memeriksa angka satu per satu, mulai dari 2 sampai 102. Angka 1 tidak ikut karena bukan bilangan prima. Setiap angka dicoba dibagi dengan angka lain. Kalau bisa dibagi habis, angka itu bukan prima. Kalau tidak ada pembagi yang cocok, angka itu ditampilkan sebagai bilangan prima."

Jalankan `npm run soal3`, lalu tunjukkan hasil:

```text
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101
```

## Penjelasan berkas project

Tunjukkan berkas di folder utama project.

"`package.json` berisi informasi project dan perintah untuk menjalankan setiap soal. Karena itu, saya bisa mengetik `npm run soal1`, `npm run soal2`, atau `npm run soal3`."

"`tsconfig.json` berisi pengaturan untuk TypeScript. Nama yang benar memakai `.json`, bukan `.js`."

"`package-lock.json` dibuat oleh npm saat `npm install` dijalankan. Isinya mencatat versi paket yang dipasang supaya pemasangan paket di komputer lain tetap sama. Nama yang benar juga memakai `.json`, bukan `.js`."

"Folder `node_modules` berisi paket yang dibutuhkan program. Folder ini dibuat saat menjalankan `npm install`."

## Penutup video

"Demikian penjelasan praktikum TypeScript saya. Dari praktikum ini saya belajar menggunakan perulangan untuk membuat pola segitiga, deret aritmatika, dan mencari bilangan prima. Terima kasih. Wassalamualaikum warahmatullahi wabarakatuh."

## Urutan praktik saat merekam

1. Perkenalkan nama dan NIM.
2. Buka folder project di editor kode.
3. Tunjukkan dan jelaskan file Soal 1, lalu jalankan `npm run soal1`.
4. Tunjukkan dan jelaskan file Soal 2, lalu jalankan `npm run soal2`.
5. Tunjukkan dan jelaskan file Soal 3, lalu jalankan `npm run soal3`.
6. Jelaskan singkat fungsi berkas `package.json`, `tsconfig.json`, dan `package-lock.json`.
7. Sampaikan kesimpulan dan penutup.
