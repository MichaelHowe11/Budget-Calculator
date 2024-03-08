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


}); 