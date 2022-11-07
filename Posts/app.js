// const buff = Buffer.alloc(8);
// buff.write("s");
// console.log("buff: ",buff);

let t = "He is a very very good boy, isn't he?";
let word = '';
for(let i = 0;i < t.length; i++){
    const letter = t[i];
    if(['\'' , '?',','].includes(letter)){
        word += ' '
    }else {
        word += letter;
    }
}
console.log(`${word.split(' ').length}\n${word}\n`);

// const s = t.split(' ');
// console.info(`${s.length}\n`);
// s.map(item => {
//     const temp = item;
//     if(['\'','?',].includes(item)){
//         temp = item.replace()
//     }
//     console.info(`${temp}\n`);
// })