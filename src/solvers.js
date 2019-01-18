/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  let solution = new Board({"n":n});
  let colIndex = 0;
  let rowIndex = 0;
  for(; colIndex < n, rowIndex < n; rowIndex++, colIndex++){
    solution.togglePiece(rowIndex, colIndex);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // solutions
  let solutionCount = 0;
  //creating a new board
  let newBoard = new Board({n: n});
  //if we only have 1 square we return 1
  if(n === 1){
    return 1;
  }
  //otherwise we create a new function to run through the table
  let recurse = function(row){
    //if we passed the last row 
    if(row === n){
      //then we have a solution
      solutionCount++;
      //and stop the current function
      return "WHOOOOO";
    }
    //this loop is for the columns
    for(let i = 0; i < n; i++){
      //toggle the piece on
      newBoard.togglePiece(row, i);
      if(newBoard.hasAnyRooksConflicts() === false){
        recurse(row + 1);
      }
      newBoard.togglePiece(row, i);
    }
  }
  recurse(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  
  let solution = new Board({ "n": n });
  if(n === 2 || n === 3){
    return solution.rows();
  }
  //creating a new board
  //if we only have 1 square we return 1
  //otherwise we create a new function to run through the table
  let recurse = function (row) {
    //if we passed the last row 
    if (row === n) {
      //then we have a solution
      //and stop the current function
      return solution.rows();
    }
    //this loop is for the columns
    for (let i = 0; i < n; i++) {
      //toggle the piece on
      solution.togglePiece(row, i);
      debugger;
      if (solution.hasAnyQueensConflicts() === false) {
        let result = recurse(row + 1);
        if(result){
          return result;
        }
      }
      solution.togglePiece(row, i);
    }
  }
  return recurse(0);
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // solutions
  let solutionCount = 0;
  //creating a new board
  let newBoard = new Board({ n: n });
  //if we only have 1 square we return 1
  if (n === 1) {
    return 1;
  }
  //otherwise we create a new function to run through the table
  let recurse = function (row) {
    //if we passed the last row 
    if (row === n) {
      //then we have a solution
      solutionCount++;
      //and stop the current function
      return "WHOOOOO";
    }
    //this loop is for the columns
    for (let i = 0; i < n; i++) {
      //toggle the piece on
      newBoard.togglePiece(row, i);
      if (newBoard.hasAnyQueensConflicts() === false) {
        recurse(row + 1);
      }
      newBoard.togglePiece(row, i);
    }
  }
  recurse(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
