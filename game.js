function myfunc(){
    var b1 ,b2 ,b3 ,b4 ,b5 ,b6 ,b7 ,b8 ,b9 ;

    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
     
    // 1 : Start conditions for first Row 1 , 2 , 3 ..............
    if(( b1 == 'x' || b1 == 'X' ) && ( b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X') ){
        document.getElementById("print").innerHTML = "Player X is Won" ;
        document.getElementById("b4").disabled = true ;
        document.getElementById("b5").disabled = true ;
        document.getElementById("b6").disabled = true ;
        document.getElementById("b7").disabled = true ;
        document.getElementById("b8").disabled = true ;
        document.getElementById("b9").disabled = true ;
        window.alert("Player X is Won");
    }
    // 2 : Start conditions for first Column 1 , 4 , 7..............
    else if(( b1 == 'x' || b1 == 'X' ) && ( b4 == 'x' || b4 == 'X' ) && ( b7 == 'x' || b7 == 'X' )){
        document.getElementById("print").innerHTML = "Player X is Won" ;
        document.getElementById("b2").disabled = true ;
        document.getElementById("b3").disabled = true ;
        document.getElementById("b5").disabled = true ;
        document.getElementById("b6").disabled = true ;
        document.getElementById("b8").disabled = true ;
        document.getElementById("b9").disabled = true ;
        window.alert("Player X is Won");
    }
    // 3 : Start conditions for third Row 7 , 8 , 9..............
    else if ( ( b7 == 'x' || b7 == 'X' ) && ( b8 == 'x' || b8 == 'X' ) && ( b9 == 'x' || b9 == 'X' )){
        document.getElementById("print").innerHTML = "Player X is Won" ;
        document.getElementById("b1").disabled = true ;
        document.getElementById("b2").disabled = true ;
        document.getElementById("b3").disabled = true ;
        document.getElementById("b4").disabled = true ;
        document.getElementById("b5").disabled = true ;
        document.getElementById("b6").disabled = true ;
        window.alert ("Player X is Won") ;
    }
     // 4 : Start conditions for third Column 3 , 6 , 9..............
     else if ( ( b3 == 'x' || b3 == 'X' ) && ( b6 == 'x' || b6 == 'X' ) && ( b9 == 'x' || b9 == 'X' )){
        document.getElementById("print").innerHTML = "Player X is Won" ;
        document.getElementById("b1").disabled = true ;
        document.getElementById("b2").disabled = true ;
        document.getElementById("b4").disabled = true ;
        document.getElementById("b5").disabled = true ;
        document.getElementById("b7").disabled = true ;
        document.getElementById("b8").disabled = true ;
        window.alert ("Player X is Won") ;
     }
     // 5 : Start conditions for main diagonal 1 , 5 , 9..............
     else if ( ( b1 == 'x' || b1 == 'X' ) && ( b5 == 'x' || b5 == 'X' ) && ( b9 == 'x' || b9 == 'X' )){
        document.getElementById("print").innerHTML = "Player X is Won" ;
        document.getElementById("b2").disabled = true ;
        document.getElementById("b3").disabled = true ;
        document.getElementById("b4").disabled = true ;
        document.getElementById("b6").disabled = true ;
        document.getElementById("b7").disabled = true ;
        document.getElementById("b8").disabled = true ;
        window.alert ("Player X is Won") ;
     }
     // 6 : Start conditions for secondary diagonal 3 , 5 , 7..............
     else if (( b3 == 'x' || b3 == 'X' ) && ( b5 == 'x' || b5 == 'X' ) && ( b7 == 'x' || b7 == 'X' )) {
        document.getElementById("print").innerHTML = "Player X is Won" ;
        document.getElementById("b1").disabled = true ;
        document.getElementById("b2").disabled = true ;
        document.getElementById("b4").disabled = true ;
        document.getElementById("b6").disabled = true ;
        document.getElementById("b8").disabled = true ;
        document.getElementById("b9").disabled = true ;
        window.alert("Player X is Won") ;
     } 
     // 7 : Start conditions for second column 2 , 5 , 8.............. 
     else if (( b2 == 'x' || b2 == 'X') && ( b5 == 'x' || b5 == 'X' ) && ( b8 == 'x' || b8 == 'X' )){
         document.getElementById("print").innerHTML = "Player X is Won" ;
         document.getElementById("b1").disabled = true ;
         document.getElementById("b3").disabled = true 
         document.getElementById("b4").disabled = true ;
         document.getElementById("b6").disabled = true ;
         document.getElementById("b7").disabled = true ;
         document.getElementById("b9").disabled = true ;
         window.alert("Player X is Won") ;
     }
      // 8 : Start conditions for second Row 4 , 5 , 6.............. 
      else if (( b4 == 'x' || b4 == 'X') && ( b5 == 'x' || b5 == 'X' ) && ( b6 == 'x' || b6 == 'X' )){
        document.getElementById("print").innerHTML = "Player X is Won" ;
        document.getElementById("b1").disabled = true ;
        document.getElementById("b2").disabled = true 
        document.getElementById("b3").disabled = true ;
        document.getElementById("b7").disabled = true ;
        document.getElementById("b8").disabled = true ;
        document.getElementById("b9").disabled = true ;
        window.alert("Player X is Won") ;
      }
      // check for player x is finish ................
      // Start the conition of player 0 ..............
      // 1 : Start conditions for first Row of Player 0 = > 1 , 2 , 3 ..............
      else if(( b1 == '0' || b1 == '0' ) && ( b2 == '0' || b2 == '0') && ( b3 == '0' || b3 == '0' ) ){
        document.getElementById("print").innerHTML = "Player 0 is Won" ;
        document.getElementById("b4").disabled = true ;
        document.getElementById("b5").disabled = true ;
        document.getElementById("b6").disabled = true ;
        document.getElementById("b7").disabled = true ;
        document.getElementById("b8").disabled = true ;
        document.getElementById("b9").disabled = true ;
        window.alert("Player 0 is Won");
    }
      // 2 : Start conditions for first Column of Player 0 = > 1 , 4 , 7..............
      else if(( b1 == '0' || b1 == '0' ) && ( b4 == '0' || b4 == '0' ) && ( b7 == '0' || b7 == '0' )){
        document.getElementById("print").innerHTML = "Player 0 is Won" ;
        document.getElementById("b2").disabled = true ;
        document.getElementById("b3").disabled = true ;
        document.getElementById("b5").disabled = true ;
        document.getElementById("b6").disabled = true ;
        document.getElementById("b8").disabled = true ;
        document.getElementById("b9").disabled = true ;
        window.alert("Player 0 is Won");
    }
    // 3 : Start conditions for third Row  of Player 0 = > 7 , 8 , 9..............
    else if ( ( b7 == '0' || b7 == '0' ) && ( b8 == '0' || b8 == '0' ) && ( b9 == '0' || b9 == '0' )){
        document.getElementById("print").innerHTML = "Player 0 is Won" ;
        document.getElementById("b1").disabled = true ;
        document.getElementById("b2").disabled = true ;
        document.getElementById("b3").disabled = true ;
        document.getElementById("b4").disabled = true ;
        document.getElementById("b5").disabled = true ;
        document.getElementById("b6").disabled = true ;
        window.alert ("Player 0 is Won") ;
    }
     // 4 : Start conditions for third Column of Player 0 = > 3 , 6 , 9..............
     else if ( ( b3 == '0' || b3 == '0' ) && ( b6 == '0' || b6 == '0' ) && ( b9 == '0' || b9 == '0' )){
        document.getElementById("print").innerHTML = "Player 0 is Won" ;
        document.getElementById("b1").disabled = true ;
        document.getElementById("b2").disabled = true ;
        document.getElementById("b4").disabled = true ;
        document.getElementById("b5").disabled = true ;
        document.getElementById("b7").disabled = true ;
        document.getElementById("b8").disabled = true ;
        window.alert ("Player 0 is Won") ;
     }
      // 5 : Start conditions for main diagonal of Player 0 = > 1 , 5 , 9..............
      else if ( ( b1 == '0' || b1 == '0' ) && ( b5 == '0' || b5 == '0' ) && ( b9 == '0' || b9 == '0' )){
        document.getElementById("print").innerHTML = "Player 0 is Won" ;
        document.getElementById("b2").disabled = true ;
        document.getElementById("b3").disabled = true ;
        document.getElementById("b4").disabled = true ;
        document.getElementById("b6").disabled = true ;
        document.getElementById("b7").disabled = true ;
        document.getElementById("b8").disabled = true ;
        window.alert ("Player 0 is Won") ;
     }
     // 6 : Start conditions for secondary diagonal of Player 0 = > 3 , 5 , 7..............
     else if (( b3 == '0' || b3 == '0' ) && ( b5 == '0' || b5 == '0' ) && ( b7 == '0' || b7 == '0' )) {
        document.getElementById("print").innerHTML = "Player 0 is Won" ;
        document.getElementById("b1").disabled = true ;
        document.getElementById("b2").disabled = true ;
        document.getElementById("b4").disabled = true ;
        document.getElementById("b6").disabled = true ;
        document.getElementById("b8").disabled = true ;
        document.getElementById("b9").disabled = true ;
        window.alert("Player 0 is Won") ;
     } 
     // 7 : Start conditions for second column  of Player 0 = >2 , 5 , 8.............. 
     else if (( b2 == '0' || b2 == '0') && ( b5 == '0' || b5 == '0' ) && ( b8 == '0' || b8 == '0' )){
         document.getElementById("print").innerHTML = "Player 0 is Won" ;
         document.getElementById("b1").disabled = true ;
         document.getElementById("b3").disabled = true 
         document.getElementById("b4").disabled = true ;
         document.getElementById("b6").disabled = true ;
         document.getElementById("b7").disabled = true ;
         document.getElementById("b9").disabled = true ;
         window.alert("Player 0 is Won") ;
     }
      // 8 : Start conditions for second Row  of Player 0 = > 4 , 5 , 6.............. 
      else if (( b4 == '0' || b4 == '0') && ( b5 == '0' || b5 == '0' ) && ( b6 == '0' || b6 == '0' )){
        document.getElementById("print").innerHTML = "Player 0 is Won" ;
        document.getElementById("b1").disabled = true ;
        document.getElementById("b2").disabled = true 
        document.getElementById("b3").disabled = true ;
        document.getElementById("b7").disabled = true ;
        document.getElementById("b8").disabled = true ;
        document.getElementById("b9").disabled = true ;
        window.alert("Player 0 is Won") ;
      }
       // Checking of Player 0 finsh .....................
    // Here, Checking about Tie
    else if (
    (b1 == 'X' || b1 == '0') && (b2 == 'X' || b2 == '0') && (b3 == 'X' || b3 == '0') && 
    (b4 == 'X' || b4 == '0') && (b5 == 'X' ||  b5 == '0') && (b6 == 'X' || b6 == '0') && 
    (b7 == 'X' || b7 == '0') && (b8 == 'X' ||  b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('print').innerHTML = "Match Tie";
        window.alert('Match Tie');
}
else {
    // Here, Printing Result
    if (flag == 1) {
        document.getElementById('print').innerHTML = "Player X Turn";
    }
    else {
        document.getElementById('print').innerHTML = "Player 0 Turn";
    }
  }
}
// Function to reset game
function myfunc_2() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
}

// Here onwards, functions check turn of the player 
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
  
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
  
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
  
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
  
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
  
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
  
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
  
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
  
function myfunc_11() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}
