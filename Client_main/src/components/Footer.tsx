import CONFIG from "../../config";

CONFIG
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img 
              src={`https://${CONFIG.S3_BASE_URL}/images/logo.svg`}
              alt="GDG WCE Logo" 
              className="h-8 w-auto object-contain" 
            />
            <span className="font-display font-bold text-lg tracking-tight">
              GDG WCE
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Google Developer Group WCE. All rights reserved.
          </p>

          {/* Disclaimer */}
          <p className="text-[10px] md:text-xs text-muted-foreground text-center max-w-xs leading-tight">
            GDG WCE is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;