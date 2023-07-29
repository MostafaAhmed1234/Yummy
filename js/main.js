$(document).ready(function () {
  $(".loading-container").fadeOut(1000, () => {
    $(".loading-container .spinner").fadeOut(1000, () => {
      $("body").css("overflow-y", "auto");
    });
  });
});

/*-----links -----*/
$("ul .nav-go").click(function (e) {
  let hrefLink = $(e.target).text();

  if (hrefLink == "Categories") {
    searchCon.innerHTML = "";
    getDefultCategories();
  } else if (hrefLink == "Area") {
    searchCon.innerHTML = "";
    getDefultAreas();
  } else if ((hrefLink = "Ingredients")) {
    searchCon.innerHTML = "";
    getDefultIngredients();
  }
});

/*--------contact------*/
let nameValid;
let emailValid;
let phoneValid;
let ageValid;
let passwordValid;
let rePasswordValid;
/*---*/
let nameAl;
let emailAl;
let phoneAl;
let ageAl;
let passwordAl;
let rePasswordAl;
/*--*/
let button;
document.querySelector(".navContact").addEventListener("click", function () {
  document.getElementById(
    "demo"
  ).innerHTML = `<h1 class="text-light text-center my-2 fw-bolder ">Contact Us...</h1>
  <div class="row gy-4 text-center">
    <div class="col-md-6">
      <div class="form-group">
        <input class="form-control" onkeyup="validateUserName()" id="name" placeholder="Enter Your Name">
        <div class="alert mt-1 alert-danger d-none" id="namealert">
          Special Characters and Numbers not allowed & not less than 5 characters
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="form-group">
        <input onkeyup="validateEmail()" class="form-control" id="email" placeholder="Enter Email">
        <div class="alert mt-1 alert-danger d-none" id="emailalert">
          Enter valid email. *Ex: email@example.com
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="form-group">
        <input onkeyup="validatePhone()" class="form-control" id="phone" placeholder="Enter phone">
        <div class="alert mt-1 alert-danger d-none" id="phonealert">
          Enter valid Phone Number. *Ex: 01********* or 00201*********
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="form-group">
        <input onkeyup="validateAge()" class="form-control" id="age" placeholder="Enter Age">
        <div class="alert mt-1 alert-danger  d-none" id="agealert">
          Enter valid Age greater than 18
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="form-group">
        <input onkeyup="validatePassword()" class="form-control" type="password" id="password" placeholder="Enter Password">
        <div class="alert mt-1 alert-danger  d-none" id="passwordalert" role="alert">
          Enter valid password *Minimum eight characters, at least one letter, one number and one special character:*
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="form-group">
        <input onkeyup="validateRePassword()" class="form-control" type="password" id="rePassword" placeholder="Enter RePassword">
        <div class="alert mt-1 alert-danger  d-none" id="repasswordalert" role="alert">
          Enter valid Repassword
        </div>
      </div>
    </div>
    <button type="submit" disabled="" onclick="submit()" id="submitBtn" class="btn btn-danger mt-4 col-md-2 col-sm-2 col-xs-1 mx-auto">Submit</button>
  </div>`;

  searchCon.innerHTML = "";

  nameValid = document.getElementById("name");
  emailValid = document.getElementById("email");
  phoneValid = document.getElementById("phone");
  ageValid = document.getElementById("age");
  passwordValid = document.getElementById("password");
  rePasswordValid = document.getElementById("rePassword");
  /*---*/
  nameAl = document.getElementById("namealert");
  emailAl = document.getElementById("emailalert");
  phoneAl = document.getElementById("phonealert");
  ageAl = document.getElementById("agealert");
  passwordAl = document.getElementById("passwordalert");
  rePasswordAl = document.getElementById("repasswordalert");
  /*--*/
  button = document.getElementById("submitBtn");
  /*--*/
});

function validateUserName() {
  let regx = /^[A-Z][a-z]{4,}$/i;

  if (regx.test(nameValid.value) == true) {
    if (nameValid.classList.contains("is-invalid")) {
      nameValid.classList.replace("is-invalid", "is-valid");
      nameAl.classList.replace("d-block", "d-none");
      checkButton();
    }
    return true;
  } else {
    nameValid.classList.add("is-invalid");
    nameAl.classList.replace("d-none", "d-block");
    checkButton();
    return false;
  }
}

