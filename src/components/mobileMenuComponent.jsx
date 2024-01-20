const MobileMenuComponent = () => {
    document.getElementById('menuToggle').addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.toggle('hidden');
    })
    return (
        <>
            <button id="menuToggle" class="lg:hidden bg-gray-800 p-4 text-white focus:outline-none">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            <div id="mobileMenu" class="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 hidden">
                <div class="p-4">
                   
                    <ul class="text-white">
                        <li><a href="#" class="block py-2">Home</a></li>
                        <li><a href="#" class="block py-2">About</a></li>
                        <li><a href="#" class="block py-2">Services</a></li>
                        <li><a href="#" class="block py-2">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default MobileMenuComponent;