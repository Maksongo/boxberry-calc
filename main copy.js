// const priceCheck = document.querySelector(".but");

// priceCheck.addEventListener("click", () => {
//   boxberry.open(callback_function);
// });

// function callback_function(result) {
//   document.getElementById("city").innerHTML = result.name;
//   document.getElementById("js-pricedelivery").innerHTML = result.price;
//   document.getElementById("code_pvz").innerHTML = result.id;

//   result.name = encodeURIComponent(result.name); // Что бы избежать проблемы с кириллическими символами, на страницах отличными от UTF8, вы можете использовать функцию encodeURIComponent()

//   document.getElementById("name").innerHTML = result.name;
//   document.getElementById("address").innerHTML = result.address;
//   document.getElementById("workschedule").innerHTML = result.workschedule;
//   document.getElementById("phone").innerHTML = result.phone;
//   document.getElementById("period").innerHTML = result.period;
//   if (result.prepaid == "1") {
//     alert("Отделение работает только по предоплате!");
//   }
// }

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
  console.log(city[12].City);
}

getCity()
let firstDell = document.querySelector(".firstDel")
let inputFirstDell = '';

firstDell.addEventListener("input", (e) => {
  inputFirstDell = e.target.value;
});


// let firstCityCheck = (e) =>{
//   if(inputFirstDell =
// }


// вес посылки
let vesQSelector = document.querySelector('.inputVes')
let ves = '';

vesQSelector.addEventListener("input", (e) => {
  ves = e.target.value;
});

// длина посылки
let dlinaQSelector = document.querySelector('.inputDlina')
let dlina = '';

dlinaQSelector.addEventListener("input", (e) => {
  dlina = e.target.value;
});

// высота посылки
let visotaQSelector = document.querySelector('.inputVisota')
let visota = '';

dlinaQSelector.addEventListener("input", (e) => {
  visota = e.target.value;
});

// ширина посылки
let shirinaQSelector = document.querySelector('.inputShirina')
let shirina = '';

dlinaQSelector.addEventListener("input", (e) => {
  shirina = e.target.value;
});