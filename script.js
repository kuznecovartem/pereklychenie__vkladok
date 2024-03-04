const tabList = document.querySelector('#tabList');
const tabcontent = document.querySelectorAll('.tabContent');
const tabLinks = document.querySelectorAll('tabLink');

const defaultOpen = document.querySelector('#dfaultOpen');
const tabActive = document.querySelector('.tabcontent.active');

// функция getComputedStyle(element) - позволяет получить значение любого CSS свойства элемента, даже тз CSS файла.

console.log(getComputedStyle(tabActive).backgroundColor);

// установить для кнопки по умолчанию такой же цвет как у активной вкладки.
defaultOpen.computedStyleMap.backgroundColor = getComputedStyle(tabActive).backgroundColor;

tabList.addEventListener('click', (e)=> {
    // кнопка по которой кликнули 
    const targetElement = e.target;
    console.log(targetElement);
    // (элемент.dataset.имя): element.dataset.city - обращение к data атрибуту с указанным именем
    const dataCity = targetElement.dataset.city;
    console.log(dataCity);

    //перебрать все вкладки с контентом
    for(let tab of tabcontent) {
        // скрыть все вкладки
        tab.classList.remove('active');
    }
})