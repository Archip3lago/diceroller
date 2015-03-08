<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Tärningskit</title>
        <script src="jquery-1.11.2.min.js"></script>
        <script src="dice.js"></script>
        <link rel="stylesheet" type="text/css" href="dice.css">
    </head>
    <body>
       <div id="wrapper">
           <div class="dice one">
               <p class="firstDice"> </p>
           </div>
           <div class="dice two">
               <p class="secondDice"> </p>
           </div>
           <div class="dice three">
               <p class="thirdDice"> </p>
           </div>
           <div class="dice sum">
               <p class="diceSum"> </p>
           </div>
        </div>
        <br>
        <div id="options">
            <form>
                <input type="radio" class="radBtn" name="number" value="1">1<br>
                <input type="radio" class="radBtn" name="number" value="2">2<br>
                <input type="radio" class="radBtn" name="number" value="3">3<br>
                <input class="formBtn" type="submit" name="roll" value="Roll the dice">
            </form>
        </div>
    </body>
</html>
