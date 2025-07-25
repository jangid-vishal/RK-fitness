import { FaMapMarkerAlt, FaPhoneAlt, FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src="src/assets/Untitled-design-24.PNG" alt="RK Fitness" className="mb-4 w-32" /> {/* Replace with your actual logo path */}
          <p className="text-sm mb-4">
            Largest Gym In Dwarka With Premium Graded Equipments With Steam, Cafe, Zumba, Dance,
            Yoga, Strength, Cardio And Many More.
          </p>
          <div className="flex items-start gap-3 mb-2">
            <FaMapMarkerAlt className="text-red-500 mt-1" />
            <p>Dwarka Sector-12a, Plot No. 5, Opposite CNG Pump.</p>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <FaPhoneAlt className="text-red-500 mt-1" />
            <p className="font-semibold">+91-8595222191</p>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-red-500 mt-1" />
            <p>
              Plot No 1, UGF, Block A A-1, Outer Ring Rd, Subhash Enclave, Sunder Vihar, Paschim
              Vihar, Delhi, 110063
            </p>
          </div>
          <div className="flex items-start gap-3 mt-2">
            <FaPhoneAlt className="text-red-500 mt-1" />
            <p className="font-semibold">+91 96679 71209</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm hover:text-red-500 transition">
              <FaChevronRight className="text-red-500" />
              About Us
            </li>
            <li className="flex items-center gap-2 text-sm hover:text-red-500 transition">
              <FaChevronRight className="text-red-500" />
              Contact
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold text-lg mb-3">Useful Links</h4>
          <ul className="space-y-2">
            {[
              "Location Dwarka Sec 12",
              "Paschim Vihar, Delhi, 110063",
              "Rohit Khatri",
              "Sonia Singh Khatri",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm hover:text-red-500 transition">
                <FaChevronRight className="text-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* About Rohit Khatri */}
        <div>
          <h4 className="font-bold text-lg mb-3">Rohit Khatri</h4>
          <p className="text-sm leading-relaxed">
            Owner of one of India’s largest fitness channels on YouTube, Rohit Khatri is a sports
            science nutritionist and content creator. He is also a fitness instructor and is famous
            for workout routines on the video-blogging platform. He also conducts online fitness
            coaching classes and is counted among the top fitness influencers in the country.
          </p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center mt-10 text-sm text-gray-400 border-t border-gray-700 pt-4">
        Designed And Developed By{" "}
        <a
          href="https://www.linkedin.com/in/vishal-jangid-42577a335/"
          className="text-red-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vishal Jangid
        </a>
      </div>
    </footer>
  );
};

export default Footer;
