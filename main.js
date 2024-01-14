// Task-01
// HTML-kod verilmişdir. Siyahının ilk elementini konsola çıxarın.
// const listItem = document.querySelector(".menu li:first-child");
// console.log(listItem);


// Task-02
// HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
// - Başlığı silin;
// - Siyahının sonuna mətn ilə yeni bir bölmə «TITAN RTX» əlavə edin .

// başıq silinmesi
// const başlıq = document.querySelector("h1");
// başlıq.remove("h1")

// Siyahının sonuna mətn ilə yeni bir bölmə «TITAN RTX» əlavə edin 
// let menu = document.querySelector(".menu");
// menu.innerHTML += "<li>TITAN RTX</li>"
// VE YA 
// menu.innerHTML += "<p>TITAN RTX</p>"

// --------BAŞQA BİR YOL İLE------------ 
//  let menu = document.querySelector(".menu");
//  let newListElement = document.createElement("li");
//  newListElement.innerText = "TITAN RTX";
//  menu.append(newListElement);

// Task-03
// HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
// 1)- başlıq mətnini «GeForce 20 Series» -a;
// 2)- fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin.

// 1)- başlıq mətnini «GeForce 20 Series» -a çevir;

// let menu = document.querySelector("h1");
// menu.innerText = "GeForce 20 Series";

// // 2)- fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin.
//  let liElement3 = document.querySelector(".primary:nth-child(3)") 
//  let liElement6 = document.querySelector(".primary:nth-child(6)") 
//  liElement3.style.color = "#ebebeb";
//  liElement6.style.color = "#ebebeb";

// Task-04
// HTML-kodu verilib. Siyahının primary klasına sahib olan bütün elementlərini konsola çıxarın.
// forEach methodu lazımdır
//  let liElem = document.querySelector(".primary") 
//  console.log(liElem.innerHTML);


