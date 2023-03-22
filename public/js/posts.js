// Array of modal delete post buttons for event listeners
const delPostBtns = document.querySelectorAll('.confirm-delete');

// Event listener to add a new post
const addPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    if (title && content) {
        const datePosted = new Date(Date.now()).toISOString();
        console.log(datePosted);
        const response = await fetch(`/api/posts/user`, {
            method: 'POST',
            body: JSON.stringify({ title, content, datePosted }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.querySelector('#post-title').value = "";
            document.querySelector('#post-content').value = "";
            location.reload();
        }
    }
    else {
        alert('Please enter both a title and content for your post');
    }
};

// Function to delete a given post
const deletePostHandler = async (e) => {
    e.preventDefault();

    const postId = (this.document.activeElement.id).split('-')[1];
    const response = await fetch('/api/posts/user/post', {
        method: 'DELETE',
        body: JSON.stringify({ postId }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        location.reload();
    } else {
        alert('Unable to delete post. Try again later.');
    }
}

document
.querySelector('#save-post')
.addEventListener('click', addPostHandler);

[...delPostBtns].forEach(function(btn) { 
    btn.addEventListener('click', deletePostHandler);
})