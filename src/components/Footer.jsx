import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const logoClick = () => {
    navigate("/");
  }
  return (
    <footer className="bg-[#081521] text-white pt-20">
      {/* Logo Section */}
      <div className="flex justify-center mb-16">
        <img onClick={logoClick} src={logo} alt="MicroTrack Logo" className=" cursor-pointer w-auto" />
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#111D2B] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 MicroTrack. All right reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to={"/terms"} className="hover:text-white transition-colors">Terms of service</Link>
            <Link to={"/terms"} className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
