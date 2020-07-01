let value1 = '';
let value2 = '';
let operator = '';


//onload function
$(() => {


$('.num').on('click', (event) => {
  if (operator === '') {
    value1 += $(event.currentTarget).text()
    $('.screen').text(value1);
  }else {
    value2 += $(event.currentTarget).text()
    $('.screen').text(value2);

  }

})

$('.operator').on('click', event => {
    operator = $(event.currentTarget).text()
  })

$('#equals').on('click', event => {
   if (operator === '+') {
     let result = parseInt(value1) + parseInt(value2)
     $('.screen').text(result)
   } else if (operator === '-') {
     let result = parseInt(value1) - parseInt(value2)
     $('.screen').text(result)
   } else if (operator.toLowerCase() === 'x') {
     let result = parseInt(value1) * parseInt(value2)
     $('.screen').text(result)
   } else if (operator === '/') {
     let result = parseInt(value1) / parseInt(value2)
     $('.screen').text(result)
   }
 })

 $('#clear').on('click', () => {
     value1 = ''
     value2 = ''
     operator = ''
     $('.screen').text('0')
   })





});
