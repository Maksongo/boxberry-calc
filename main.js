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

async function getResponse() {
  let response = await fetch(
    "https://api.boxberry.ru/json.php?token=d6f33e419c16131e5325cbd84d5d6000&method=DeliveryCosts&weight=500&targetstart=010&target=010&ordersum=0&deliverysum=0&height=120&width=80&depth=50&paysum=100"
  );
  let content = await response.json();
  console.log(content);

  let list = document.querySelector(".posts");

  let key;

  list.innerHTML += `
<p>${content.price}</p>
<p>${delivery_period}</p>
`;
}

getResponse();
