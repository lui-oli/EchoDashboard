// Active Navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});


// Drop Down Menu
const btn = document.getElementById('profileDropdownBtn');
const menu = document.getElementById('profileDropdownMenu');

if (btn && menu) {
    btn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling up.
        if (menu.style.display == 'block') {
            menu.style.display = 'none';
        }
        else {
            menu.style.display = 'block';
        }
    });

    // Hide dropdown if user clicks outside.
    document.addEventListener('click', function() {
        menu.style.display = 'none';
    });

    // Stop menu click from hiding menu
    menu.addEventListener('click', function(event) {
        event.stopPropagation();
    });

}


// Add Hover Effects To Navigation Links
const navlinks = document.querySelectorAll('.nav-link');

navlinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hostname && this.hostname !== windows.location.hostname) {
            // External link, let it work normally
            return;
        }
        e.preventDefault();
        navlinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});


// Search Functionality Placeholder



// Animated Dashboard Numbers
document.querySelectorAll('.card-number').forEach(el => {
    const value = Number(el.getAttribute('data-value'));
    let i = 0;
    const inc = Math.ceil(value / 30);

    function animate () {
        i += inc;
        el.textContent = i > value ? value : 1;
        
        if (i < value) {
            requestAnimationFrame(animate);
        }
        else {
            el.textContent = value.toLocaleString();
        }
    }
});
