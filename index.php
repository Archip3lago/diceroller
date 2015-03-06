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
               
           </div>
           <div class="dice two">
               
           </div>
           <div class="dice three">
               
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
