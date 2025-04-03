document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    const sidebarToggle = document.getElementById('sidebar-toggle');

    function isMobile() {
        return window.innerWidth <= 768;
    }
   
    function toggleMobileSidebar() {
        if (isMobile()) {
            sidebar.classList.toggle('mobile-visible');
        }
    }
    
    function toggleDesktopSidebar() {
        if (!isMobile()) {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        }
    }
    
    sidebarToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileSidebar();
    });
    
    const sidebarLinks = document.querySelectorAll('.sidebar-menu-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (isMobile()) {
                sidebar.classList.remove('mobile-visible');
            }
        });
    });
    
    sidebar.addEventListener('dblclick', function(e) {
        if (!isMobile()) {
            toggleDesktopSidebar();
        }
    });
    
    document.addEventListener('click', function(e) {
        if (isMobile() && sidebar.classList.contains('mobile-visible')) {
            if (!sidebar.contains(e.target)) {
                sidebar.classList.remove('mobile-visible');
            }
        }
    });
    
    window.addEventListener('resize', function() {
        if (!isMobile()) {
            sidebar.classList.remove('mobile-visible');
        }
    });
    
    const currentLocation = window.location.href;
    sidebarLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});