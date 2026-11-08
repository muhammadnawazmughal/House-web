import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our
            furniture, pricing, delivery, or anything else, our team is ready
            to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
       
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="bg-amber-500 text-white p-4 rounded-full">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">+92 332 4539572</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-amber-500 text-white p-4 rounded-full">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">nawaz0211@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-amber-500 text-white p-4 rounded-full">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-amber-500 text-white p-4 rounded-full">
                  <FaClock />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Working Hours</h3>
                  <p className="text-gray-600">
                    Mon - Sat: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

   
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;