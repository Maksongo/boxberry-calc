// делаем запрос цены и сроков

// d6f33e419c16131e5325cbd84d5d6000 - токен базовый

async function getResponse() {
  let response = await fetch(
    `https://api.boxberry.ru/json.php?token=1a0eca0153d19fd9c07637b5d73e917c&method=DeliveryCosts&weight=${ves}&targetstart=010&target=010&ordersum=0&deliverysum=0&height=${dlina}&width=${visota}&depth=${shirina}`
  );
  let content = await response.json();
  console.log(content);

  pricer.innerHTML = `Стоимость базового тарифа: ${content.price_base} + стоимость доп. услуг :${content.price_service}`;
  pricer2.innerHTML = `Срок доставки: ${content.delivery_period}`;
}

// выводим цену и срок доставки в хтмл

const button = document.querySelector(".but");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const pricer = document.querySelector(".pri");
const pricer2 = document.querySelector(".pri2");

button.addEventListener("click", () => {
  getResponse();
  console.log(inputFirstDell)
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

// инпуты

// первый город

async function getCity() {
  let cities = await fetch(
    `https://api.boxberry.ru/json.php?token=d6f33e419c16131e5325cbd84d5d6000&method=PointsForParcels`
  );
  let city = await cities.json();
  console.log(city[15].City);
}


//-------------------------------------------------
list = ['Екб','Нск','Мск']
let selectDL = document.querySelector('.firstDel');
let option = document.createElement('option');

selectDL.appendChild(option);
console.log(selectDL)

option.value = list[0];

// list.forEach( e => {
//   console.log(e);
// }); 



//    console.log(selectDL);

// var list = ['11','22','33'];


// for (var i in list ){
//   select = document.getElementsByClassName('suggestions');
//   var opt = document.createElement('option');
//   opt.value = i;
//   opt.innerHTML = i;
//   select.add(opt);
// };


// function getOption() {
//   selectElement = document.querySelector('.suggestions');
//   list = selectElement.value;
//   document.querySelector('.output').textContent = list;
// }


//-------------------------------------------------
// getCity()
// let firstDell = document.querySelector(".firstDel")
// let inputFirstDell = '';

// firstDell.addEventListener("input", (e) => {
//   inputFirstDell = e.target.value;
// });


// let firstCityCheck = (e) =>{
//   if(inputFirstDell =
// }
//-------------------------------------------------

// вес посылки
let vesQSelector = document.querySelector('.inputVes')

vesQSelector.addEventListener("input", (e) => {
  ves = e.target.value;
});

// длина посылки
let dlinaQSelector = document.querySelector('.inputDlina')

dlinaQSelector.addEventListener("input", (e) => {
  dlina = e.target.value;
});

// высота посылки
let visotaQSelector = document.querySelector('.inputVisota')

dlinaQSelector.addEventListener("input", (e) => {
  visota = e.target.value;
});

// ширина посылки
let shirinaQSelector = document.querySelector('.inputShirina')

dlinaQSelector.addEventListener("input", (e) => {
  shirina = e.target.value;
});