const saveCommentBtn = document.querySelector('#save-comment-btn');
const commentContentInput = document.querySelector('#comment-content');
const postTitle = document.querySelector('.this-post-id');

// Function to save the comment to the database
const saveComment = async (e) => {
    e.preventDefault();
    const commentContent = commentContentInput.value.trim();
    const datePosted = new Date(Date.now()).toISOString();
    const postId = postTitle.id.split('-')[1];
    if (commentContent) {
        const response = await fetch(`/api/posts/comment`, {
            method: 'POST',
            body: JSON.stringify({ commentContent, datePosted, postId }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            location.reload();
        }
    }
    else {
        alert('Please enter content for your comment.');
    }
}

saveCommentBtn.addEventListener('click', saveComment);