const createPostHandler = async function (event) {
    event.preventDefault();

    const productTitleEl = document.querySelector('title');
    const productDescriptionEl = document.querySelector('description');
    const productPriceEl = document.querySelector('price');
    const productImageEl = document.querySelector('image');
    const userEmailEl = document.querySelector('email');
    const productCategory = document.querySelector('dropdown1');
    const postProductButton = document.querySelector('post');

    const response = await fetch('/dashboard', {
        method: 'POST',
        body: JSON.stringify({
            title: productTitleEl.value,
            description: productDescriptionEl.value,
            price: productPriceEl.value,
            image: productImageEl.value,
            email: userEmailEl.value,
            category_id: productCategory.value
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to make a post');
    }
};

document
    .addEventListener('submit', createPostHandler);

document
    .addEventListener('click', postProductButton);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
    });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
    });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    });
