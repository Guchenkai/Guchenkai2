  var highest = 0
  var xb = []
  var j = 0
  var scores = [ 90,90,80,75,62,38,78,100 ]
  for( var i = 0; i < scores.length; i++ ){
    if( scores[ i ] > highest ){
      xb = []
      highest = scores[ i ]
      xb[ j ] = i
    } else if ( scores[ i ] == highest ){
      j++
      xb[ j ] = i
    }
  }
  for( var k = 0; k < xb.length; k++ ){
    document.write( 'scores[' + xb[ j ] + ']='+ highest )
  }
  //if ( x2 = -1 ){
    //document.write( 'scores' + '['+ x + ']' + '='+ highest )
 //} else {
    //document.write( 'scores' + '['+ x + ']' + '='+ highest + '<br>' + 'scores' + '['+ x2 + ']' + '='+ highest )
  //}
