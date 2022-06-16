/// ВНИМАНИЕ!! Вывод результатов в консоли разработчика. JavaScript

//   Задание №1 ----------------------------------
const cityName = [
    'Москва',
    'Cанкт-Петербург',
    'Мурманск',
    'Воронеж'
];

function city(data) {
    console.log('Задание №1: ' + data.join(", ") + ".");
}

city(cityName);

//  Задание №2 ----------------------------------
const number = 39.3;

function ceil(n) {
    console.log('Задание №2: Получено число: ' + n + '. Результат округления: ' + (Math.round(n / 5) * 5));
}

ceil(number);

// Задание №3 ----------------------------------
const countPc = Math.round(Math.random() * 1000);

function comp(count) {
    let word = 'компьютер';
    if (count % 100 < 11 || count % 100 > 14) {
        if ((count % 10) !== 1) {
            if ((count % 10) >= 2 && (count % 10) <= 4) {
                word += 'a';
            } else {
                word += 'ов';
            }
        }
    } else {
        word += 'ов';
    }
    console.log('Задание №3: ' + count + ' ' + word);
}

comp(countPc);

// Задание №4 ----------------------------------
const easyCount = Math.round(Math.random() * 100);

function easy(data) {
    if (data > 1) {
        let result = true;
        for (let i = 2; i < data; i++) {
            if (data % i === 0) {
                result = false;
            }
        }
        if (result) {
            console.log('Задание №4: Получено число ' + data + ', является простым');
        } else {
            console.log('Задание №4: Получено число ' + data + ', не является простым')
        }
    } else {
        console.log('Задание №4: Получено число ' + data + ', число должно быть больше 1')
    }
}

easy(easyCount);

// Задание №5 ----------------------------------
let mass1 = [7, 17, 1, 9, 1, 17, 56, 56, 23],
    mass2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

let massReplay = {
    searchReply: function (data1, data2) {
        let massCache1 = [],
            massCache2 = [],
            massResult = [];

        data1.forEach(function (item, i) {
            for (let j = i + 1; j < data1.length; j++) {
                if (data1[i] === data1[j]) {
                    if (massCache1.includes(data1[j]) === false) {
                        massCache1.push(data1[j]);
                    }
                }
            }
        });

        data2.forEach(function (item, i) {
            for (let j = i + 1; j < data2.length; j++) {
                if (data2[i] === data2[j]) {
                    if (massCache2.includes(data2[j]) === false) {
                        massCache2.push(data2[j]);
                    }
                }
            }
        });

        massCache1.forEach(function (item1, i) {
            massCache2.forEach(function (item2, j) {
                if (massCache1[i] === massCache2[j]) {
                    massResult.push(massCache2[j]);
                }
            });
        });

        console.log('Задание №5:')
        console.log('   Массив №1 - ' + data1);
        console.log('   Повторы: ' + massCache1);
        console.log('   Массив №2 - ' + data2);
        console.log('   Повторы: ' + massCache2);
        console.log('   Совпадения в массивах: ' + massResult);
    }
}

massReplay.searchReply(mass1, mass2);

// ----------------------------------
console.log('Дорецкий Б.В. 2022г (ツ)');
