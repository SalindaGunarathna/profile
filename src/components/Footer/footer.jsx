import { IconBrandLinkedin, IconBrandFacebook, IconBrandWhatsapp, IconBrandGithub } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Me</h3>
          <p className=" pl-5">Email: salinda.eng@gmail.com</p>
          <p className="">Phone: 0775106025</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mr-10">
          <a href='https://github.com/SalindaGunarathna' target="_blank" rel="noopener noreferrer">
            <IconBrandGithub className="text-2xl hover:text-blue-500" />
          </a>
          <a href='https://wa.me/+94775106025' target="_blank" rel="noopener noreferrer">
            <IconBrandWhatsapp className="text-2xl hover:text-green-500" />
          </a>
          <a href='https://www.linkedin.com/in/salinda-gunarathna-a036a4263' target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin className="text-2xl hover:text-blue-800" />
          </a>
          <a href='https://www.facebook.com/profile.php?id=100093844371992&mibextid=ZbWKwL' target="_blank" rel="noopener noreferrer">
            <IconBrandFacebook className="text-2xl hover:text-blue-600" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-2">
        <p>&copy; {new Date().getFullYear()} Salinda Gunarathna. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
