  
//create an empty object where the game's functionality lives

const objectFriend = {}; 

objectFriend.score = 0;
// key value pairings of traits, values in DAYS
objectFriend.traits = {
    'is heroic': +80,
    'intuitively knows first aid': +200,
    'can cook': +140,
    'is an all-round entertainer': +50,
    'can find water': +175,
    'is a fixer': +250,
    'can sew': +90,
    'can track scent': +60,
    'runs really fast': +45,
    'knows karate': +97,
    'is hella strong': +110,
    'is very kind': +88,
    'gives great advice': +65,
    'is desperate': -190,
    'is a partier': -75,
    'likes to waste resources': -175,
    'is really mean': -375,
    'is a total traitor': -200,
    'is selfish': -100,
    'is harbouring a deadly virus': -700,
    'is lazy': -90
}

// objectFriend.traits = [
//     {is heroic: 80}
// ]

//objectFriend.traits.trait

//create friend inventory that is an object (array?) that holds the friend data

objectFriend.catalog = {
        spoon: {
            traits: ['can cook', 'runs really fast', 'is very kind'],
            // description
            title: 'a spoon'
           
        },
        cathodeRayTv: {
            traits: ['is very kind', 'is harbouring a deadly virus', 'knows karate'],
            title: 'a cathode ray tube TV'
        },
        partyTurtle: {
            traits: ['is a partier', 'is a fixer', 'can track scent'],
            title: 'Gerald the party turtle'
        },
        stairCar: {
            traits: ['is very kind', 'likes to waste resources', 'is desperate'],
            title: 'a stair car'
        },
        tuba: {
            traits: ['is really mean', 'is a fixer', 'is heroic'], 
            title: 'a tuba'
        },
        pants: {
            traits: ['gives great advice', 'knows karate','is selfish'],
            title: 'a pair of pants'
        },
        thumbtack: {
            traits: ['is a fixer', 'is very kind', 'intuitively knows first aid'],
            title: 'a thumbtack'
        },
        glassOfMilk: {
            traits: ['is lazy', 'can sew', 'is really mean' ],
            title: 'a glass of expired milk'
        },
        Danny: {
            traits: ['intuitively knows first aid', 'runs really fast', 'is an all-round entertainer'],
            title: 'Danny'
        },
        foamFinger: {
            traits: ['is heroic','intuitively knows first aid','is an all-round entertainer'],
            title: 'a foam finger'
        },
        floppyDisk:{
            traits: ['can track scent', 'is hella strong', 'can cook'],
            title: 'a 3.5 inch floppy disk'
        },
        rainbowTrout: {
            traits: ['can find water', 'is hella strong', 'is selfish'],
            title: 'a rainbow trout'
        },
        ballOfYarn: {
            traits: ['is lazy', 'can sew', 'is desperate'],
            title: 'a ball of yarn'
        },
        soccerTeam: {
            traits: ['knows karate','likes to waste resources','can find water'],
            title: 'The 1994 Brazilian Fifa World Cup champions',
        },
        butter: {
            traits: ['is a total traitor', 'is a partier', 'can sew'],
            title: 'butter'
        },
        volleyball: {
            traits: ['is harbouring a deadly virus', 'gives great advice', 'can track scent'],
            title: 'Wilson'
        },
        car: {
            traits: ['can cook', 'can find water', 'is really mean'],
            title: 'a 1997 Volkswagen Passat'
        },
        salad: {
            traits: ['is a total traitor', 'is desperate', 'is a partier'],
            title: 'salad. You don\'t make friends with salad'
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
   
//write a function that takes the value of the of the checked radio (the "target") 
//save the three corresponding traits associated with that target
//
    
    objectFriend.userChoice = function(){
        let radios = $('input[type=radio]');
        // console.log($radios);
        radios.on('click', function(){
            // console.log(this);
            let target = this.value;
            console.log(target);
            objectFriend.getTraits(target);
            
        }); 
    }
   
    $('.choiceMade').on('submit', function(e){
        e.preventDefault();
        // console.log('submit works!')
        $('.result').fadeIn();
        // $('.result a').fadeIn();
        });

        // $('.result a').on('click', function(){
        //     $('.result').hide();
        // })
        $(document).mouseup(function(e){
            let container = $('.result');
            if (!container.is(e.goal) && container.has(e.goal).length === 0) {
                container.fadeOut();
            }
            $('.result a').click(function(){
        $('.result h3').empty();
        $('.result ul').empty();
        $('.result h2').empty();
        // $('.result a').fadeOut("fast");
    })
        })


    objectFriend.getTraits = function(target){
        // console.log('hello')
        let traitSet = objectFriend.catalog[target].traits;
        // let traitDescription = objectFriend.catalog[target].description;
        console.log(traitSet);
        let title = objectFriend.catalog[target].title;
        $('.result h3').text(`You have chosen to befriend ${title}.`);
        // console.log(`You have chosen ${target}.`)
        for (let trait in traitSet) {
            // console.log(traitSet[trait]);
            let value = objectFriend.traits[traitSet[trait]];
            
            objectFriend.score += value;
            // $('.result p').append(`${target} is a ${traitSet[trait]} (${value} days.)  `);
            $('.result ul').append(`<li>${title} ${traitSet[trait]} (${value} days) </li>`  );

    
            console.log(`Your new friend is a ${traitSet[trait]} which gives you ${value} days`)
     
        }

        $('.result h2').text(`Your community will last a total of ${objectFriend.score} days.`);
        $('.finalResult').text(`${objectFriend.score}`);
        console.log(`Your community just earned ${objectFriend.score} days.`);
       
    }


    $(function () {
        $('a').smoothScroll({
            // offset: 100
            speed: 800
        });
    });

   
    objectFriend.init = function() {
        // objectFriend.getTraits();
        objectFriend.userChoice();
    }
   
   
    $(function(){
        objectFriend.init();
        
    });








