//add and removing display style's for btn megamenue
let ghn = document.getElementById("GetHelpNow");
ghn.addEventListener("click", function () {
  let mnl = document.getElementById("megamenueLanguage");
  mnl.classList.remove("felx");

  let mnat = document.getElementById("megamenueAbout");
  mnat.classList.remove("felx");
  let mnl3 = document.getElementById("megamenueLanguage33");
  mnl3.classList.remove("felx");
  let loc1 = document.getElementById("location");
  loc1.classList.remove("felx");

  let mnghn = document.getElementById("megamenueHelp");
  mnghn.classList.toggle("felx");
});

let at = document.getElementById("AboutTiptapp");
at.addEventListener("click", function () {
  let mnl = document.getElementById("megamenueLanguage");
  mnl.classList.remove("felx");
  let mnl3 = document.getElementById("megamenueLanguage33");
  mnl3.classList.remove("felx");
  let loc1 = document.getElementById("location");
  loc1.classList.remove("felx");
  let mnghn = document.getElementById("megamenueHelp");

  mnghn.classList.remove("felx");

  let mnat = document.getElementById("megamenueAbout");
  mnat.classList.toggle("felx");
});
//.......................................................
let lang = document.getElementById("Languages");
lang.addEventListener("click", function () {
  let mnghn = document.getElementById("megamenueHelp");

  mnghn.classList.remove("felx");

  let mnat = document.getElementById("megamenueAbout");
  mnat.classList.remove("felx");

  let mnat2 = document.getElementById("megamenueAbout22");
  mnat2.classList.remove("felx");
  let mnl22 = document.getElementById("megamenueLanguage22");
  mnl22.classList.remove("felx");
  let mnghn2 = document.getElementById("megamenueHelp22");
  mnghn2.classList.remove("felx");
  let loc1 = document.getElementById("location");
  loc1.classList.remove("felx");
  let mnl3 = document.getElementById("megamenueLanguage33");
  mnl3.classList.remove("felx");

  let mnl = document.getElementById("megamenueLanguage");
  mnl.classList.toggle("felx");
});
// ..............................................

//Burger menue btn

let burgerbtn = document.getElementById("Burgerbtn");
burgerbtn.addEventListener("click", function () {
  // burger menue window = bmw :)
  let bmw = document.getElementById("BurgerMenue");
  bmw.classList.toggle("hidden");
  bmw.classList.toggle("felx");
});
// ..............................................

//in burger items
let lang2 = document.getElementById("Languages2");
lang2.addEventListener("click", function () {
  let mnl = document.getElementById("megamenueLanguage");
  mnl.classList.remove("felx");
  let mnghn2 = document.getElementById("megamenueHelp22");
  mnghn2.classList.remove("felx");
  let mnat2 = document.getElementById("megamenueAbout22");
  mnat2.classList.remove("felx");
  let mnl3 = document.getElementById("megamenueLanguage33");
  mnl3.classList.remove("felx");
  let loc1 = document.getElementById("location");
  loc1.classList.remove("felx");
  let mnl22 = document.getElementById("megamenueLanguage22");
  mnl22.classList.toggle("felx");
});

let at2 = document.getElementById("AboutTiptapp2");
at2.addEventListener("click", function () {
  let mnl = document.getElementById("megamenueLanguage");
  mnl.classList.remove("felx");
  let mnl22 = document.getElementById("megamenueLanguage22");
  mnl22.classList.remove("felx");
  let mnghn2 = document.getElementById("megamenueHelp22");
  mnghn2.classList.remove("felx");
  let mnl3 = document.getElementById("megamenueLanguage33");
  mnl3.classList.remove("felx");
  let loc1 = document.getElementById("location");
  loc1.classList.remove("felx");
  let mnat2 = document.getElementById("megamenueAbout22");
  mnat2.classList.toggle("felx");
});

let ghn2 = document.getElementById("GetHelpNow2");
ghn2.addEventListener("click", function () {
  let mnl = document.getElementById("megamenueLanguage");
  mnl.classList.remove("felx");
  let mnat2 = document.getElementById("megamenueAbout22");
  mnat2.classList.remove("felx");
  let mnl22 = document.getElementById("megamenueLanguage22");
  mnl22.classList.remove("felx");
  let mnl3 = document.getElementById("megamenueLanguage33");
  mnl3.classList.remove("felx");
  let loc1 = document.getElementById("location");
  loc1.classList.remove("felx");
  let mnghn2 = document.getElementById("megamenueHelp22");
  mnghn2.classList.toggle("felx");
});

// ..............................................
//theme

let isDarkTheme = false;

let themebtn = document.getElementById("themebtn");
themebtn.addEventListener("click", () => {
  isDarkTheme = !isDarkTheme;

  if (isDarkTheme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

let themebt2 = document.getElementById("themebtn2");
themebtn2.addEventListener("click", () => {
  isDarkTheme = !isDarkTheme;

  if (isDarkTheme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
// ..............................................footer 👇
let lang3 = document.getElementById("Languages33");
lang3.addEventListener("click", function () {
  let mnghn = document.getElementById("megamenueHelp");

  mnghn.classList.remove("felx");

  let mnat = document.getElementById("megamenueAbout");
  mnat.classList.remove("felx");

  let mnat2 = document.getElementById("megamenueAbout22");
  mnat2.classList.remove("felx");
  let mnl22 = document.getElementById("megamenueLanguage22");
  mnl22.classList.remove("felx");
  let mnghn2 = document.getElementById("megamenueHelp22");
  mnghn2.classList.remove("felx");
  let mnl = document.getElementById("megamenueLanguage");
  mnl.classList.remove("felx");
  let loc1 = document.getElementById("location");
  loc1.classList.remove("felx");

  let mnl3 = document.getElementById("megamenueLanguage33");
  mnl3.classList.toggle("felx");
});

let loc = document.getElementById("locationbtn");
loc.addEventListener("click", function () {
  let mnghn = document.getElementById("megamenueHelp");

  mnghn.classList.remove("felx");

  let mnat = document.getElementById("megamenueAbout");
  mnat.classList.remove("felx");

  let mnat2 = document.getElementById("megamenueAbout22");
  mnat2.classList.remove("felx");
  let mnl22 = document.getElementById("megamenueLanguage22");
  mnl22.classList.remove("felx");
  let mnghn2 = document.getElementById("megamenueHelp22");
  mnghn2.classList.remove("felx");
  let mnl = document.getElementById("megamenueLanguage");
  mnl.classList.remove("felx");
  let mnl3 = document.getElementById("megamenueLanguage33");
  mnl3.classList.remove("felx");

  let loc1 = document.getElementById("location");
  loc1.classList.toggle("felx");
});
