// prompt user for input or allow to use program defaults
// declares and initializes userDefaults

// const usersInput = prompt("Would you like to make your own list?(empty field or cancel for no)" , "please have a space between names");
const userDefaultString = "Brandon Nick Jerrica Leonard Sharon Tennessee Nate Jake Shaina Jolene Jackie Robin Stephen";

// checks if input was a string or not
// if it's a string it turns the string into an array
// if it isn't a string it runs defaults

if (typeof(userDefaultString) == "string") {
    // creates const variable object with array stored inside
    const usersArray = userDefaultString.split(" ");
    console.log(usersArray.length);
    // objects for creating HTML elements
    let castTableRow = document.createElement("TR");
    let castTableHeader = document.createElement("TH");
    let castTableCell = document.createElement("TD");
    let castHeaderDistrict = document.createTextNode("DISTRICT");
    let castHeaderTribute = document.createTextNode("TRIBUTE");
    // create HMTL table header elements
    let tableRowNumber = 0;
    // starting with creating cell with node
    document.getElementById("cohortTable").appendChild(castTableRow).setAttribute("id", "tableRow".concat(tableRowNumber));
    document.getElementById("tableRow".concat(tableRowNumber)).appendChild(castTableHeader).setAttribute("class", "cellsByRow".concat(tableRowNumber));
    document.querySelector(".cellsByRow".concat(tableRowNumber)).appendChild(castHeaderDistrict);
    let tableHeaderClone = document.querySelector(".cellsByRow".concat(tableRowNumber)).cloneNode(false);
    console.log(tableHeaderClone);
    document.getElementById("tableRow".concat(tableRowNumber)).appendChild(tableHeaderClone).setAttribute("class", "cellsByRow".concat(tableRowNumber));
    document.getElementsByClassName("cellsByRow".concat(tableRowNumber))[1].appendChild(castHeaderTribute);
    
    // while (tableRowNumber+1 <= usersArray.length) {
    //     let castDistrictText = document.createTextNode("District ".concat(tableRowNumber+1));
    //     let castTributeText = document.createTextNode(usersArray[tableRowNumber]);
    //     tableRowNumber++;
    // }
} else {
    console.log(usersInput + " is not a string");
}