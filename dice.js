$(document).ready(function() {
console.log("GOAT!");
        addListener();
        function addListener() {
        //Hindra att form skickas
        $(".formBtn").click(function() {
        $('form').submit(function(event) {
        event.preventDefault();
        });
                var number = getData();
                for (i = 0; i < number; i++){
        var diceNumber = rollDice();
        switch (i) {
                case 1:
                $('.one').append(diceNumber);
                break;
                case 2:
                $('.two').append(diceNumber);
                break;
                case 3:
                $('.three').append(diceNumber);
                break;
                default:
        }

                }
        });
        };
                function rollDice() {
                var diceNumber = Math.floor(Math.random() * 6) + 1;
                        return diceNumber;
                };
                function getData() {
                var formNumber = $(".radBtn:checked").val();
                        return formNumber;
                };
                });



