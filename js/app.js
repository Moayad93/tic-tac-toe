$(document).ready(function () {

    // Declare variable for "td"s i.e. boxes class
    const $box = $('.box');

    // Declare variables for each "td"
    const $row1_col1 = $('#col-1-1');
    const $row1_col2 = $('#col-1-2');
    const $row1_col3 = $('#col-1-3');
    const $row2_col1 = $('#col-2-1');
    const $row2_col2 = $('#col-2-2');
    const $row2_col3 = $('#col-2-3');
    const $row3_col1 = $('#col-3-1');
    const $row3_col2 = $('#col-3-2');
    const $row3_col3 = $('#col-3-3');

    // Declare a variable for player's turn
    let isFirstPlayerTurn = true;

    const tdClick = function () {
        console.log("Click Works Man!");

        if (isFirstPlayerTurn) {
            $(this).text('X');

            // To remove click event from the "td"
            $(this).unbind();
        } else {
            $(this).text('O');

            // To remove click event from the "td"
            $(this).unbind();
        }

        isFirstPlayerTurn = !isFirstPlayerTurn;
    }

    $box.click(tdClick);
});