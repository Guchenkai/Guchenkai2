function sentencemaking (){
  var people = [ '张程', '俞浩', '朱铭杨', '陈李鹏' ]
  var time = [ '早上', '中午', '晚上', '凌晨' ]
  var loction = [ '学校', '商城', '医务室', '家里', '超市']
  var does = [ '学习', '吃东西', '扇巴掌', '上厕所', '打球', '坐摇摇车' ]
  //var rand = Math.floor( Math.random( ) * people.length )
  var output = atochoese ( people ) + atochoese ( time ) + '在' + atochoese ( loction ) + atochoese ( does )
    document.write ( output )
    function atochoese ( designation ){
      return designation[ Math.floor( Math.random( ) * designation.length ) ]
    }
}
sentencemaking();