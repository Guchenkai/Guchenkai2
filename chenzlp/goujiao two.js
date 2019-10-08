function bake( degrec ){
  var message 
  if ( degrec > 500 ){
    message = "我不是核反应堆"
  } else if ( degrec < 100 ){
    message = "我不是冰箱"
  } else {
    message ="温度正好，正常工作"
  }
  return message 
}
alert( bake ( 500 ) )