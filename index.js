const moves = []

document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!

  // --------- listen for arrow press
  document.addEventListener("keydown", function(event){
    if (event.key === "ArrowLeft"){
      moves.push('left')
      renderMove(moves)
    } else if (event.key === "ArrowRight"){
      moves.push('right')
      renderMove(moves)
    } else if (event.key === "ArrowUp"){
      moves.push('up')
      renderMove(moves)
    } else if (event.key === "ArrowDown"){
      moves.push('down')
      renderMove(moves)
    }
  })
  
  const ul = document.getElementById('moves-container')

  function renderMove(moves) {
    const li = document.createElement('li')
    li.textContent = moves.slice(-1)[0]
    
    ul.append(li)
  }

  // -------------  run each move -------------

  const moveButton = document.querySelector('button#move-button')

  moveButton.addEventListener("click", function(event){
      move(moves.shift())
      ul.removeChild(ul.firstChild)
  })


// ----------remove direction tiles --------

  const directionButton = document.querySelector('li')

  ul.addEventListener('click', function(event){
    // if (event === directionButton)
    //   event.remove
    console.log(event.target)
    ul.removeChild(event.target)
    movesIndex = moves.indexOf(event.target)
    console.log(movesIndex)

    // if (event.target === li)
    //   ul.removeChild('li')
      // remove from moves array 
      
  })

}) 

  
  
// function removeAllChildNodes(parent) {
//   while (parent.firstChild) {
//       parent.removeChild(parent.firstChild);
//   }
// }

// event lister
  // invokes executeMoves
  // iterates through moves list
  
  
  
  //   document.addEventListener('keydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  
  
  //   document.addEventListener('keydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  
  
  //   document.addEventListener('keydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  
  
  //   document.addEventListener('keydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  
  
  //   document.addEventListener('keydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  
  
  //   document.addEventListener('keydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  
  
  //   document.addEventListener('keydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()ydown', logKey);
  
  //   function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    //   }
    // // 
//   })extContent += ` ${e.code}`;
// //   }
// function renderDirectionButton()