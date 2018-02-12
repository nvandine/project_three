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

objectFriend.score = 0;

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

// objectFriend.traits = [
//     {heroic: 80}
// ]

//objectFriend.traits.trait

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
        pants: {
            traits: ['advisor','kicky','selfish']
        },
        rock: {
            traits: ['fixer', 'kind', 'medical']
        },
        glassOfMilk: {
            traits: ['lazy', 'maker', 'meanie' ]
        },
        stadium: {
            traits: ['medical', 'speedy', 'entertainer']
        },
        foamFinger: {
            traits: ['heroic','medical','entertainer']
        },
        floppyDisk:{
            traits: ['archivist', 'strong', 'cook']
        },
        rainbowTrout: {
            traits: ['persuader', 'strong', 'selfish']
        },
        ballOfYarn: {
            traits: ['lazy', 'maker', 'desperate']
        },
        soccerTeam: {
            traits: ['kicker','waster','persuader']
        },
        butter: {
            traits: ['traitor', 'partier', 'maker']
        },
        volleyball: {
            traits: ['patient0', 'advisor', 'archivist']
        },
        car: {
            traits: ['cook', 'persuader', 'meanie']
        },
        salad: {
            traits: ['meanie', 'fixer', 'heroic']
            // YOU DON'T MAKE FRIENDS WITH SALAD
        }
       
        
    }
    
// objectFriend.selectedTraits = [];
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

    //write a function (2) that on-click of chosen object, stores the three corresponding traits in a new SURVIVAL array (that can take additional values later)
   

    
    objectFriend.userChoice = function(){
        let $radios = $('input[type=radio]');
        // console.log($radios);
        $radios.on('click', function(){
            // console.log(this);
            let target = this.value;
            console.log(target);
            // objectFriend.getTraits(target);
            
        $('.choiceMade').on('submit', function(e){
            e.preventDefault();
            // console.log('submit works!')
    //         let target = this.value;
    //         console.log(target);
            objectFriend.getTraits(target);
            });
        }); 
    }


    objectFriend.getTraits = function(target){
        // console.log('hello')
        let traitSet = objectFriend.catalog[target].traits;
        console.log(traitSet);
        console.log(`You have chosen ${target}.`)
        for (let trait in traitSet) {
            // console.log(traitSet[trait]);
            let value = objectFriend.traits[traitSet[trait]];
            objectFriend.score += value;
            console.log(`${target} is a ${traitSet[trait]} which gives you ${value} days.`)
            
            // use jquery to .text the console log template literal to the div
        }
        console.log(`Your score is now ${objectFriend.score} days.`)
        // objectFriend.aggregateTraits(traitSet);
    }

    objectFriend.submitChoice = function (){

    }

    $(function () {
        $('a').smoothScroll({
            // offset: 100
        });
    });
    // objectFriend.aggregateTraits = function(traitSet){
    //     // console.log("hey now");
    //     // console.log(traitSet);
    //     objectFriend.selectedTraits.push(traitSet);
    //     // console.log(objectFriend.selectedTraits)
    //     const concatTraits = objectFriend.selectedTraits.reduce(function(acc, curr){
    //         return acc.concat(curr);
    //     })
    
    //     console.log(concatTraits);
        
    // }

    // for(let key in objectFriend.traits) {
    //     console.log(objectFriend.traits[key])
    // }
    
    // objectFriend.valueArray = function(){
    //     for(let i =0; i<concatTraits.length; i++) {
    //         // console.log(concatTraits[i]);
    //         // console.log('for in loop')

    //         if (i === objectFriend.traits[key]) {
    //             console.log(objectFriend.traits[key])
                
    //         }
    //     }
    // }

    // take traits and get corresponding key pair values from the traits object
    //stretch goal: display a short description of the chosen object's 

    // .map function 
    
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
        // objectFriend.aggregateTraits();
    });








