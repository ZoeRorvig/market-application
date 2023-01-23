const createPostHandler = async function (event) {
    event.preventDefault();

    const productTitleEl = document.querySelector('#title');
    const productDescriptionEl = document.querySelector('#description');
    const productPriceEl = document.querySelector('#price');
    const productImageEl = document.querySelector('#image');
    const userEmailEl = document.querySelector('#email');
    const productCategory = document.querySelector('#select-menu');

    const response = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify({
            title: productTitleEl.value,
            description: productDescriptionEl.value,
            price: productPriceEl.value,
            image: productImageEl.value,
            // email: userEmailEl.value,
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

document.querySelector('#slide-out')
    .addEventListener('submit', createPostHandler);