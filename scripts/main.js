function storageAvailable(type) {
  try {
      const storage = window[type],
          x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          storage.length !== 0;
  }
}
if (storageAvailable('localStorage')) {
     console.log("you can use local");// Yippee! We can use localStorage awesomeness
    initializePage();
}
else {
  // Too bad, no localStorage for us
  // Maybe hide all buttons
}


//storageAvailable('sessionStorage');

function initializePage(){
    //Declare our storage key to make typing easier
    const storageKey = 'cart-key';


    // Logging to see if we have anything in storage;
    console.log(localStorage.getItem(storageKey));

    //Add btn click event to add btns
    $('.btn-cart').on('click', function(){
        //get the id for the current cart item
        let cartItemId = $(this).data('itemid');

        //Retrieve stored cart  and split by comma
        let currentCart = [];

        // Store the current local storage in a temp variable
        let storedCart = localStorage.getItem(storageKey);


        //if stored cart is something, use it
        if (storedCart != null){
            currentCart = storedCart.split(',');
        }

        //add the new item to the cart
        currentCart.push(cartItemId);

        //update Storage
        localStorage.setItem(storageKey, currentCart);
        

        //Update visible cart count
    });

}


