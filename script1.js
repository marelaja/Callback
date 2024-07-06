// ambil semua elemen vidio
// const videos = Array.from(document.querySelectorAll('[data-duration]'));

// // pilih hanya yang 'JAVASCRIPT LANJUTAN'
// let jsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// // Ambil Durasi Masing Masing Video
//     .map(item => item.dataset.duration)

//     // ubah durasi menjadi float, dan ubah menit menjadi detik
//     .map(waktu => {
//         // 10:30 -> [10, 30 ] spilt
//         const parts = waktu.split(':').map(part => parseFloat(part));
//         return parts[0] * 60 + parts[1];
//     })

//     // jumlahkan semua detik
//     .reduce((total,detik)=> total + detik)

//     // ubah formatnya jadi jam menit detik
//     const jam = Math.floor(jsLanjutan / 3600);
//     jsLanjutan = jsLanjutan - jam * 3600;
//     const menit = Math.floor(jsLanjutan / 60);
//     const detik = jsLanjutan - menit * 60;

//     // simpan Di Dom
// const pDurasi = document.querySelector('.total-durasi');
// pDurasi.textContent = `${jam} jam, ${menit} Menit, ${detik} Detik.`;
// const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
// const pJmlVideo = document.querySelector('.jumlah-video');
// pJmlVideo.textContent = `${jmlVideo} Video.`;

//     console.log(jam);



// destructing 

// function penjumlahanPerkalian(a,b){
//     return [ a + b , a * b];
// }
// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

// const [jumlah,kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// function kalkulasi(a,b){
//     return [a + b, a-b, a * b, a/b] 
// }
// jika tidak ada returnnya bagi 
// bagi bisa di isi default
// urutan function dan const harus sesuai karna berasosiasi
// const [tambah,kurang,kali,bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi);

// jika tidak ingin berperngaruh uruan nya bisa menggunakan object
// contoh
// function kalkulasi(a,b){
//     return{
//         tambah: a + b ,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }

// }
// // harusn menggunakan kurung siku
// const { bagi, tambah,kali,kurang} = kalkulasi(2,3);
// console.log(kurang);

// 2. destructuring function arguments
//     const mhs1 = {
//         nama: 'Marel Gultom',
//         umur: 24,
//         email:'marelgultom@gmail.com'
//     }
//     function cetakMhs(nama,umur){
//         return `Hallo, Nama Saya ${nama},saya Berumur${umur} tahun`;
//     }

//    console.log( cetakMhs(mhs1.nama, mhs1.umur));

// 3. destructuring function arguments
// cara kedua 
//     const mhs1 = {
//         nama: 'Marel Gultom',
//         umur: 24,
//         email:'marelgultom@gmail.com',
//         nilai: {
//             tugas: 80,
//             uts:85,
//             uas:75
//         }
//     }
//     function cetakMhs({nama,umur,nilai :{tugas,uts,uas}}){
//         return `Hallo, Nama Saya ${nama},saya Berumur${umur} tahun nilai uas saya adalah${uas}`;
//     }

//    console.log(cetakMhs(mhs1));

