import { useForm, ValidationError } from '@formspree/react';

const ContactComponent = () => {
    const [state, handleSubmit] = useForm("xzbndpey");
    if (state.succeeded) {
        return <p>Thank you for Contacting Me!</p>;
    }
    return (
        <div className="exp md:p-24 md:max-w-7xl">
            <div className="w-36 ">
                <h1 className="text-2xl ex-h1 border-pink-500 border-b-2 ">Contact</h1>
            </div>
            <div class="my-8 p-8 bg-white bg-opacity-40 rounded-lg shadow-md animate__animated animate__zoomIn duration-500 delay-200 ">
                <form onSubmit={handleSubmit} className="w-90">
                    <div class="mb-4">
                        <label for="name" class="block text-slate-100 text-sm font-medium mb-2">Your Name</label>
                        <input type="text" id="name" name="name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-slate-800" required />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-slate-100 text-sm font-medium mb-2">Your Email</label>
                        <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500  text-slate-800" required />
                    </div>
                    <div class="mb-4">
                        <label for="message" class="block text-slate-100 text-sm font-medium mb-2">Your Message</label>
                        <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500  text-slate-800" required></textarea>
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