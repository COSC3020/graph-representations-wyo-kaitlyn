// convert from list to matrix
function convertToAdjMatrix(adjList) {
    let adjMatrix = [];

    if(adjList && adjList.length) {
        // creating matrix full of zeros
        for(let i = 0; i < adjList.length; i++) {
            adjMatrix[i] = [];
            for(let j = 0; j < adjList.length; j++) {
                adjMatrix[i][j] = 0;
            }
        }

        // adding in edges
        let edge = 0;
        for(let i = 0; i < adjList.length; i++) {
            for(let j = 0; j < adjList[i].length; j++) {
                edge = adjList[i][j];
                adjMatrix[i][edge] = 1;
            }
        }
    }

    return adjMatrix;
}

// convert from matrix to list
function convertToAdjList(adjMatrix) {
    let adjList = [];

    if(adjMatrix && adjMatrix.length) { //makes sure matrix exists and is not empty
        for(let i = 0; i < adjMatrix.length; i++) {
            adjList[i] = [];
            for(let j = 0; j < adjMatrix[i].length; j++) {
                if(adjMatrix[i][j] != 0) {
                    adjList[i].push(j);
                }
            }
        }
    }

    return adjList;
}