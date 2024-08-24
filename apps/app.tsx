/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../packages/@handbuz/Button";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2">
            <BanIcon className="w-8 h-8" />
            <span className="text-xl font-bold">Bana UI</span>
          </a>
          <nav className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-primary-foreground/80">
              About
            </a>
            <a href="#" className="hover:text-primary-foreground/80">
              Components
            </a>
            <a href="#" className="hover:text-primary-foreground/80">
              Contact
            </a>
          </nav>
          <Button variant="primary" size="small" className="md:hidden">
            <MenuIcon className="w-5 h-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="bg-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl font-bold mb-4">Welcome to Bana UI</h1>
                <p className="text-muted-foreground mb-6">
                  Bana UI is a comprehensive React component library designed to
                  help you build beautiful and responsive user interfaces. With
                  a focus on accessibility, performance, and customization, Bana
                  UI provides a wide range of high-quality components that can
                  be easily integrated into your projects.
                </p>
                <Button size="large">Get Started</Button>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  alt="Bana UI"
                  width={600}
                  height={400}
                  className="rounded-lg"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-6">
                  If you have any questions, feedback, or would like to
                  collaborate, feel free to reach out to us.
                </p>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <MailIcon className="w-5 h-5 text-muted-foreground" />
                    <a href="#" className="text-primary hover:underline">
                      info@banaui.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5 text-muted-foreground" />
                    <a href="#" className="text-primary hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <TwitterIcon className="w-5 h-5 text-muted-foreground" />
                    <a href="#" className="text-primary hover:underline">
                      @banaui
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <form className="grid gap-4">
                  <Button>Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          <p className="text-sm">&copy; 2024 Bana UI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-muted-foreground/80">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-muted-foreground/80">
              Terms of Service
            </a>
            <a href="#" className="hover:text-muted-foreground/80">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BanIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m4.9 4.9 14.2 14.2" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
