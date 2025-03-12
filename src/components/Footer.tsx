import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-6">
          <div>
            <br />
            <h3 className="text-lg font-bold text-primary">Head Office</h3>
            
            <br />
            <p>Nirmaan, IIT Madras, Chennai, Tamil Nadu - 600036</p>
            <p>Other Locations: Coming soon</p>
            
          </div>
          <div>
            <img src="./whiteslate.png" className="w-40 mx-auto mb-4" alt="Slate Dark" />
            <p className="text-slate-400">SlateMate - Empowering Schools, Connecting Students</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary">Our Partners</h3>
            <br />
            <div className="flex justify-center space-x-4">
              <img src="/nirmaan.png" className="w-28 h-auto" alt="Nirmaan" />
              <img src="/iitmlogo.png" className="w-28 h-auto" alt="IIT Madras" />
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 my-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium text-lg text-primary">Company Info</h3>
            <br />
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg text-primary">Contact Us</h3>
            <br />
            <ul className="space-y-2">
              <li className="flex items-center">
                <span role="img" aria-label="email">📧</span>
                <a href="mailto:info@slatemate.in" className="ml-2 hover:text-primary transition-colors">info@slatemate.in</a>
              </li>
              <li className="flex items-center">
                <span role="img" aria-label="phone">📞</span>
                <a href="tel:+919025867204" className="ml-2 hover:text-primary transition-colors">+91 90258 67204</a>
              </li>
              <li>
                <span role="img" aria-label="clock">🕒</span>
                <span>Timings: 8:00 AM - 6:00 PM (Mon-Sat)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg text-primary">Quick Links</h3>
            <br />
            <ul className="space-y-2">
              <li><Link to="/admin" className="hover:text-primary transition-colors">Admin Login</Link></li>
              <li><Link to="/school" className="hover:text-primary transition-colors">School Login</Link></li>
              <li><Link to="/employee" className="hover:text-primary transition-colors">Employee Portal</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/refer" className="hover:text-primary transition-colors">Refer a School</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg text-primary">Follow Us</h3>
            <br />
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter size={20} /></a>
              <a href="#" aria-label="GitHub" className="hover:text-primary"><Github size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin size={20} /></a>
              <a href="mailto:contact@slate.com" aria-label="Email" className="hover:text-primary"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700 flex justify-between items-center text-slate-400 text-sm">
          <p>© {currentYear} Slate. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
