import { motion } from "framer-motion";

interface LogoProps {
  width?: string;
  height?: string;
}

const Logo = ({ width = "160px", height = "80px" }: LogoProps) => {
  const logoSrc = "/public/whiteslate.png"; // Permanent dark mode image

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      style={{ width, height }}
      className="flex items-center"
    >
      <motion.img
        src={logoSrc}
        alt="Slate Logo"
        className="object-contain rounded-lg w-full h-full"
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      />
    </motion.div>
  );
};

export default Logo;
