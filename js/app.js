$(document).ready( () => {

  // Declare variable for "td"s i.e. boxes class
  const $box = $('.box');

  // Declare variables for each "td"
  const
    $row1_col1 = $('#col-1-1'),
    $row1_col2 = $('#col-1-2'),
    $row1_col3 = $('#col-1-3'),
    $row2_col1 = $('#col-2-1'),
    $row2_col2 = $('#col-2-2'),
    $row2_col3 = $('#col-2-3'),
    $row3_col1 = $('#col-3-1'),
    $row3_col2 = $('#col-3-2'),
    $row3_col3 = $('#col-3-3');

  // Declare a variable for player's turn
  let isFirstPlayerTurn = true;

  const validation = () => {

    for (let i = 1; i < 4; i++) {
      // Check matches horizontally
      if (eval("$row" + i + "_col1.text()") === 'X' && eval("$row" + i + "_col2.text()") === 'X' && eval("$row" + i + "_col3.text()") === 'X' ||
          eval("$row" + i + "_col1.text()") === 'O' && eval("$row" + i + "_col2.text()") === 'O' && eval("$row" + i + "_col3.text()") === 'O' ||

          // Check matches vertically
          eval("$row1_col" + i + ".text()") === 'X' && eval("$row2_col" + i + ".text()") === 'X' && eval("$row3_col" + i + ".text()") === 'X' ||
          eval("$row1_col" + i + ".text()") === 'O' && eval("$row2_col" + i + ".text()") === 'O' && eval("$row3_col" + i + ".text()") === 'O' ||

          // Check matches diagonally
          $row1_col1.text() === 'X' && $row2_col2.text() === 'X' && $row3_col3.text() === 'X' ||
          $row1_col1.text() === 'O' && $row2_col2.text() === 'O' && $row3_col3.text() === 'O') {

            if (isFirstPlayerTurn) {
              console.log('__________First player won!');
            } else {
              console.log('__________Second player won!');
            }
      } else if ($('.box').text().length === 9) {
        console.log('__________It\'s a tie!');
      }
    }
  }

  const tdClick = () => {
    console.log("Click Works Man!");

    if (isFirstPlayerTurn) {
      $(this).text('X');
    } else {
      $(this).text('O');
    }

    // To remove click event from the "td"
    $(this).unbind();

    validation();
    isFirstPlayerTurn = !isFirstPlayerTurn;
  }

  $box.click(tdClick);
});