console.log("©2025 MLib Software.", "All right reserved. Plases vist offical website of MLib project in this link : http://mlib.ct.ws/cp","MLib is A JS Library to run XpLevel Programing Languge in HTMl5","version 0.1")
console.warn("get colection from xple lib...")
console.warn("get tge code in mlib element...")
console.warn("run in mlib")
class Mlib_global_indisplay {
  constructor() {
    this.txt = '';
  }
  show(txt){
    console.log(txt)
  }
}

class Mlib_global_color {
  constructor() {
    this.txt = '';
    this.con = '';
    this.cot = '';
  }
  content(txt, con, cot){
    if (cot == "yellow") {
      console.log("\x1B[33m" + con + "\x1B[0m"); // Use \x1B for ESC and reset color after the text
    } else {
      if (cot == "red") {
        console.log("\x1B[31m" + con + "\x1B[0m"); // Use \x1B for ESC and reset color after the text
      }
    }
  }
}
class mlib {
  constructor(){
    this.txt = '';
    this.cvc = '';
  }
  write(txt) {
    document.write(txt)
  }
  js(cvc) {
    eval(cvc)
  }
}
function ma_in(cbc) {
  eval(cbc)
}
const InDisplay = new Mlib_global_indisplay()

const color = new Mlib_global_color()
const mlibx = new mlib();

let mlib_element_ru = document.querySelector('mlib').textContent;

let mlib_element_ru_e = mlib_element_ru.replace(/@/g,"")
let mlib_element_ru_b = mlib_element_ru_e.replace(/\*\s*st\s*/g, "'");
let mlib_element_ru_c = mlib_element_ru_b.replace(/\s*rt\*\s*/g, "'");
let mlib_element_ru_m = mlib_element_ru_c.replace(/ifit_mlib/g, "if (")
let mlib_element_ru_g = mlib_element_ru_m.replace(/ \?/g,")")
let mlib_element_ru_t = mlib_element_ru_g.replace(/>onmake/g, " {")
let mlib_element_ru_j = mlib_element_ru_t.replace(/>onend/g,"}")
// خروجی: ma_in('InDisplay.show("hi")')
console.log(mlib_element_ru_j)
try {
  eval(mlib_element_ru_j)
} catch (error) {
  
  console.error("xple-mlib code error :","An error occurred:",error)
}

