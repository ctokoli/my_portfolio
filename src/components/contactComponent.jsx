const ContactComponent = () => {
    return (
        <div className="exp p-24 max-w-7xl">
            <div className=" w-36 ">
                <h1 className="text-2xl  border-pink-500 border-b-2 ">Contact</h1>
            </div>
            <div class="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md w-screen">
                <h1 class="text-2xl font-semibold mb-6">Contact Us</h1>
                <form action="#" method="post">
                    <div class="mb-4">
                        <label for="name" class="block text-gray-600 text-sm font-medium mb-2">Your Name</label>
                        <input type="text" id="name" name="name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Your Email</label>
                        <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div class="mb-4">
                        <label for="message" class="block text-gray-600 text-sm font-medium mb-2">Your Message</label>
                        <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></textarea>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactComponent;