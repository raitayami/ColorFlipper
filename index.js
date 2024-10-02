

const bg = document.querySelector('body');
const colorDisplayTitle = document.querySelector('.plainColor');
const btn = document.getElementById('plainColorBtn');

const getPlainColor = () => {
    const randColors = [
        "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", 
      "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", 
      "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", 
      "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", 
      "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", 
      "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", 
      "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", 
      "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", 
      "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", 
      "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", 
      "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", 
      "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", 
      "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", 
      "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", 
      "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", 
      "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", 
      "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", 
      "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", 
      "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", 
      "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", 
      "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", 
      "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", 
      "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", 
      "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
    ]

    const randColorNum = () => {
        return Math.floor(Math.random() * randColors.length);
    }

    const hardCodedColor = `${randColors[randColorNum()]}`


    bg.style.background = hardCodedColor;
    colorDisplayTitle.innerHTML = hardCodedColor;
}


btn.addEventListener('click', getPlainColor)

//Hex code 

const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
const randNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const hexCodeArr = [lowerCaseLetters, randNum];


const chooseRandomCharacter = () => {
    let num = Math.floor(Math.random() * hexCodeArr.length)
    let num2 = hexCodeArr[num].length
    let character = hexCodeArr[num][Math.floor(Math.random()*num2)]
    return character;
}

const createHexCode = () => {
    return `#${chooseRandomCharacter()}${chooseRandomCharacter()}${chooseRandomCharacter()}${chooseRandomCharacter()}${chooseRandomCharacter()}${chooseRandomCharacter()}`
    
}



const hexBtn = document.getElementById('hexColorBtn');

const hexColorCode = document.querySelector('.hexColorCode')

const getHexColor = () => {
    let code = createHexCode();

    hexColorCode.innerHTML = code;
    bg.style.backgroundColor = code;
}

hexBtn.addEventListener('click', getHexColor)




//The navigation

const hardCodedHeading = document.getElementById('hardCodedHeading');

const hexColorHeading = document.getElementById('hexColorHeading')

const hexDisplay = document.querySelector('.hexColorDisplay');

const hardCodedDisplay = document.querySelector('.hardCodedDisplay');

hexColorHeading.addEventListener('click', ()=>{
    hexDisplay.classList.remove('hexColorDisplay')
    hexDisplay.classList.add('hardCodedDisplay')
    hardCodedDisplay.classList.remove('hardCodedDisplay')
    hardCodedDisplay.classList.add('hexColorDisplay')
    getHexColor()
})


hardCodedHeading.addEventListener('click', ()=>{
    hexDisplay.classList.add('hexColorDisplay')
    hexDisplay.classList.remove('hardCodedDisplay')
    hardCodedDisplay.classList.add('hardCodedDisplay')
    hardCodedDisplay.classList.remove('hexColorDisplay')
    getPlainColor()
})