function validateEmail() {
  let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/i;

  if (regx.test(emailValid.value) == true) {
    if (emailValid.classList.contains("is-invalid")) {
      emailValid.classList.replace("is-invalid", "is-valid");
      emailAl.classList.replace("d-block", "d-none");
      checkButton();
    }
    return true;
  } else {
    emailValid.classList.add("is-invalid");
    emailAl.classList.replace("d-none", "d-block");
    checkButton();
    return false;
  }
}

function validatePhone() {
  let regx = /^(002)?01[0125][0-9]{8}$/;

  if (regx.test(phoneValid.value) == true) {
    if (phoneValid.classList.contains("is-invalid")) {
      phoneValid.classList.replace("is-invalid", "is-valid");
      phoneAl.classList.replace("d-block", "d-none");
      checkButton();
    }
    return true;
  } else {
    phoneValid.classList.add("is-invalid");
    phoneAl.classList.replace("d-none", "d-block");
    checkButton();
    return false;
  }
}

function validateAge() {
  let regx = /^(1[89]|[2-9][0-9])$/;

  if (regx.test(ageValid.value) == true) {
    if (ageValid.classList.contains("is-invalid")) {
      ageValid.classList.replace("is-invalid", "is-valid");
      ageAl.classList.replace("d-block", "d-none");
      checkButton();
    }
    return true;
  } else {
    ageValid.classList.add("is-invalid");
    ageAl.classList.replace("d-none", "d-block");
    checkButton();
    return false;
  }
}

function validatePassword() {
  let regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (regx.test(passwordValid.value) == true) {
    if (passwordValid.classList.contains("is-invalid")) {
      passwordValid.classList.replace("is-invalid", "is-valid");
      passwordAl.classList.replace("d-block", "d-none");
      checkButton();
    }
    return true;
  } else {
    passwordValid.classList.add("is-invalid");
    passwordAl.classList.replace("d-none", "d-block");
    checkButton();
    return false;
  }
}

function validateRePassword() {
  if (passwordValid.value == rePasswordValid.value) {
    if (rePasswordValid.classList.contains("is-invalid")) {
      rePasswordValid.classList.replace("is-invalid", "is-valid");
      rePasswordAl.classList.replace("d-block", "d-none");
      checkButton();
    }
    return true;
  } else {
    rePasswordValid.classList.add("is-invalid");
    rePasswordAl.classList.replace("d-none", "d-block");
    checkButton();
    return false;
  }
}

function checkButton() {
  if (
    validateUserName() &&
    validateEmail() &&
    validatePhone() &&
    validateAge() &&
    validatePassword() &&
    validateRePassword()
  ) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled");
  }
}

function submit() {
  nameValid.value = "";
  emailValid.value = "";
  phoneValid.value = "";
  ageValid.value = "";
  passwordValid.value = "";
  rePasswordValid.value = "";
}

/*----search----*/
let searchCon = document.getElementById("search-container");

document.querySelector(".navSearch").addEventListener("click", function () {
  searchCon.innerHTML = `<div class="container w-100">
  <div class="row py-3">
    <div class="col-md-6">
      <input id="searchInput" oninput="search(this.value)" class="form-control mb-2 " placeholder="Search By Name">
    </div>
    <div class="col-md-6">
      <input class="form-control" oninput="getByLetter(this.value)" type="text" maxlength="1" id="letter" placeholder="search By First Letter...">
    </div>

  </div>
</div>`;

  document.getElementById("demo").innerHTML = "";
});

/*------------------search functions------------*/
async function search(mealName) {
  //$(".loading-container").fadeIn(100);
  let meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  );
  meals = await meals.json();
  displayData(meals.meals);
  //$(".loading-container").fadeOut(400);
}

async function getByLetter(letter) {
  // $(".loading-container").fadeIn(100);
  let meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  meals = await meals.json();
  displayData(meals.meals);
  //$(".loading-container").fadeOut(100);
}

/*-----------navbar--------*/

let optionW = $("#colorBox").innerWidth();
//console.log(optionW);
$("#options").css("left", `-${optionW}px`);

