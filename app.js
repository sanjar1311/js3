const DATA = [
  {
    id: 1,
    text: "Biz kim-mulki Turon, amiri Turkistonmiz!Biz kim- milatlarning eng ulugi, Turkning bosh bo'g'inimiz!",
    author: "Amir Temur"
  },
  {
    id: 2,
    text: "Orazin yopqoch ko‘zumdin sochilur har lahza yosh, O‘ylakim, paydo bo‘lur yulduz, nihon bo‘lg‘och quyosh",
    author: "Alisher Navoiy"
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit officia minima, eos aspernatur reiciendis molestiae.",
    author: "Garry Poter"
  },
  {
    id: 4,
    text: "Ўзни доно билган уч-тўртта нодон Eшак табиатин қилур намоён. Булар суҳбатида сен ҳам эшак бўл, Бўлмаса «кофир» деб қилишар эълон.",
    author: "Umar Xayyom"
  }
]


const outpud = document.querySelector(".quote");
const btn = document.querySelector(".btn");
const authorOutpud = document.querySelector(".author");

btn.addEventListener("click", ()=> {
  let quoteIndex = Math.floor(Math.random() * DATA.length)
  outpud.textContent = DATA[quoteIndex].text;
  authorOutpud.textContent = DATA[quoteIndex].author;
})