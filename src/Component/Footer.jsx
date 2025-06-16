import { FaFacebook, FaHome, FaGithub, FaLinkedin} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

  const Footer = () => {
	const form = useRef();
	const [sendBtnMessage, setSendBtnMessage] = useState("Send Email");
  
	const sendEmail = (e) => {
	  e.preventDefault();
	  setSendBtnMessage("Sending...");
  
	  emailjs
		.sendForm(
		  "service_yev8zd8",
		  "template_6xulcht",
		  form.current,
		  "1basqFKWSgsXJyEOu"
		)
		.then(
		  () => {
			toast.success("Mail sent successfully!", {
			  position: "top-center",
			  theme: "colored",
			  style: {
				marginTop: "60px"
			  }
			});
			
			setSendBtnMessage("Email Sent");
		  },
		  () => {
			toast.error("Sending failed", {
			  position: "top-center",
			  theme: "colored",
			  style: {
				marginTop: "100px"
			  }
			});
			setSendBtnMessage("Send Failed");
		  }
		);
	};
  
	return (
	  <footer
		id="Contact"
		className="flex flex-col md:flex-row bg-gray-900 text-white py-16 px-8 md:px-20 gap-10"
	  >
		{/* Social and Contact Info */}
		<div className="md:w-1/2 space-y-8">
		  <div className="flex items-center gap-4">
			<PiLinkSimpleBold size={40} className="text-[#61CE70]" />
			<h2 className="text-2xl font-semibold">Connect With Me</h2>
		  </div>
  
		  <div className="flex flex-wrap gap-6 text-lg">
			<a
			  target="_blank"
			  href="https://www.linkedin.com/in/shubhamyadav007/"
			  rel="noopener noreferrer"
			  className="flex items-center gap-2 hover:text-[#61CE70] transition"
			>
			  <FaLinkedin className="text-[#61CE70]" />
			  <span className="hidden md:inline">LinkedIn</span>
			</a>
			<a
			  target="_blank"
			  href="https://github.com/Shubham-Yadav003"
			  rel="noopener noreferrer"
			  className="flex items-center gap-2 hover:text-[#61CE70] transition"
			>
			  <FaGithub className="text-[#61CE70]" />
			  <span className="hidden md:inline">GitHub</span>
			</a>
		  </div>
  
		  <div className="flex items-start gap-4 text-lg">
			<MdEmail size={30} className="text-[#61CE70]" />
			<div>
			  <h3 className="font-semibold">Email</h3>
			  <p>shubhamy03v@gmail.com</p>
			</div>
		  </div>
  
		  {/* <div className="flex items-start gap-4 text-lg">
			<FaHome size={30} className="text-[#61CE70]" />
			<div>
			  <h3 className="font-semibold">Permanent Address</h3>
			  <p>[Kangti, Sangareddy, Hyderabad, Telangana]</p>
			</div>
		  </div> */}
  
		  <div className="flex items-start gap-4 text-lg">
			<FaLocationDot size={30} className="text-[#61CE70]" />
			<div>
			  <h3 className="font-semibold">Present Address</h3>
			  <p>[Gorakhpur, Uttar Pradesh]</p>
			</div>
		  </div>
		</div>
  
		{/* Email Form */}
		<div className="md:w-1/2">
		  <h2 className="text-3xl font-bold mb-6">Send Me an Email</h2>
		  <form ref={form} onSubmit={sendEmail} className="space-y-6">
			<input
			  type="text"
			  name="from_name"
			  required
			  placeholder="Your Full Name"
			  className="w-full p-3 border border-[#61CE70] rounded-md bg-gray-800 text-white focus:outline-none"
			/>
			<input
			  type="email"
			  name="from_email"
			  required
			  placeholder="Your Email"
			  className="w-full p-3 border border-[#61CE70] rounded-md bg-gray-800 text-white focus:outline-none"
			/>
			<textarea
			  name="message"
			  placeholder="Your Message"
			  rows="5"
			  className="w-full p-3 border border-[#61CE70] rounded-md bg-gray-800 text-white focus:outline-none"
			></textarea>
			<button
			  type="submit"
			  className="w-full md:w-auto px-6 py-3 bg-[#61CE70] text-black font-semibold rounded-md hover:bg-green-500 transition"
			>
			  {sendBtnMessage}
			</button>
		  </form>
		  <ToastContainer />
		</div>
	  </footer>
	);
  };
export default Footer;
  