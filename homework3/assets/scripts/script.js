let name = prompt("Как Вас зовут?");
alert("Здравствуйте, " + name);

let age = parseInt(prompt("Сколько Вам лет?"));
if(isNaN(age)){
    alert("Введено не число!");
}else{
    switch(age){
        case 18:
            alert("Вы совершеннолетний, все можно!");
            break;
        case 10:
            alert("Вам надо учить уроки!");
            break;                        
        case 30:
            alert("Ложитесь спать, завтра на работу!");
            break;                  
        default:
            alert("Мы не знаем, что Вам делать!");    
    }
}

function changeHeader(){
    //1. Меняем цвет и содержимое заголовка
    let element = document.getElementById("header");    

    element.classList.toggle("orangeColor");

    element.textContent = (element.textContent == "Решение нелинейного уравнения методом деления отрезка пополам") ? 
        "Решение Н.У. методом деления отрезка пополам" : 
        "Решение нелинейного уравнения методом деления отрезка пополам"; 

    //2. Меняем цвет и содержимое списков
    var elements = document.getElementsByTagName("li","ul","ol");
    for (el of elements) {
        el.classList.toggle("orangeColor");
    }
}


let btn = document.getElementById("btn");

btn.addEventListener('click', changeHeader);




