
const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

 const nomalize = (lesson) => {
    
    lesson.name = capitalize(lesson.name);
    lesson.descprition = lesson.descprition.toLowerCase();
    return lesson;
}

let output = {
    name: "SeSh",
    descprition: "TiLl i ReST",
};
console.log(nomalize(output));