$("#icon_move").click(function () {
  $("#options").animate({ left: `-${optionW}px` }, 300);

  $("#options .item1").animate(
    {
      opacity: "1",
      paddingTop: "25px",
    },
    500,
    () =>
      $("#options .item2").animate(
        {
          opacity: "1",
          paddingTop: "25px",
        },
        600,
        () =>
          $("#options .item3").animate(
            {
              opacity: "1",
              paddingTop: "25px",
            },
            700,
            () =>
              $("#options .item4").animate(
                {
                  opacity: "1",
                  paddingTop: "25px",
                },
                900,
                () =>
                  $("#options .item5").animate(
                    {
                      opacity: "1",
                      paddingTop: "25px",
                    },
                    1000
                  )
              )
          )
      )
  );

  if ($("#options").css("left") == "0px") {
    $("#options").animate({ left: `-${optionW}px` }, 300);
    $("#icon_move").html('<i class="fa fa-align-justify fs-3"></i>');
  } else {
    $("#options").animate({ left: "0px" }, 300);
    $("#icon_move").html('<i class="fa fa-align-justify fa-times fs-3"></i>');
  }
});

$(".nav-link ").click(function () {
  $("#options").animate({ left: `-${optionW}px` }, 300);
  $("#icon_move").html('<i class="fa fa-align-justify fs-3"></i>');
});

//defult meals in home page

getDefultMeals();

let DefultMeals = [];

async function getDefultMeals() {
  //$(".loading-container").fadeIn(100);
  let result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );

  let finalResult = await result.json();
  DefultMeals = finalResult.meals;
  displayData(DefultMeals);
  //$(".loading-container").fadeOut(100);
}

//Categories all

async function getDefultCategories() {
  let result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );

  let finalCategories = await result.json();
  DefultMeals = finalCategories.categories;
  displayCategories(DefultMeals);
}

//Area all

async function getDefultAreas() {
  let result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );

  let finalAreas = await result.json();
  DefultMeals = finalAreas.meals.slice(0, 20);
  displayAreas(DefultMeals);
}

//Ingredients all

async function getDefultIngredients() {
  let result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );

  let finalIngredients = await result.json();
  DefultMeals = finalIngredients.meals.slice(0, 20);
  displayIngredients(DefultMeals);
}

// diplay meals
function displayData(list) {
  let cartona = "";
  for (let i = 0; i < list.length; i++) {
    cartona += `    <div class="col-lg-3 col-md-6">
    <div onclick="getMeal('${list[i].idMeal}')" class="item_def position-relative">
     <img src="${list[i].strMealThumb}" class="w-100 rounded-2" alt="">
     <div class="caption opacity-0 px-2 rounded-2 position-absolute top-0 start-0 bottom-0 end-0">
       <h2 class="px-2 text-black fw-bolder  position-relative">${list[i].strMeal}</h2>
       </div>
    </div>
     </div>`;
  }

  document.getElementById("demo").innerHTML = cartona;
}

// diplay Categories

function displayCategories(list) {
  let cartona = "";
  for (let i = 0; i < list.length; i++) {
    cartona += `   <div class="col-lg-3 col-md-6">
          <div onclick="filterByCategory('${
            list[i].strCategory
          }')" class="item_def position-relative">
           <img src="${
             list[i].strCategoryThumb
           }" class="w-100 rounded-2" alt="">
           <div class="caption opacity-0 px-2 rounded-2 position-absolute top-0 start-0 bottom-0 end-0 text-center">
             <h2 class="px-2 text-black fw-bolder  position-relative">${
               list[i].strCategory
             }</h2>
             <p class="text-black fw-bolder  position-relative">${list[
               i
             ].strCategoryDescription
               .split(" ")
               .slice(0, 20)
               .join(" ")}</p>
             </div>
          </div>
           </div>`;
  }

  document.getElementById("demo").innerHTML = cartona;
}

// diplay Area

function displayAreas(list) {
  let cartona = "";
  for (let i = 0; i < list.length; i++) {
    cartona += `   <div class="col-lg-3 col-md-6">
          <div onclick="filterByArea('${list[i].strArea}')" class="item_def text-center">
          <i class="fa-solid fa-city fa-3x"></i>
           <div class="Area text-center">
             <h2 class="p-2 text-white fw-bolder">${list[i].strArea}</h2>
             </div>
          </div>
           </div>`;
  }

  document.getElementById("demo").innerHTML = cartona;
}

