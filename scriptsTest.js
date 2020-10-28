// prompt user for input or allow to use program defaults
// declares and initializes userDefaults

// const usersInput = prompt("Would you like to make your own list?(empty field or cancel for no)" , "please have a space between names");
const userDefaultString = "Brandon Nick Jerrica Leonard Sharon Tennessee Nate Jake Shaina Jolene Jackie Robin Stephen";

// checks if input was a string or not
// if it's a string it turns the string into an array
// if it isn't a string it runs defaults

if (typeof(userDefaultString) == "string") {
    const usersArray = userDefaultString.split(" ");

    // objects for creating HTML elements
    let castTableRow = document.createElement("TR");
    let castTableData = document.createElement("TD");
    // castTableData.appendChild(castTableData);
    let tableRowNumber = 1;
    while (tableRowNumber <= usersArray.length) {
        let rowClass = String("rowClass"+tableRowNumber);
        document.querySelector(".cohortTable").appendChild(castTableRow).setAttribute("class", rowClass);
        let numberOfCells = 1;
        while (numberOfCells <= 2) {
            let districtString = String("District "+tableRowNumber);
            let cellClass = String("cellNumber"+numberOfCells);
            document.querySelector(".rowClass"+tableRowNumber).appendChild(castTableData).setAttribute("class", cellClass);
            if (numberOfCells == 1) {
                textNode = document.createTextNode(districtString);
            } else {
                textNode = document.createTextNode(usersArray[tableRowNumber]);
            }
            numberOfCells++;
        }
        tableRowNumber++;
    }
    // document.querySelector('cohortTable')
} else {
    console.log(usersInput + " is not a string");
}