function showContent(page) {
    var contentDiv = document.getElementById('content');
    switch (page) {
        case 'home':
            contentDiv.innerHTML = '<h2>Home Page</h2><p>Home page content.</p>';
            break;
        case 'dashboard':
            contentDiv.innerHTML = '<h2>Dashboard</h2><p>Dashboard content.</p>';
            break;
        case 'property':
            contentDiv.innerHTML = '<h2>Property Page</h2><p>Property page content.</p>';
            break;
        case 'devices':
            contentDiv.innerHTML = '<h2>Devices Page</h2><p>Devices page content.</p>';
            break;
        case 'login':
            contentDiv.innerHTML = '<h2>Login Page</h2><p>Login page content.</p>';
            break;
        default:
            contentDiv.innerHTML = '';
    }
}
