// 12. Масив unknown з перевірками

// Умова:
// Функція extractNumbersAndStrings приймає unknown
// [] і повертає { numbers: number[], strings: string[] }.

interface Accum { numbers: number[]; strings: string[] };

const extractNumbersAndStrings = (array: unknown[]): Accum => {
    return array.reduce(({numbers, strings}, item) => {
        if (typeof item === "number") numbers.push(item);
        if (typeof item === "string") strings.push(item);
        
        return {numbers, strings};
    }, {numbers: [], strings: []})
}


console.log(extractNumbersAndStrings([5, 7, 'Avada', 3, 'Kedavra']))