document.addEventListener('DOMContentLoaded', () => {
    let mode = document.querySelector('.light-mode i');
    let navBar = document.querySelector('.navbar');
    mode.onclick = () => {
        document.body.classList.toggle('dark-theme');

        // console.log(mode);
        console.log('button clicked');

        if (document.body.classList.contains('dark-theme')) {
            mode.classList.replace('fa-moon', 'fa-sun');
            // navBar.classList.replace('bg-dark', 'bg-light');
            // navBar.classList.replace('navbar-dark', 'navbar-light');

        } else {
            mode.classList.replace('fa-sun', 'fa-moon');
            // navBar.classList.replace('bg-light', 'bg-dark');
            // navBar.classList.replace('navbar-light', 'navbar-dark');
        }
    }

    
});