// diplay Ingredients

function displayIngredients(list) {
  let cartona = "";
  for (let i = 0; i < list.length; i++) {
    cartona += `   <div class="col-lg-3 col-md-6">
          <div onclick="getMainIngredient('${
            list[i].strIngredient
          }')" class="item_def text-center">
          <i class="fa-solid fa-bowl-food fa-3x"></i>
           <div class="Area text-center">
             <h3 class="p-2 text-white fw-bolder">${list[i].strIngredient}</h3>
             <p class='text-white'>${list[i].strDescription
               .split(" ")
               .slice(0, 20)
               .join(" ")}</p>
             </div>
          </div>
           </div>`;
  }

  document.getElementById("demo").innerHTML = cartona;
}

//get all details for meal
let finalMeal = "";

async function getMeal(mealID) {
  //$(".loading-container").fadeIn(100);
  let meal = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
  );
  meal = await meal.json();
  //displayMeal(meal.meals[0]);
  finalMeal = meal.meals[0];
  console.log(finalMeal.strMeasure1);
  displayMeal(finalMeal);
  //$(".loading-container").fadeOut(500);
}

function displayMeal(meal) {
  let recipes = "";
  let tagsStr = "";

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      recipes += `<li class="my-3 mx-1 p-1 bg-light rounded">${
        meal[`strMeasure${i}`]
      } ${meal[`strIngredient${i}`]}</li>`;
    }
  }

  let tags = meal.strTags?.split(",");
  for (let i = 0; i < tags?.length; i++) {
    tagsStr += `<li class="my-3 mx-1 p-1 bg-primary  rounded">${tags[i]}</li>`;
  }

  let cartona = `
  <div class="col-md-4 text-white text-center">
  <img class="w-100 rounded-2" src="${meal.strMealThumb}" alt="">
  <br>
  <h1 class="fw-bolder">${meal.strMeal}</h1>
 </div>

 <div class="col-md-8 text-white text-start">
  <h2 class="fw-bolder">Instructions</h2>
  <p class="text-lead">${meal.strInstructions}</p>
    <p class="text-danger fs-5"><strong >Area :</strong> ${meal.strArea}</p>
    <p class="text-danger fs-5"><strong >Category :</strong> ${meal.strCategory}</p>
    <h3 class="text-primary text-lead text-decoration-underline">Recipes :</h3>
    <ul class="d-flex list-unstyled flex-wrap text-dark text-lead fw-bold" id="recipes">
      <li class="my-3 mx-1 p-1 bg-light rounded">1 cup  Lentils</li>
 
    </ul>
    <h3 class="my-2 mx-1 p-1 text-success text-lead text-decoration-underline">Tags :</h3>
    <ul class="d-flex list-unstyled flex-wrap text-dark text-lead fw-bold" id="tags">
      

    </ul>
    <a class="btn btn-warning text-white fw-bold" target="_blank" href="${meal.strSource}">Source</a>
    <a class="btn btn-danger youtube text-white fw-bold" target="_blank" href="${meal.strYoutube}">Youtub</a>
 </div>`;
  document.getElementById("demo").innerHTML = cartona;
  document.getElementById("recipes").innerHTML = recipes;
  document.getElementById("tags").innerHTML = tagsStr;
  // $("html, body").animate({scrollTop: 0,},200);
}

/*---------------------------------------*/

async function filterByCategory(category) {
  // $(".loading-container").fadeIn(100);
  let meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  meals = await meals.json();
  displayData(meals.meals);
  // $(".loading-container").fadeOut(500);
}

/*-----------------*/

async function filterByArea(area) {
  // $(".loading-container").fadeIn(100)
  let meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  meals = await meals.json();
  displayData(meals.meals);
  // $(".loading-container").fadeOut(500)
}

/*-------------------*/

async function getMainIngredient(mealName) {
  //$(".loading-container").fadeIn(100);
  let meal = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealName}`
  );
  meal = await meal.json();
  displayData(meal.meals);
  // $(".loading-container").fadeOut(500);
}
