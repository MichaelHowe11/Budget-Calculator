const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';




function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
let title = "Budget Calculator";

let titleList = title.split('');
let wordCount = 0;
let newTitleList = []
for (let i = 0; i < titleList.length; i++) {



        while (titleList[i] != newTitleList[i]) {
            delete newTitleList[i];
            newTitleList[i] = generateString(1);
            console.log(newTitleList)
            wordCount+=1;
        }





    
}
console.log(wordCount)