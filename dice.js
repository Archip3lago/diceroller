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
                        $('.firstDice').replaceWith("<img class='firstDice' src='img/"+diceNumber+".png'>");

                        //Rullar man bara en tärning töms tärning 2 och 3
                        $('.secondDice').replaceWith("<img class='secondDice' src='img/diceEmpty.png'>");
                        $('.thirdDice').replaceWith("<img class='thirdDice' src='img/diceEmpty.png'>");
                        var diceOne = diceNumber;
                        break;
                    case 1:
                        $('.secondDice').replaceWith("<img class='secondDice' src='img/"+diceNumber+".png'>");

                        //Rullar man två tärningar töms tärning 3
                        $('.thirdDice').replaceWith("<img class='thirdDice' src='img/diceEmpty.png'>");
                        var diceTwo = diceNumber;
                        break;
                    case 2:
                        $('.thirdDice').replaceWith("<img class='thirdDice' src='img/"+diceNumber+".png'>");
                        var diceThree = diceNumber;
                        break;
                }

            }

            sum = calcSum(number, diceOne, diceTwo, diceThree);
            $('.diceSum').replaceWith("<h1 class='diceSum'>" + sum + "</h1>");
        });
    }

    function rollDice() {
        var diceNumber = Math.floor(Math.random() * 6) + 1;
        return diceNumber;
    }

    //Kollar vilken av radio-knapparna som är ikryssad.
    function getData() {
        var formNumber = $(".radBtn:checked").val();
        return formNumber;
    }
    
    function calcSum(diceAmount, diceOne, diceTwo, diceThree) {
        var sum = 0;
        switch (diceAmount) {
            case "1":
                sum = diceOne;
                break;
            case "2":
                sum = diceOne + diceTwo;
                break;
            case "3":
                sum = diceOne + diceTwo + diceThree;
                break;
            default:
        }
        return sum;
    }
});