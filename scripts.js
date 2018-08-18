// Listens for the page to load, then runs a function().
document.addEventListener("DOMContentLoaded", function() {
    let divContainer = document.createElement("div"); // Creates <div> tag.
    divContainer.className = "header-container"; // Gives a class name / applies styling via Bootstrap 4.

    let hOne = document.createElement("h1"); // Creates a <h1> element.
    let hOneTxt = document.createTextNode("This is an h1!"); // Creates textual content.
    hOne.appendChild(hOneTxt); // Places the textual content into the <h1> element.
    hOne.className = "h1"; // Assigns a class of "h1".
    divContainer.appendChild(hOne); // Places the <h1> element into the <div class="header-container"> tag.
    document.body.appendChild(divContainer); // Places the <div class="header-container"> tag into the <body> element.

    let hTwo = document.createElement("h2"); // Creates a <h2> element.
    let hTwoTxt = document.createTextNode("This is an h2!"); // Creates textual content.
    hTwo.appendChild(hTwoTxt); // Places the textual content into the <h2> element.
    hTwo.className = "h2"; // Assigns a class of "h2".
    divContainer.appendChild(hTwo); // Places the <h2> element into the <div> tag.
    
    let hThree = document.createElement("h3"); // Creates a <h3> element.
    let hThreeTxt = document.createTextNode("This is an h3!");
    hThree.appendChild(hThreeTxt);
    hThree.className = "h3"; // Assigns a class of "h3".
    divContainer.appendChild(hThree);

    let hFour = document.createElement("h4"); // Creates a <h4> element.
    let hFourTxt = document.createTextNode("This is an h4!");
    hFour.appendChild(hFourTxt);
    hFour.className = "h4"; // Assigns a class of "h4".
    divContainer.appendChild(hFour);

    let hFive = document.createElement("h5"); // Creates a <h5> element.
    let hFiveTxt = document.createTextNode("This is an h5!");
    hFive.appendChild(hFiveTxt);
    hFive.className = "h5"; // Assigns a class name of "h5".
    divContainer.appendChild(hFive);

    let hSix = document.createElement("h6"); // Creates a <h6> element.
    let hSixTxt = document.createTextNode("This is an h6!");
    hSix.appendChild(hSixTxt);
    hSix.className = "h6"; // Assigns a class name of "h6".
    divContainer.appendChild(hSix);

    // An array of 'myColors'.
    let myColors = [
        "#007bff", // Primary
        "#6c757d", // Secondary
        "#28a745", // Success
        "#dc3545", // Danger
        "#ffc107", // Warning
        "#17a2b8", // Info
        "#f8f9fa", // Light
        "#343a40" // Dark
    ];

    // Listens for the <h1> to be clicked, then runs a function().
    hOne.addEventListener("click", function() {
        // Randomly selects an item from 'myColors'.
        let myNewColor = myColors[Math.floor(Math.random()*myColors.length)];
        // console.log(myNewColor); // Should print - Each item (hexadecimal color values).
        hOne.style.color = myNewColor;
    });

    let btn = document.createElement("button"); // Creates a <button> element.
    let btnTxt = document.createTextNode("Click to add new list item"); 
    btn.appendChild(btnTxt);
    btn.className = "btn btn-lg btn-outline-secondary"; // Gives a class name / applies styling via Bootstrap 4.
    divContainer.appendChild(btn);

    // Listens for the <button> to be clicked, then runs a function().
});