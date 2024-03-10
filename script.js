let list = new Map();

list.set(`agEngineer`, 0)



document.addEventListener(`DOMContentLoaded`, function () {

    let elementById = function (id) {
        return document.getElementById(id);
    };

    let addListener = function (id, event, code) {
        elementById(id).addEventListener(event, (eventData) => { code(eventData) })
    }

    addListener(`userForm`, `submit`, (eventData) => {
        eventData.preventDefault();
        console.log(list.get("agEngineer"))
    });

    addListener(`categoryProgessionTech`, `change`, (eventData) => {
        let drop1 = elementById(`categoryProgessionHealth`)
        let drop2 = elementById(`categoryProgessionBusiness`)
        let drop3 = elementById(`categoryProgessionService`)
        drop1.options.selectedIndex = 0
        drop2.options.selectedIndex = 0
        drop3.options.selectedIndex = 0
    })

    addListener(`categoryProgessionHealth`, `change`, (eventData) => {
        let drop1 = elementById(`categoryProgessionTech`)
        let drop2 = elementById(`categoryProgessionBusiness`)
        let drop3 = elementById(`categoryProgessionService`)
        drop1.options.selectedIndex = 0
        drop2.options.selectedIndex = 0
        drop3.options.selectedIndex = 0
    })

    addListener(`categoryProgessionBusiness`, `change`, (eventData) => {
        let drop1 = elementById(`categoryProgessionTech`)
        let drop2 = elementById(`categoryProgessionHealth`)
        let drop3 = elementById(`categoryProgessionService`)
        drop1.options.selectedIndex = 0
        drop2.options.selectedIndex = 0
        drop3.options.selectedIndex = 0
    })

    addListener(`categoryProgessionService`, `change`, (eventData) => {
        let drop1 = elementById(`categoryProgessionTech`)
        let drop2 = elementById(`categoryProgessionBusiness`)
        let drop3 = elementById(`categoryProgessionHealth`)
        drop1.options.selectedIndex = 0
        drop2.options.selectedIndex = 0
        drop3.options.selectedIndex = 0
    })

    addListener(`userInput`, `change`, (eventData) => {
        let drop1 = elementById(`categoryProgessionTech`)
        let drop2 = elementById(`categoryProgessionBusiness`)
        let drop3 = elementById(`categoryProgessionHealth`)
        let drop4 = elementById(`categoryProgessionService`)
        drop1.options.selectedIndex = 0
        drop2.options.selectedIndex = 0
        drop3.options.selectedIndex = 0
        drop4.options.selectedIndex = 0
    })

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';



    let title = "Budget Calculator";

    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }

    let titleList = title.split('');
    let wordCount = 0;
    let newTitleList = []
    for (let i = 0; i < titleList.length; i++) {
        setTimeout(function () {
            alert('hello');
          }, 3000);


            while (titleList[i] != newTitleList[i]) {
                setTimeout(function () {
                    delete newTitleList[i];
                    newTitleList[i] = generateString(1);
                    console.log(newTitleList)
                    wordCount+=1;
                    title1.innerText = newTitleList.join('');
                }, 100)
            }





        
    }
    console.log(wordCount)

  
    

}); 