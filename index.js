let cat= ["Milo", "Otis", "Garfield"];

function listCats() {
    console.log(cats);
}
function destructivelyAppendCat(name){
    cats.push(name);
}
destructivelyAppendCat ["Milo", "Otis", "Garfield"]
console.log(cats);
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
    destructivelyPrependCat["Otis", "Garfield"]
    console.log(cats);

    function destructivelyRemoveLastCat(name) {
        cats.pop(name);
    }
    destructivelyRemoveLastCat["Milo", "Otis"]
    console.log(cats);

    function destructivelyRemoveFirstCat(name) {
        cats.shift(name);
    }
    destructivelyRemoveFirstCat["Otis", "Garfield"]
    console.log(cats);

    
const cats = ['Milo', 'Otis', 'Garfield'];

function appendCat(name) {
    return [...cats, name]; 
}
const newCatsArray = appendCat('Luna');
console.log(newCatsArray);
console.log(cats);

function prependCat(name) {
    return [name, ...cats];
}
console.log(newCatsArray)

function removeLastCat() {
    return cats.slice (0, -1)
}

function removeFirstCat() {
    return cats.slice (1);
}