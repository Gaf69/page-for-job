var hero = document.querySelector('.hero');
var hdr = document.querySelector('header');

window.addEventListener('scroll', function () {
  var bottom = hero.getBoundingClientRect().bottom;
  hdr.classList.toggle('hidden', bottom < 0);
});

var featImg = document.querySelector('.features article > img');
var featTitle = document.querySelector('.features h2');
var featDesc = document.querySelector('.features .caption p');
var dots = document.querySelectorAll('.features nav span');
var thumbs = document.querySelectorAll('.gallery figure img');

function setSlide(i) {
  var t = thumbs[i];
  featImg.style.opacity = 0;
  setTimeout(function () {
    featImg.src = t.src;
    featTitle.textContent = t.dataset.title;
    featDesc.textContent = t.dataset.desc;
    featImg.style.opacity = 1;
  }, 300);

  thumbs.forEach(function (el) { el.classList.remove('active') });
  t.classList.add('active');

  dots.forEach(function (d, j) {
    d.classList.toggle('active', j === i);
  });
}

thumbs.forEach(function (img, i) {
  img.onclick = function () { setSlide(i) };
});

dots.forEach(function (dot, i) {
  dot.onclick = function () { setSlide(i) };
});

var slideIdx = 0;
setInterval(function () {
  slideIdx = (slideIdx + 1) % thumbs.length;
  setSlide(slideIdx);
}, 3000);

var roles = [
  { title: 'Полицейский', desc: 'Краткое описание зимнего игрового события. Краткое описание зимнего игрового события.' },
  { title: 'Строитель', desc: 'Краткое описание зимнего игрового события. Краткое описание зимнего игрового события.' },
  { title: 'Юрист', desc: 'Краткое описание зимнего игрового события. Краткое описание зимнего игрового события.' },
  { title: 'Бандит', desc: 'Краткое описание зимнего игрового события. Краткое описание зимнего игрового события.' }
];
var roleIdx = 0;
var roleTitle = document.querySelector('.roles aside h3');
var roleDesc = document.querySelector('.roles aside div p');
var arrows = document.querySelectorAll('.roles aside nav button');

function updateRole() {
  roleTitle.textContent = roles[roleIdx].title;
  roleDesc.textContent = roles[roleIdx].desc;
}

arrows[0].onclick = function () {
  roleIdx = (roleIdx - 1 + roles.length) % roles.length;
  updateRole();
};
arrows[1].onclick = function () {
  roleIdx = (roleIdx + 1) % roles.length;
  updateRole();
};