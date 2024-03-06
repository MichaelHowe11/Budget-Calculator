let list = new Map();

list.set(`agEngineer`, 0)



document.addEventListener(`DOMContentLoaded`, function(){

    let elementById = function(id) {
        return document.getElementById(id);
    };

    let addListener = function(id,event,code) {
        elementById(id).addEventListener(event, (eventData) => {code(eventData)})
    }

    addListener(`userForm`,`submit`, (eventData) => {
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

let salary = 0;
if (document.getElementById(categoryProgessionTech).value === ("agEngineer")) {
    salary = 78585.00;
} else if (document.getElementById(categoryProgessionTech).value === ("architect")) {
    salary = 53795.00;   
} else if (document.getElementById(categoryProgessionTech).value === ("cncManu")) {
    salary = 78020.0;
} else if (document.getElementById(categoryProgessionTech).value === ("civilEng")){
    salary = 58808.00
} else if (document.getElementById(categoryProgessionTech).value === ("civilEngTech")){
    salary = 59488.00
} else if (document.getElementById(categoryProgessionTech).value === ("civilEngTechelectronicEng")){
    salary = 83000.00
} else if (document.getElementById(categoryProgessionTech).value === ("energyMGMT")){
    salary = 80000.00
} else if (document.getElementById(categoryProgessionTech).value === ("environSceince")){
    salary = 69300.00 
} else if (document.getElementById(categoryProgessionTech).value === ("forensicPathologist")){
    salary = 78500.00 
}
  else if (document.getElementById(categoryProgessionTech).value === ("graphicDesignSpec")){
    salary = 59000.00
}
  else if (document.getElementById(categoryProgessionTech).value === ("H/C-HVAC")){
    salary = 69300.00 
}
  else if (document.getElementById(categoryProgessionTech).value === ("industrialMech")){
    salary = 61000.00 
}
  else if (document.getElementById(categoryProgessionTech).value === ("labTech")){
    salary = 53000.00
}
  else if (document.getElementById(categoryProgessionTech).value === ("landscaper")){
    salary = 46000.00
}

if (document.getElementById(categoryProgessionHealth).value === ("biologist")) {
    salary = 56640.00;
} else if (document.getElementById(categoryProgessionHealth).value === ("dentist")){
    salary = 154000.00;
} else if (document.getElementById(categoryProgessionHealth).value === ("doctor")){
    salary = 78585.00;
} else if (document.getElementById(categoryProgessionHealth).value === ("emt")){
    salary = 78585.00;    
} else if (document.getElementById(categoryProgessionHealth).value === ("nurse")){
    salary = 78585.00;
} else if (document.getElementById(categoryProgessionHealth).value === ("nutritionist")){
    salary = 78585.00;     
} else if (document.getElementById(categoryProgessionHealth).value === ("pharmacist")){
    salary = 78585.00;
} else if (document.getElementById(categoryProgessionHealth).value === ("physicalTherp")){
    salary = 78585.00;     
} else if (document.getElementById(categoryProgessionHealth).value === ("forensicPathologist")){
    salary = 78585.00;
} else if (document.getElementById(categoryProgessionHealth).value === ("oceanographer")){
    salary = 78585.00;     
} else if (document.getElementById(categoryProgessionHealth).value === ("vet")){
    salary = 78585.00;
}



}); 