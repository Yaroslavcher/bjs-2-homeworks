//Задача № 1
function cachingDecoratorNew(func) {
    let cache = {};
    return (...args) => {
        const hash = args.join(',');
        if(hash in cache){
            return cache[hash];
        }
        const result = func(...args);
        cache[hash] = result;
        return result;
        //return cache[hash] = func(...args);  
    }  
}

const addAndMultiply = (a, b, c) => (a + c) * c;
const cachedAddAndMultiply = cachingDecoratorNew(addAndMultiply);

//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}
