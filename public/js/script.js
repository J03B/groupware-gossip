// Event listener to get dashboard data
const dashboardLinkHandler = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('userId')
    const response = await fetch(`api/posts/user/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (response.ok) {
        document.location.replace(`api/posts/user/${userId}`);
    } else {
        alert('Failed to load dashboard');
    }
};

document
.querySelector('#dashboard-link')
.addEventListener('click', dashboardLinkHandler);