// prompt user for input or allow to use program defaults
// declares and initializes userDefaults

const usersInput = prompt("Would you like to make your own list?(empty field or cancel for no)" , "space between each name");
const userDefaultString = "Brandon Jackie Jake Jerrica Jolene Leonard Nate Nick Robin Shaina Sharon Stephen Tennessee";

// checks if input was a string or not
// if it's a string it turns the string into an array
// if it isn't a string it runs defaults

if (typeof(usersInput) == "string") {
    // creates const variable object with array stored inside
    const usersArray = usersInput.split(" ");
    
    // iterator variable for use in loops
    let tableRowNumber = 0;
    
    // loops while table rows are less than userInput array length
    // first loop that runs while tableRowNumber 0
    while (tableRowNumber <= usersArray.length){
        // example of iterative variable
        let nodeVariableRow = "row".concat(tableRowNumber);
        if (tableRowNumber === 0) {
            nodeVariableRow = document.createElement("tr");
            document.getElementsByTagName("table")[0].append(nodeVariableRow);
            let cellNumber = 0;
            // loops twice to make first in given table row
            // makes first cell of given row
            while (cellNumber <= 1) {
                // example of iterative variable
                let nodeVariableNum = "cell".concat(cellNumber);
                if (cellNumber === 0) {
                    nodeVariableNum = document.createElement("th");
                    nodeVariableNum.append("DISTRICT");
                    document.getElementsByTagName("tr")[tableRowNumber].append(nodeVariableNum);
                    cellNumber++;
                }
                // makes second cell of given row
                nodeVariableNum = document.createElement("th");
                nodeVariableNum.append("TRIBUTE");
                document.getElementsByTagName("tr")[tableRowNumber].append(nodeVariableNum);
                cellNumber++;
            }
            tableRowNumber++;   
        }
        // loops while table rows are less than userInput array length
        // this loop activates after tableRowNumber is greater than 0
        nodeVariableRow = document.createElement("tr");
        document.getElementsByTagName("table")[0].append(nodeVariableRow);
        let cellNumber = 0;
        // creates table data cells
        // creates first cell of given row
        while (cellNumber <= 1) {
            // example of iterative variable
            let nodeVariableNum = "cell".concat(cellNumber);
            if (cellNumber === 0) {
                nodeVariableNum = document.createElement("td");
                nodeVariableNum.append("District ".concat(tableRowNumber));
                document.getElementsByTagName("tr")[tableRowNumber].append(nodeVariableNum);
                cellNumber++;
            }
            // creates second cell of given row
            nodeVariableNum = document.createElement("td");
            nodeVariableNum.append(usersArray[tableRowNumber-1]);
            document.getElementsByTagName("tr")[tableRowNumber].append(nodeVariableNum);
            cellNumber++;
        }
        tableRowNumber++;
    }

} else {
    // creates array out of default string
    const usersArray = userDefaultString.split(" ");
    
    // iterator variable for use in loops
    let tableRowNumber = 0;
    
    // loops while table rows are less than userInput array length
    // first loop that runs while tableRowNumber 0
    while (tableRowNumber <= usersArray.length){
        // example of iterative variable
        let nodeVariableRow = "row".concat(tableRowNumber);
        if (tableRowNumber === 0) {
            nodeVariableRow = document.createElement("tr");
            document.getElementsByTagName("table")[0].append(nodeVariableRow);
            let cellNumber = 0;
            // loops twice to make first in given table row
            // makes first cell of given row
            while (cellNumber <= 1) {
                // example of iterative variable
                let nodeVariableNum = "cell".concat(cellNumber);
                if (cellNumber === 0) {
                    nodeVariableNum = document.createElement("th");
                    nodeVariableNum.append("DISTRICT");
                    document.getElementsByTagName("tr")[tableRowNumber].append(nodeVariableNum);
                    cellNumber++;
                }
                // makes second cell of given row
                nodeVariableNum = document.createElement("th");
                nodeVariableNum.append("TRIBUTE");
                document.getElementsByTagName("tr")[tableRowNumber].append(nodeVariableNum);
                cellNumber++;
            }
            tableRowNumber++;   
        }
        // loops while table rows are less than userInput array length
        // this loop activates after tableRowNumber is greater than 0
        nodeVariableRow = document.createElement("tr");
        document.getElementsByTagName("table")[0].append(nodeVariableRow);
        let cellNumber = 0;
        // creates table data cells
        // creates first cell of given row
        while (cellNumber <= 1) {
            // example of iterative variable
            let nodeVariableNum = "cell".concat(cellNumber);
            if (cellNumber === 0) {
                nodeVariableNum = document.createElement("td");
                nodeVariableNum.append("District ".concat(tableRowNumber));
                document.getElementsByTagName("tr")[tableRowNumber].append(nodeVariableNum);
                cellNumber++;
            }
            // creates second cell of given row
            nodeVariableNum = document.createElement("td");
            nodeVariableNum.append(usersArray[tableRowNumber-1]);
            document.getElementsByTagName("tr")[tableRowNumber].append(nodeVariableNum);
            cellNumber++;
        }
        tableRowNumber++;
    }
    // assigns id to each table row element

    classIterator = 0;

    while (classIterator <= usersArray.length) {
        // example of iterative variable
        let rowId = "row".concat(classIterator);
        document.getElementsByTagName("tr")[classIterator].setAttribute("id", rowId);
        classIterator++;
    }
}

// function randomNameDraw() {
//     if (usersInput != null) {
//         let usersRandArray = usersInput.split(" ");
//         let randomName = Math.floor(Math.random()* usersRandArray.length);
//         //place name to be spliced so it can be edited
//         usersRandArray.splice(randomName, 1);
//     }
// }
