
var productList2 = [
    {product: 'Silk Crepe Print 1920s Dress', price: 150.00, color:'Blue'},
    {product: 'Pants', price: 10.00, color:'Brown'},
    {product: 'Shoes', price: 15.00, color: 'Blue'}
];

var filtered = productList2.filter(function(x){
  return (x.product == 'Pants')
});
console.log(filtered);
