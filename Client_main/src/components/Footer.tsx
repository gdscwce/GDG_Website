const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-google-blue"></span>
              <span className="w-2 h-2 rounded-full bg-google-red"></span>
              <span className="w-2 h-2 rounded-full bg-google-yellow"></span>
              <span className="w-2 h-2 rounded-full bg-google-green"></span>
            </div>
            <span className="font-display font-bold text-lg">GDG</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Google Developer Group. All rights reserved.
          </p>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center max-w-xs">
            GDG is an independent group; activities are not endorsed by Google.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
