let texto = document.getElementById('currentColor');

function trocar() {
    let randomNumber =  Math.floor(Math.random() * 20);
    switch (randomNumber) {
        case 0:
            document.body.style.backgroundColor = "#ff0000";
            texto.innerHTML = '<h2>background-color: <span>Red</span> </h2>';
            console.log(`current color: red, Number: 0`);
            break;

        case 1:
            document.body.style.backgroundColor = "#0011ff";
            texto.innerHTML = '<h2>background-color: <span>Blue</span> </h2>';
            console.log(`current color: blue, Number: 1`);
            break;

        case 2:
            document.body.style.backgroundColor = "#000000";
            texto.innerHTML = '<h2>background-color: <span>Black</span> </h2>';
            console.log(`current color: black, Number: 2`);
            break;

        case 3:
            document.body.style.backgroundColor = "#00ff15";
            texto.innerHTML = '<h2>background-color: <span>Green</span> </h2>';
            console.log(`current color: green, Number: 3`);
            break;
        
        case 4:
            document.body.style.backgroundColor = "#7700ff";
            texto.innerHTML = '<h2>background-color: <span>Purple</span> </h2>';
            console.log(`current color: purple, Number: 4`);
            break;

        case 5:
            document.body.style.backgroundColor = "#ff8800";
            texto.innerHTML = '<h2>background-color: <span>Orange</span> </h2>';
            console.log(`current color: orange, Number: 5`);
            break;
        
        case 6:
            document.body.style.backgroundColor = "#3f2200";
            texto.innerHTML = '<h2>background-color: <span>Brown</span> </h2>';
            console.log(`current color: brown, Number: 6`);
            break;

        case 7:
            document.body.style.backgroundColor = "#d400ff";
            texto.innerHTML = '<h2>background-color: <span>Pink</span> </h2>';
            console.log(`current color: pink, Number: 7`);
            break;
        
        case 8:
            document.body.style.backgroundColor = "#ffee00";
            texto.innerHTML = '<h2>background-color: <span>Yellow</span> </h2>';
            console.log(`current color: yellow, Number: 8`);
            break;

        case 9:
            document.body.style.backgroundColor = "#3d3d3d";
            texto.innerHTML = '<h2>background-color: <span>Gray</span> </h2>';
            console.log(`current color: gray, Number: 9`);
            break;
        case 10:
            document.body.style.backgroundColor = "#790204";
            texto.innerHTML = '<h2>background-color: <span>Red</span> </h2>';
            console.log(`current color: red, Number: 10`);
            break;

        case 11:
            document.body.style.backgroundColor = "#02A5F1";
            texto.innerHTML = '<h2>background-color: <span>Blue</span> </h2>';
            console.log(`current color: blue, Number: 11`);
            break;

        case 12:
            document.body.style.backgroundColor = "#06E3F8";
            texto.innerHTML = '<h2>background-color: <span>Blue</span> </h2>';
            console.log(`current color: black, Number: 12`);
            break;

        case 13:
            document.body.style.backgroundColor = "#006A0C";
            texto.innerHTML = '<h2>background-color: <span>Green</span> </h2>';
            console.log(`current color: green, Number: 13`);
            break;
        
        case 14:
            document.body.style.backgroundColor = "#C860F8";
            texto.innerHTML = '<h2>background-color: <span>Purple</span> </h2>';
            console.log(`current color: purple, Number: 14`);
            break;

        case 15:
            document.body.style.backgroundColor = "#C35C02";
            texto.innerHTML = '<h2>background-color: <span>Orange</span> </h2>';
            console.log(`current color: orange, Number: 15`);
            break;
        
        case 16:
            document.body.style.backgroundColor = "#5B3513";
            texto.innerHTML = '<h2>background-color: <span>Brown</span> </h2>';
            console.log(`current color: brown, Number: 16`);
            break;

        case 17:
            document.body.style.backgroundColor = "#EF0789";
            texto.innerHTML = '<h2>background-color: <span>Pink</span> </h2>';
            console.log(`current color: pink, Number: 17`);
            break;
        
        case 18:
            document.body.style.backgroundColor = "#979E18";
            texto.innerHTML = '<h2>background-color: <span>Yellow</span> </h2>';
            console.log(`current color: yellow, Number: 18`);
            break;

        case 19:
            document.body.style.backgroundColor = "#8F8F8D";
            texto.innerHTML = '<h2>background-color: <span>Gray</span> </h2>';
            console.log(`current color: gray, Number: 19`);
            break;

        default:
            texto.innerHTML = '<h2>background-color: <span>None</span> </h2>';
            console.log(`current color: none, Number: X`);
            break;
    };
};