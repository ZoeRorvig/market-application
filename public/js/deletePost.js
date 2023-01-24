async function deletePostHandler(event) {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/dashboard/${post_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Unable to delete');
    }
}


document.querySelector('#delete-btn').addEventListener('click', deletePostHandler);