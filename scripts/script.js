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
   
//create friend inventory that is an object (array?) that holds the friend data

objectFriend.catalog = [
        {
            name: 'spoon',
            traits: ['cook', 'speedy', 'kind']
        },
        {
            name: 'cathode ray tv',
            traits: ['kind', 'patient0', 'kicky']
        },
        {
            name: 'party turtle',
            traits: ['partier', 'fixer', 'archivist']
        },
        {
            name: 'stair car',
            traits: ['kind', 'waster', 'desperate' ]
        },
        {
            name: 'tuba',
            traits: ['traitor', 'desperate', 'partier']
        },
        {
            name: 'rainbow trout',
            traits: ['persuader', 'strong', 'selfish']
        },
        {
            name: 'stadium',
            traits: ['medical', 'speedy', 'entertainer']
        },
        {
            name: 'glass of milk',
            traits: ['lazy', 'maker', 'meanie' ]
        },
        {
            name: 'ace of clubs',
            traits: ['maker','waster','persuader']
        },
        {
            name: 'pantsuit',
            traits: ['advisor','kicky','selfish']
        },
        {
            name: 'foam finger',
            traits: ['heroic','medical','entertainer']
        },
        {
            name:'floppy disk',
            traits: ['archivist', 'strong', 'cook']
        },
        {
            name:'salad',
            traits: ['meanie', 'fixer', 'heroic']
        },

]

// key value pairings of traits, values in DAYS
        const traits = {
            'heroic': 80,
            'medical': 200,
            'cook': 140,
            'entertainer': 50,
            'persuader': 90,
            'fixer': 250,
            'maker': 175,
            'archivist': 20,
            'speedy': 45,
            'kicky': 35,
            'strong': 110,
            'kind': 250,
            'advisor': 65,
            'desperate': -90,
            'partier': -20,
            'waster': -50,
            'meanie': -75,
            'traitor': -200,
            'selfish': -100,
            'patient0': -250,
            'lazy': -30
        }

    // write a function (1) that pulls three random objects from MAIN array
    function getRandomFriend(array){
        const randoIndex = Math.floor(Math.random()* array.length)
        return array[randoIndex];
    },
   
    // FOR SAKE OF SIMPLICITY:
    // have all the options on one page - no random, offer selection
    // use radio buttons
    // name attribute to group radio buttons, each group has different name

    //QUESTION: can the "name" feed the image that appears on the HTML while the "traits" are stored for future use in a function?

    //write a function (2) that, on-click of chosen object, stores the three corresponding traits in a new SURVIVAL array (that can take additional values later)
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

    });








