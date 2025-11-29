const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] border-t border-gray-800 py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Sudipto Dasgupta. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
