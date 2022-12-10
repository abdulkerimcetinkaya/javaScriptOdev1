let isim = prompt("Lütfen isminizi giriniz:"); // kullanıcıdan isim alındı
let myName = document.querySelector("#myName"); // ismi id'si myName olan dive atadık
myName.innerHTML = isim; // divi ekrana yazdırdık

function updateClock() {
  let date = new Date(); // tarih
  let hours = date.getHours(); // saat
  let minutes = date.getMinutes(); // dakika
  let seconds = date.getSeconds(); // saniye
  let dayOfWeek = date.getDay(); // haftanın günü

  let dayOfWeekString;

  if (dayOfWeek === 0) {
    dayOfWeekString = "Pazar";
  } else if (dayOfWeek === 1) {
    dayOfWeekString = "Pazartesi";
  } else if (dayOfWeek === 2) {
    dayOfWeekString = "Salı";
  } else if (dayOfWeek === 3) {
    dayOfWeekString = "Çarşamba";
  } else if (dayOfWeek === 4) {
    dayOfWeekString = "Perşembe";
  } else if (dayOfWeek === 5) {
    dayOfWeekString = "Cuma";
  } else if (dayOfWeek === 6) {
    dayOfWeekString = "Cumartesi";
  }

  let myClock = document.querySelector("#myClock");
  myClock.innerHTML = hours + ":" + minutes + ":" + seconds + "-" + dayOfWeekString;
}
setInterval(updateClock, 1000);

