// ACTIONS
// User sees intro "page" explaining what this adventure will entail

// first page appears with three objects to choose from

// user clicks on the object of choice

// fixed aside's Population Survival Criteria populates

//repeat five more times

// Conclusion page (dream: fixed aside page floats over to be featured); the number of boxes checked determines the number of days your community survives, with explanation of why.
   

// PSEUDOCODE STARTS HERE   
//creating an empty object where the game's functionality lives

const objectFriend = {};  

// key value pairings of traits, values in DAYS
objectFriend.traits = {
    heroic: 80,
    medical: 200,
    cook: 140,
    entertainer: 50,
    persuader: 90,
    fixer: 250,
    maker: 175,
    archivist: 20,
    speedy: 45,
    kicky: 35,
    strong: 110,
    kind: 225,
    advisor: 65,
    desperate: -90,
    partier: -20,
    waster: -50,
    meanie: -75,
    traitor: -200,
    selfish: -100,
    patient0: -250,
    lazy: -30
}
//create friend inventory that is an object (array?) that holds the friend data

objectFriend.catalog = {
        spoon: {
            traits: ['cook', 'speedy', 'kind']
            // description
            // title
        },
        cathodeRayTv: {
            traits: ['kind', 'patient0', 'kicky']
        },
        partyTurtle: {
            traits: ['partier', 'fixer', 'archivist']
        },
        stairCar: {
            traits: ['kind', 'waster', 'desperate']
        },
        tuba: {
            traits: ['traitor', 'desperate', 'partier']
        },
        rainbowTrout: {
            traits: ['persuader', 'strong', 'selfish']
        },
        stadium: {
            traits: ['medical', 'speedy', 'entertainer']
        },
        glassOfMilk: {
            traits: ['lazy', 'maker', 'meanie' ]
        },
        aceOfClubs: {
            traits: ['maker','waster','persuader']
        },
        pantsuit: {
            traits: ['advisor','kicky','selfish']
        },
        foamFinger: {
            traits: ['heroic','medical','entertainer']
        },
        floppyDisk:{
            traits: ['archivist', 'strong', 'cook']
        },
        salad: {
            traits: ['meanie', 'fixer', 'heroic']
            // YOU DON'T MAKE FRIENDS WITH SALAD
        }
       

}

    // write a function (1) that pulls three random objects from MAIN array
    // function getRandomFriend(array){
    //     const randoIndex = Math.floor(Math.random()* array.length)
    //     return array[randoIndex];
    // },
   
    // FOR SAKE OF SIMPLICITY:
    // have all the options on one page - no random, offer selection
    // use radio buttons
    // name attribute to group radio buttons, each group has different name

    //QUESTION: can the "name" feed the image that appears on the HTML while the "traits" are stored for future use in a function?

    //write a function (2) that, on-click of chosen object, stores the three corresponding traits in a new SURVIVAL array (that can take additional values later)
   
    objectFriend.userChoice = function(){
        let $radios = $('input[type=radio]');
        console.log($radios);
        $radios.on('click', function(){
            console.log(this);
            let target = this.value;
            console.log(target);
            objectFriend.getTraits(target);
        });
    }

    objectFriend.getTraits = function(target){
        // console.log('hello')
        let traits = objectFriend.catalog[target].traits;
        console.log(traits);

    }

    //stretch goal: display a short description of the chosen object's 
    
    //write a function (3) that removes the three objects from the last turn from the MAIN array
    //Question - can this function live inside function2?

    //pull three new random objects from MAIN array (Function 1 again, pending answer to next question)
    //QUESTION: is this still the MAIN array or will it become a different one every time it loses three objects?

    //functions 1, 2 & 3 repeat 5 times. 
    //QUESTION how to trigger final display of community survival time?

    // CONCURRENT function (4)
    // write traits.reduce function to accumulate the value of SURVIVAL array

   
  
   
   
    $(function(){
        // console.log('it works!')
        
        objectFriend.userChoice();
    });








