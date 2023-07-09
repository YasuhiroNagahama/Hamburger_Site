class Review {
  constructor(face, text) {
    this.face = face;
    this.text = text;
  }
}

const reviewerInfo = [
  new Review(
    '<i class="fa-solid fa-face-laugh-wink l_section-review_face">',
    "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。"
  ),
  new Review(
    '<i class="fa-solid fa-face-laugh-squint l_section-review_face"></i>',
    "親譲りの無鉄砲で小供の時から損ばかりしている。"
  ),
  new Review(
    '<i class="fa-solid fa-face-laugh-beam l_section-review_face"></i>',
    "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。"
  ),
];

function addNewInfo(i) {
  const reviewer = document.getElementById("reviewer");
  const reviewText = document.getElementById("review");

  const info = reviewerInfo[i];

  reviewer.innerHTML = info.face;
  reviewText.innerHTML = info.text;
}

function reviewBtnEvent() {
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");

  let i = 0;

  leftBtn.addEventListener("click", () => {
    i = i <= 0 ? reviewerInfo.length - 1 : i - 1;

    addNewInfo(i);
  });

  rightBtn.addEventListener("click", () => {
    i = i >= reviewerInfo.length - 1 ? 0 : i + 1;

    addNewInfo(i);
  });
}

reviewBtnEvent();