// belajar for..of dan for..in
    // const mhs = ['marel','johari','Erik'];

    // biasanya apabila melakukan pengulangan

    // for(let i = 0; < mhs.lenght; i++) {
    //  console.log(mhs[i]);}


    // mhs.forEach(m => console.log(m));

    // for ( const m of mhs ){
    //     console.log(m);
    // }

    // string (forEach tidak bisa digunakan dalam string)(forEach Khusus digunaka untuk Arrray)
    // strings
    // const nama = 'Marel';
    // for(const n of nama) {
    //     console.log(n);
    // }

    // const mhs = ['marel','johari','Erik'];
    // mhs.forEach((m,i) =>{
    //     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
    // });
    // perbedaan penggunaan forEach dan for of dalam array
    // for(const m of mhs.entries() ){
    //     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
    // }

    // Penggunaan Noodlist
    // const liNama = document.querySelectorAll('.nama');
    // liNama.forEach(n => console.log(n.textContent));
    // for..of bisa digunakan untuk noodlist
    // for(n of liNama ){
    //     console.log(n.innerHTML);
    // }

    // penggunaan arguments
    // function jumlahkanAngka(){
    //     let jumlah = 0;
    //     for (a of argument){
    //         jumlah += a;
    //     }
    //     return jumlah;
    // }
    // console.log(jumlahkanAngka(1,2,3,4,5));

    // penggunaan for..in 
    // const mhs = {
    //     nama: 'Marel Gultom',
    //     umur: 24,
    //     email: 'marelgu@gmail.com',
    // }

    // for (m in mhs){
    //     console.log(mhs[m]);
    // }

    // Belajar Penggunaan Spred Opretor
    // menggbunkan 2 array 
    // const mhs = ['Marel Gultom','Dody','Erik'];
    // const dosen = ['Ade','Hendra', 'Wanda '];
    // const orang = [...mhs, 'Aji',...dosen];
    // console.log(orang);

    // meng-copy array 
    // const mhs = ['Marel Gultom', 'Johari Sinaga','Erik'];
    // const mhs1 = mhs;
    // const mhs1 = [...mhs1];
    // mhs1[0]= 'Rika';
    // console.log(mhs);
    

    // belajar spred opratopr
    // memecah iterables menjadi single element
    // const mhs = ['Marel Gultom', 'Johari Sinaga'];
    // meng-copy array
    // const mhs =['marel','johari','sinaga'];
    
    // const mhs1 = [...mhs];
    // mhs1[0] = 'agus';
    // console.log(mhs1);

    // const liMhs = document.querySelectorAll('li');
    // const mhs = [];
    // for (let i = 0; i< liMhs.length; i++){
    //     mhs.push(liMhs[i].textContent);
    // }
    // console.log(mhs);
    // const mhs = [...liMhs].map(m => m.textContent);
    // console.log(mhs);

    // const nama = document.querySelector('.nama');
    // const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
    // nama.innerHTML = huruf;

    // Rest Parameter
    // function myFunc(){
    //     // return `a = ${a}, b = = ${b}, myArgs = ${myArgs}`;
    //     // return myArgs;
    //     // return Array.from(arguments)
    //     // return [...arguments];
    // }
    // console.log(myFunc(1,2,3,4,5));

    // penjumlahan menggunakan for of
    // function jumlahkan(){
    //     let total = 0;
    //     for (const a of angka){
    //         total += a;

    //     }
    //     // return total
    //     return angka.reduce((a,b)=> a + b );
    // }
    // console.log(jumlahkan(1,2,3,4,5));

    // // array destructuring
    // const kelompok1 = ['marel ','johari','elisabet','ferdi','thania'];
    // const [ketua,wakil,...anggota] = kelompok1;
    // console.log(ketua);

    // object destructuring
    // const team = {
    //     pm: 'Marel Gultom',
    //     frondend1:'Johari',
    //     frondend2: 'Agus',
    //     backend: 'thania',
    //     ux:'hendar',
    //     devOps:'agus'
    // }
    // const {pm,...myTeam} = team;
    // console.log(pm);
    
    // filtering
    // function filerBy(type, ...values){
    //     return values.filter(v => typeof v === type );
    // }
    // console.log(filteringBy('number','Marel',false,10,true,'Johari'));

    // Belajar Callback
    // function halo(nama){
    //     alert(`Hallo, ${nama}`);

    // }
    // function tampilkanPesan(callback){
    //     const nama  = prompt ('Masukan Nama : ');
    //     callback(nama);
    // }
    // tampilkanPesan(halo);
    // syncronus Callback
    // function tampilkanPesan(callback){
    //         const nama  = prompt ('Masukan Nama : ');
    //         callback(nama);
    //     }
    //     tampilkanPesan(nama  => alert(`Hallo,${nama}`));
    
    // asynchronous callback
    // Disebut Penggunaan Vanila Javascript
    // function getDataMahasiswa(url,success,error){
    //     let xhr = new XMLHttpRequest();

    //     xhr.onreadystatechange = function(){
    //         if(xhr.readyState === 4){
    //             if(xhr.status === 200){
    //                 success(xhr.response);
    //             }else {
    //                 error();
    //             }
    //         }
    //     }

    //     xhr.open('get',url);
    //     xhr.send();
    // }
    // console.log('mulai');
    // getDataMahasiswa('data/mahasiswa.json', results =>{
    //     const mhs = JSON.parse(results);
    //     mhs.forEach(m => console.log(m.nama));
    // }, () =>{

    // });
    // console.log('selesai');
    
    // // Penggunaan JQuery
    // console.log('Mulai');
    // $.ajax({
    //     url: 'data/mahasiswa.json',
    //     success:(mhs) => {
    //         mhs.forEach(m => console.log(m.nama)); 
    //     },
    //     error:(e) => {
    //         console.log(e.responseText);
    //     }
    // });
    // console.log('Selesai');

    // Belajar Promise

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
        success: movies => console.log(movies)
    })



    

