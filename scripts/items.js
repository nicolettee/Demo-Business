function storageAvailable(type) {
    try {
        const storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
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
    console.log("you can use local"); // Yippee! We can use localStorage awesomeness
    initializePage();
} else {
    // Too bad, no localStorage for us
    // Maybe hide all buttons
}


//storageAvailable('sessionStorage');

function initializePage() {
    //Declare our storage key to make typing easier
    const storageKey = 'cart-key';


    // Store the current local storage in a temp variable
    let storedCart = localStorage.getItem(storageKey);

    if (!storedCart) {
        return;
    }

    let items = JSON.parse(storedCart);

    let html = '';

    items.forEach(element => {
        html += `
        <div class = "row">
             <div class = "card col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4"
                <h4 class = "card-title">${element.title}</h4>
                <h6 >${element.price}</h6>
                <a href="${element.product_link}"target='blank'">View Item</a>
            </div>
        </div>
        `
    });

    $("#wrapper").html(html);

    $(".btn-clear").on("click",function(){
        localStorage.removeItem(storageKey);
        $("#wrapper").html("");
    }
)

}