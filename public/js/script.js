// Event listener to get dashboard data
const dashboardLinkHandler = async (event) => {
    event.preventDefault();
    const userId = 1;
    console.log(userId);
    const response = await fetch(`api/posts/user/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to load dashboard');
    }
};

document
.querySelector('#dashboard-link')
.addEventListener('click', dashboardLinkHandler);