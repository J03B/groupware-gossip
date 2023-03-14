// Event listener to add a new post
const addPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const user_id = localStorage.getItem('userId');
    if (title && content && user_id) {
        const datePosted = Date(Date.now());
        const response = await fetch(`${user_id}`, {
            method: 'POST',
            body: JSON.stringify({ title, content, datePosted }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.querySelector('#post-title').value = "";
            document.querySelector('#post-content').value = "";
        }
    }
    else {
        alert('Please enter both a title and content for your post');
    }
    
};

document
.querySelector('#save-post')
.addEventListener('click', addPostHandler);