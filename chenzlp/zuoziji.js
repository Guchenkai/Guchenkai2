var str = '320621200203223016'
//var birth = str.substring(6,14)
var year = str.substring(6,10)
var month = str.substring(10,12)
var day = str.substring(12,14)
document.write('我的生日是：'+year+'-'+month+'-'+day+'<br>')
var sex = parseInt(str.charAt(16))
if (sex % 2 === 0){
  document.write('性别女')
} else {
  document.write('性别男')
}

