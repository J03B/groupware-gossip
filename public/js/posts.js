// Event listener to add a new post
const addPostHandler = async (event) => {
    event.preventDefault();
    const userId = 1;
    console.log(userId);
    const response = await fetch(`api/posts/user/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

document
.querySelector('#add-post')
.addEventListener('click', addPostHandler);