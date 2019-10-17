$(document).ready(function () {

  // Declare const variables
  const
    $body         = $('body'),
    $header       = $('header'),
    $main         = $('main'),
    $box          = $('.box'),
    $boxText      = $('.box').text(),
    $clickedBoxes = [],
    $reset        = $('#reset'),
    $newGame      = $('#newGame'),
    $welcome      = $('#welcome'),
    $welcomeDiv   = $('#welcome div'),
    $row1_col1    = $('#col-1-1'),
    $row1_col2    = $('#col-1-2'),
    $row1_col3    = $('#col-1-3'),
    $row2_col1    = $('#col-2-1'),
    $row2_col2    = $('#col-2-2'),
    $row2_col3    = $('#col-2-3'),
    $row3_col1    = $('#col-3-1'),
    $row3_col2    = $('#col-3-2'),
    $row3_col3    = $('#col-3-3'),
    $footer       = $('footer');

  // Declare let variables
  let
    $isXPlayerTurn    = true,
    $xPlayerScore     = 0,
    $oPlayerScore     = 0,
    $xPlayerScoreText = $('#xScoreText'),
    $oPlayerScoreText = $('#oScoreText'),
    $turnMessage      = $('#turnMessage'),
    $winMessage       = $('#winMessage');

  // Fade in welcome div content
  $welcomeDiv.fadeIn('slow');

  // Fade out welcome div
  fadeWelcomeDiv = function () {

    $welcome.fadeOut('slow');
  }

  $welcome.click(fadeWelcomeDiv);

  // Validate who's the winner or if the game is tie
  const validation = function () {

    for (let i = 1; i < 4; i++) {
      if (
        // Check the winner horizontally
        (eval("$row" + i + "_col1.text()") === 'X' && eval("$row" + i + "_col2.text()") === 'X' && eval("$row" + i + "_col3.text()") === 'X') ||
        (eval("$row" + i + "_col1.text()") === 'O' && eval("$row" + i + "_col2.text()") === 'O' && eval("$row" + i + "_col3.text()") === 'O') ||

        // Check the winner vertically
        (eval("$row1_col" + i + ".text()") === 'X' && eval("$row2_col" + i + ".text()") === 'X' && eval("$row3_col" + i + ".text()") === 'X') ||
        (eval("$row1_col" + i + ".text()") === 'O' && eval("$row2_col" + i + ".text()") === 'O' && eval("$row3_col" + i + ".text()") === 'O') ||

        // Check the winner diagonally
        ($row1_col1.text() === 'X' && $row2_col2.text() === 'X' && $row3_col3.text() === 'X') ||
        ($row1_col1.text() === 'O' && $row2_col2.text() === 'O' && $row3_col3.text() === 'O') ||
        ($row1_col3.text() === 'X' && $row2_col2.text() === 'X' && $row3_col1.text() === 'X') ||
        ($row1_col3.text() === 'O' && $row2_col2.text() === 'O' && $row3_col1.text() === 'O')) {

          // Update the score panel depend on the winner
          if ($isXPlayerTurn) {
            $xPlayerScore += 1;
            $xPlayerScoreText.text($xPlayerScore);
            $winMessage.fadeIn('slow');
            $winMessage.text('X Player Won!');
            tdReset();
            return;
          } else {
            $oPlayerScore += 1;
            $oPlayerScoreText.text($oPlayerScore);
            $winMessage.fadeIn('slow');
            $winMessage.text('O Player Won!');
            tdReset();
            return;
          }

      } // Check the tie
        else if ($('.box').text().length === 9) {
        $winMessage.fadeIn('slow');
        $winMessage.text('It\'s a tie!');
        tdReset();
        return;
      }
    }

    // Cal switch turns function
    setTimeout(switchTurn, 10);
  }

  // Change turns between players
  const switchTurn = function () {

    $isXPlayerTurn = !$isXPlayerTurn;
  }

  // Click event
  const tdClick = function () {

    $winMessage.css('display', 'none');

    // Ternary if condition
    ($isXPlayerTurn) ?
    $(this).text('X') && $turnMessage.text('It\'s O player turn').fadeIn('slow'):
    $(this).text('O') && $turnMessage.text('It\'s X player turn').fadeIn('slow');
    $(this).css('transform', 'scale(1)');
    // To remove click event from the "td"
    $(this).unbind();

    $clickedBoxes.push($(this));

    validation();
  }

  $box.click(tdClick);

  // Hover event
  const tdHover = function () {

    $(this).css('transform', 'scale(1.1)');

    // Ternary if condition
    ($isXPlayerTurn) ? $(this).text('X') : $(this).text('O');
  }

  $box.hover(tdHover);

  // Mouse leave event
  const tdMouseLeave = function () {

    $(this).css('transform', 'scale(1)');
    $(this).unbind('mouseenter mouseleave', $(this).text(''));
  }

  $box.mouseleave(tdMouseLeave);

  // Reset event
  const tdReset = function () {

    // Function to unbind the remaining click events on some tds
    $box.each(function () {

      if ($(this).text() === '') {
        $(this).unbind();
      }
    });

    $box.text('');
    $isXPlayerTurn = true;
    $turnMessage.text('');
    $box.click(tdClick);
    $box.hover(tdHover);
    $box.mouseleave(tdMouseLeave);
  }

  $reset.click(tdReset);

  // Start new game
  const newGameButton = function() {

    $('#xScoreText').text('');
    $('#oScoreText').text('');
    $('#turnMessage').text('');
    $('#winMessage').text('');
    $xPlayerScore = 0;
    $oPlayerScore = 0;
    tdReset();
  }

  $newGame.click(newGameButton);

  // Change to Blue Gray Theme
  const blueGrayTheme = function() {

    $body.css('color', '#FAFAFA');
    $header.css('background-color', '#212121');
    $main.css('background-color', '#263238');
    $footer.css('background-color', '#212121');
  }

  $('#blueGrayButton').click(blueGrayTheme);

  // Change to Off WhiteTheme
  const offWhiteTheme = function () {

    $body.css('color', '#212121');
    $header.css('background-color', '#FAFAFA');
    $main.css('background-color', '#ECEFF1');
    $footer.css('background-color', '#FAFAFA');
  }

  $('#offWhiteButton').click(offWhiteTheme);
});