function doublewei(){
  var arr = [ [ 26,45,75,85,65 ] [ 84,65,35,15,48 ] ]
  for( i = 0 ; i < arr.length ; i++ ){
    for( var j = 0 ; j < arr[ i ].length ; j++){
      document.write( arr[ i ] [ j ] + ',' ) 
    }
  }
}