var productList2 = [{
    product: 'Silk Crepe Print 1920s Dress',
    price: 150.00,
    color: 'Blue'
  },
  {
    product: 'Pants',
    price: 10.00,
    color: 'Brown'
  },
  {
    product: 'Shoes',
    price: 15.00,
    color: 'Blue'
  }
];

var filtered = productList2.filter(function (x) {
  return (x.product == 'Pants')
});
console.log(filtered);

$(".btn-cart").on("click", function () {
  
  var myItems = getCookie("items");

  if (myItems == null) {
    myItems = [];
  }
  myItems.push($(this).data("itemid"));
  console.log(myItems);
  setCookie("items", myItems, 9999);

});

function setCookie(key,value,times){
  var date=new Date();
  
  console.log(date);
  date.setTime(date.getTime()+times*1000); 
  console.log(date);
  document.cookie=key+"="+value+";expires="+date+'; path=/';
  console.log(document.cookie)            
}

function getCookie(key){
  var scookies=document.cookie;result=null;
  if(scookies){
      var acookies=scookies.split(";");
      acookies.map(function(item){
          if(item.split("=")[0]===key){
              result=item.split("=")[1];    
          }
      })
  }
  return result;
}

function removeCookie(key){
  setCookie(key,0,-10);
}