"use strict";
// Задача 1 - функция сравнивает массивы по значениям и позициям
function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

// Задача 2 - функция возвращает среднее значение возраста пользователей одного пола
function getUsersNamesInAgeRange(users, gender) {
    if (users.length == 0) {
        return 0;
    }
    if (gender === "мужской" || gender === "женский") {
        let gendersArr = users.filter(user => user.gender === gender).map(user => user.age);
        return gendersArr.reduce((acc, item) => acc + item) / gendersArr.length;
        
    }
        return 0;
}