// if( $('.message').is(':hidden') ) {
//   $('.message1').fadeIn('slow');
//   return false;
// }

$(document).ready(function () {

  // Declare a variable for "td"s i.e. boxes class and variables for each "td"'s id
  const
    $body = $('body')
  $header = $('header'),
    $main = $('main'),
    $box = $('.box'),
    $boxText = $('.box').text(),
    $clickedBoxes = [],
    $reset = $('#reset'),
    $welcome = $('#welcome')
  $welcomeDiv = $('#welcome div'),
    $row1_col1 = $('#col-1-1'),
    $row1_col2 = $('#col-1-2'),
    $row1_col3 = $('#col-1-3'),
    $row2_col1 = $('#col-2-1'),
    $row2_col2 = $('#col-2-2'),
    $row2_col3 = $('#col-2-3'),
    $row3_col1 = $('#col-3-1'),
    $row3_col2 = $('#col-3-2'),
    $row3_col3 = $('#col-3-3');
  $footer = $('footer');

  // Declare a variable for player's turn xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  let
    $isXPlayerTurn = true,
    $xPlayerScore = 0,
    $oPlayerScore = 0,
    $xPlayerScoreText = $('#xScoreText'),
    $oPlayerScoreText = $('#oScoreText'),
    $turnMessage = $('#turnMessage'),
    $winMessage = $('#winMessage');

  // Fade in welcome content
  $welcomeDiv.fadeIn('slow');

  // Fade out welcome div
  fadeWelcomeDiv = function () {
    $welcome.fadeOut('slow');
  }

  $welcome.click(fadeWelcomeDiv);

  // Validation function
  const validation = function () {
    console.log('validation');
    for (let i = 1; i < 4; i++) {
      console.log('For loop');
      if ($boxText.length === 9) {
        console.log('__________It\'s a tie!');
        $winMessage.fadeIn('slow');
        $winMessage.text('It\'s a tie!');
        tdReset();
        return;
      } else if (
        // Check winner horizontally
        (eval("$row" + i + "_col1.text()") === 'X' && eval("$row" + i + "_col2.text()") === 'X' && eval("$row" + i + "_col3.text()") === 'X') ||
        (eval("$row" + i + "_col1.text()") === 'O' && eval("$row" + i + "_col2.text()") === 'O' && eval("$row" + i + "_col3.text()") === 'O') ||

        // Check winner vertically
        (eval("$row1_col" + i + ".text()") === 'X' && eval("$row2_col" + i + ".text()") === 'X' && eval("$row3_col" + i + ".text()") === 'X') ||
        (eval("$row1_col" + i + ".text()") === 'O' && eval("$row2_col" + i + ".text()") === 'O' && eval("$row3_col" + i + ".text()") === 'O') ||

        // Check winner diagonally
        ($row1_col1.text() === 'X' && $row2_col2.text() === 'X' && $row3_col3.text() === 'X') ||
        ($row1_col1.text() === 'O' && $row2_col2.text() === 'O' && $row3_col3.text() === 'O') ||
        ($row1_col3.text() === 'X' && $row2_col2.text() === 'X' && $row3_col1.text() === 'X') ||
        ($row1_col3.text() === 'O' && $row2_col2.text() === 'O' && $row3_col1.text() === 'O')
      ) {

        if ($isXPlayerTurn) {
          $xPlayerScore += 1;
          $xPlayerScoreText.text($xPlayerScore);
          console.log($xPlayerScore, '__________First player won!');
          $winMessage.fadeIn('slow');
          $winMessage.text('X Player Won!');
          tdReset();
          return;
        } else {
          $oPlayerScore += 1;
          $oPlayerScoreText.text($oPlayerScore);
          console.log($oPlayerScore, '__________Second player won!');
          $winMessage.fadeIn('slow');
          $winMessage.text('O Player Won!');
          tdReset();
          return;
        }
      }
    }
    // setTimeout(switchTurn, 10);
    switchTurn();
  }

  // Change turn
  const switchTurn = function () {
    console.log('switchTurn');
    console.log('___________switchTurn___________');
    $isXPlayerTurn = !$isXPlayerTurn;
  }

  // Click event
  const tdClick = function () {
    console.log("Click Works Man!");
    $winMessage.css('display', 'none');
    ($isXPlayerTurn) ?
    $(this).text('X') && $turnMessage.text('It\'s O player turn').fadeIn('slow'):
    $(this).text('O') && $turnMessage.text('It\'s X player turn').fadeIn('slow');
    $(this).css('transform', 'scale(1)');
    // To remove click event from the "td"
    $(this).unbind();

    $clickedBoxes.push($(this));
    console.log($clickedBoxes);

    validation();

    // Magic line to swith turns
    // setTimeout(switchTurn, 0);

  }

  $box.click(tdClick);

  // Hover event
  const tdHover = function () {
    console.log('tdHover');
    $(this).css('transform', 'scale(1.1)');
    ($isXPlayerTurn) ? $(this).text('X') : $(this).text('O');
  }

  $box.hover(tdHover);

  // Mouse leave event
  const tdMouseLeave = function () {
    console.log('tdMouseLeave');
    $(this).css('transform', 'scale(1)');
    $(this).unbind('mouseenter mouseleave', $(this).text(''));
  }

  $box.mouseleave(tdMouseLeave);

  // Reset event
  const tdReset = function () {
    console.log('tdReset');
    console.log('____________tdReset__________');

    $box.each(function () {
      console.log('entered box each');

      if ($(this).text() === '') {
        console.log('checked boxed by include');
        $(this).unbind();
      }

    });

    $box.text('');

    switchTurn();
    $turnMessage.text('');
    $box.click(tdClick);
    $box.hover(tdHover);
    $box.mouseleave(tdMouseLeave);
  }

  $reset.click(tdReset);

  // Change themes
  const blueGrayTheme = function () {
    $body.css('color', '#FAFAFA');
    $header.css('background-color', '#212121');
    $main.css('background-color', '#263238');
    $footer.css('background-color', '#212121');

    // $box.hover(function() {
    //   $(this).css('background-color','#B0BEC5');
    // }, function() {
    //   $(this).css('background-color','transparent');
    // });
  }

  $('#blueGrayButton').click(blueGrayTheme);

  const offWhiteTheme = function () {
    $body.css('color', '#212121');
    $header.css('background-color', '#FAFAFA');
    $main.css('background-color', '#ECEFF1');
    $footer.css('background-color', '#FAFAFA');

    // $box.hover(function() {
    //   $(this).css('background-color','#B0BEC5');
    // }, function() {
    //   $(this).css('background-color','transparent');
    // });
  }

  $('#offWhiteButton').click(offWhiteTheme);
});