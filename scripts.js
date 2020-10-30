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
    
    // objects for creating HTML elements
    let tableRowNumber = 0;
    let castTableRow = document.createElement("TR");
    let castTableHeader = document.createElement("TH");
    let castTableCell = document.createElement("TD");
    let castHeaderDistrict = document.createTextNode("DISTRICT");
    let castHeaderTribute = document.createTextNode("TRIBUTE");
    
    // create HMTL table header elements
    
    while (tableRowNumber <= usersArray.length){
        let tableRowId = "tableRow".concat(tableRowNumber);
        let tableCellClass = "cellsByRow".concat(tableRowNumber);
        let nodeVariableRow = "row".concat(tableRowNumber);
        if (tableRowNumber === 0) {
            nodeVariableRow = document.createElement("tr");
            document.getElementsByTagName("table")[0].append(nodeVariableRow);
            let cellNumber = 0;
            while (cellNumber <= 1) {
                let nodeVariableNum = "cell".concat(cellNumber);
                if (cellNumber === 0) {
                    nodeVariableNum = document.createElement("th");
                    nodeVariableNum.append("DISTRICT");
                    document.getElementsByTagName("tr")[tableRowNumber].append(nodeVariableNum);
                    cellNumber++;
                }
                nodeVariableNum = document.createElement("th");
                nodeVariableNum.append("TRIBUTE");
                document.getElementsByTagName("tr")[tableRowNumber].append(nodeVariableNum);
                cellNumber++;
            }
            tableRowNumber++;   
        }
        nodeVariableRow = document.createElement("tr");
        document.getElementsByTagName("table")[0].append(nodeVariableRow);
        let cellNumber = 0;
        while (cellNumber <= 1) {
            let nodeVariableNum = "cell".concat(cellNumber);
            if (cellNumber === 0) {
                nodeVariableNum = document.createElement("td");
                nodeVariableNum.append("District ".concat(tableRowNumber));
                document.getElementsByTagName("tr")[tableRowNumber].append(nodeVariableNum);
                cellNumber++;
            }
            nodeVariableNum = document.createElement("td");
            nodeVariableNum.append(usersArray[tableRowNumber-1]);
            document.getElementsByTagName("tr")[tableRowNumber].append(nodeVariableNum);
            cellNumber++;
        }
        tableRowNumber++;
    }

} else {
    console.log(usersInput + " is not a string");
}