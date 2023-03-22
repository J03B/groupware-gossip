// Event listener to get dashboard data
const dashboardLinkHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(`/dashboard`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (response.ok) {
        document.location.replace(`/dashboard`);
    } else {
        document.location.replace('/login');
    }
};

document
.querySelector('#dashboard-link')
.addEventListener('click', dashboardLinkHandler);