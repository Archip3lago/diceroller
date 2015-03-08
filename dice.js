$(document).ready(function() {
    addListener();
    function addListener() {
        //Hindra att form skickas
        $(".formBtn").click(function() {
            $('form').submit(function(event) {
                event.preventDefault();
            });
            var number = getData();
            var sum = 0;
            for (i = 0; i < number; i++) {
                var diceNumber = rollDice();
                switch (i) {
                    case 0:
                        $('.firstDice').replaceWith("<p class='firstDice'>"+diceNumber+"</p>");
                        
                        $('.secondDice').replaceWith("<p class='secondDice'> </p>");
                        
                        $('.thirdDice').replaceWith("<p class='thirdDice'> </p>");
                        var diceOne = diceNumber;
                        break;
                    case 1:
                        $('.secondDice').replaceWith("<p class='secondDice'>"+diceNumber+"</p>");
                        
                        $('.thirdDice').replaceWith("<p class='thirdDice'> </p>");
                        var diceTwo = diceNumber;
                        break;
                    case 2:
                        $('.thirdDice').replaceWith("<p class='thirdDice'>"+diceNumber+"</p>");
                        var diceThree = diceNumber;
                        break;
                }

            }
            console.log(diceOne);
            sum = calcSum(number, diceOne, diceTwo, diceThree);
            $('.diceSum').replaceWith("<p class='diceSum'>"+sum+"</p>");
        });
    }
    
    function rollDice() {
        var diceNumber = Math.floor(Math.random() * 6) + 1;
        return diceNumber;
    }
    ;
    function getData() {
        var formNumber = $(".radBtn:checked").val();
        return formNumber;
    }
    function calcSum(diceAmount, diceOne, diceTwo, diceThree){
        var sum = 0;
        switch(diceAmount){
            case 0:
                sum = diceOne;
                console.log("ett");
                break;
            case 1:
                sum = diceOne + diceTwo;
                console.log("två");
                break;
            case 2:
                sum = diceOne + diceTwo + diceThree;
                console.log("tre");
                break;
        }
        console.log(sum);
        return sum;
    }
});



