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
            //location.reload();
        }
    }
    else {
        alert('Please enter both a title and content for your post');
    }
    
};

document
.querySelector('#save-post')
.addEventListener('click', addPostHandler);