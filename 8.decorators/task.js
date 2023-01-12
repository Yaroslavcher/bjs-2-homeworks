//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];
  return function(...args) {
    const hash = md5(args); //получаю хэш по заданным аргументам
    const objectInCache = cache.find(
      objectInCache => objectInCache.hash === hash); //ищу заданный хэш(-и)
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value); //если хэш найден (аргументы уже вычислены),
      return "Из кэша: " + objectInCache.value; //то возвращаю значение из кэша
    }

    const value = func(...args);
    cache.push({hash, value});
    const maxCache = 5;
      if(cache.length > maxCache){
      cache.shift();
      }
    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;
  }
}



//Задача № 2
const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(() => upgradedSendSignal(1, 0)); // Сигнал отправлен + будет запланирован асинхронный запуск, который будет проигнорирован, так как следующий сигнал отменит предыдущий (300 - 0 < 2000)
setTimeout(() => upgradedSendSignal(2, 300), 300); //проигнорировано, так как следующий сигнал отменит предыдущий (900 - 300 < 2000)
setTimeout(() => upgradedSendSignal(3, 900), 900); // проигнорировано, так как следующий сигнал отменит предыдущий (1200 - 900 < 2000)
setTimeout(() => upgradedSendSignal(4, 1200), 1200); //проигнорировано
setTimeout(() => upgradedSendSignal(5, 2300), 2300); //Сигнал отправлен
setTimeout(() => upgradedSendSignal(6, 4400), 4400); // проигнорировано, так как следующий сигнал отменит предыдущий (4500 - 4400 < 2000)
setTimeout(() => upgradedSendSignal(7, 4500), 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  function wrapper(...args) {
    clearTimeout(timeoutId);
    if (!timeoutId) {
      func(...args);
      wrapper.count++;
    }  
    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
    wrapper.allCount++;
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
