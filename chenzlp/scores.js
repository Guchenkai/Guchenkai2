var scores = [ 60, 70, 89, 42, 31, 79, 84 ]
var i = 0, sum = 0
while( i < scores.length ){
  document.write( scores[ i ] + '<br>' )
  sum = sum + scores[ i ]
  i++
  document.write( sum )
}
