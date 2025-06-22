import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  BarChart3,
  Cog,
  Shield,
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  Users,
  Activity,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-amuse-background">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-poppins text-amuse-primary">
              Amuse Tech Solutions
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-amuse-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="text-gray-700 hover:text-amuse-primary transition-colors font-medium"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-amuse-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-amuse-primary transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left text-gray-700 hover:text-amuse-primary transition-colors font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-left text-gray-700 hover:text-amuse-primary transition-colors font-medium"
                >
                  Solutions
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-700 hover:text-amuse-primary transition-colors font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-amuse-primary transition-colors font-medium"
                >
                  Contact
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-amuse-primary via-slate-800 to-amuse-primary pt-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(12, 27, 51, 0.8), rgba(12, 27, 51, 0.8)), url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23334155" width="1200" height="800"/><g fill="%2300FFB2" opacity="0.1"><circle cx="300" cy="200" r="80"/><circle cx="900" cy="300" r="120"/><circle cx="600" cy="600" r="100"/><circle cx="150" cy="500" r="60"/><circle cx="1050" cy="150" r="90"/></g></svg>\')',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
            Smarter, Safer, More Fun:
            <span className="block text-amuse-accent">
              IoT for the Future of Entertainment
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 font-open-sans">
            Empowering entertainment venues with real-time data and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-amuse-accent text-amuse-primary hover:bg-amuse-accent/90 text-lg px-8 py-6 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amuse-primary text-lg px-8 py-6 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amuse-primary mb-4 font-poppins">
              Our IoT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for
              entertainment venues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Guest Flow Monitoring */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-amuse-accent/10 rounded-full group-hover:bg-amuse-accent/20 transition-colors">
                  <Users className="h-8 w-8 text-amuse-accent" />
                </div>
                <h3 className="text-xl font-bold text-amuse-primary mb-4 font-poppins">
                  Guest Flow Monitoring
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Track visitor patterns and crowd density in real-time to
                  optimize guest experience and reduce wait times.
                </p>
              </CardContent>
            </Card>

            {/* Real-Time Analytics & Alerts */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-amuse-accent/10 rounded-full group-hover:bg-amuse-accent/20 transition-colors">
                  <BarChart3 className="h-8 w-8 text-amuse-accent" />
                </div>
                <h3 className="text-xl font-bold text-amuse-primary mb-4 font-poppins">
                  Real-Time Analytics & Alerts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get instant insights and automated alerts for capacity
                  management, equipment status, and operational metrics.
                </p>
              </CardContent>
            </Card>

            {/* Operational Efficiency */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-amuse-accent/10 rounded-full group-hover:bg-amuse-accent/20 transition-colors">
                  <Cog className="h-8 w-8 text-amuse-accent" />
                </div>
                <h3 className="text-xl font-bold text-amuse-primary mb-4 font-poppins">
                  Operational Efficiency
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Automate routine processes and optimize resource allocation to
                  reduce costs and improve service quality.
                </p>
              </CardContent>
            </Card>

            {/* Safety Monitoring */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-amuse-accent/10 rounded-full group-hover:bg-amuse-accent/20 transition-colors">
                  <Shield className="h-8 w-8 text-amuse-accent" />
                </div>
                <h3 className="text-xl font-bold text-amuse-primary mb-4 font-poppins">
                  Safety Monitoring
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuous monitoring of safety systems and emergency
                  protocols to ensure guest and staff security.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-amuse-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-amuse-primary mb-8 font-poppins">
              About Amuse Tech Solutions
            </h2>
            <p className="text-2xl text-gray-700 mb-12 font-poppins font-light">
              "Revolutionizing the entertainment experience through smart data
              and automation."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amuse-accent mb-2 font-poppins">
                  4M+
                </div>
                <p className="text-gray-600 font-medium">
                  Guests Monitored Monthly
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amuse-accent mb-2 font-poppins">
                  250+
                </div>
                <p className="text-gray-600 font-medium">
                  Entertainment Venues
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amuse-accent mb-2 font-poppins">
                  99.9%
                </div>
                <p className="text-gray-600 font-medium">System Uptime</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Amuse Tech Solutions, we're passionate about transforming how
                entertainment venues operate. Our cutting-edge IoT solutions
                help amusement parks, sports arenas, and stadiums create safer,
                more efficient, and more enjoyable experiences for millions of
                guests worldwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded by industry experts with decades of experience in both
                technology and entertainment, we understand the unique
                challenges venues face and deliver solutions that make a real
                difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-amuse-primary mb-4 font-poppins">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600">
                Ready to transform your venue? Let's discuss how our IoT
                solutions can help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amuse-accent focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amuse-accent focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amuse-accent focus:border-transparent resize-none"
                      placeholder="Tell us about your venue and how we can help..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-amuse-accent text-amuse-primary hover:bg-amuse-accent/90 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-amuse-primary mb-6 font-poppins">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amuse-accent/10 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-amuse-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">
                          hello@amusetechsolutions.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amuse-accent/10 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-amuse-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amuse-background rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-amuse-primary mb-4 font-poppins">
                    Why Choose Amuse Tech?
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amuse-accent rounded-full mr-3"></div>
                      24/7 technical support and monitoring
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amuse-accent rounded-full mr-3"></div>
                      Custom solutions for your specific needs
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amuse-accent rounded-full mr-3"></div>
                      Proven ROI within the first year
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amuse-accent rounded-full mr-3"></div>
                      Industry-leading security and compliance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amuse-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold font-poppins mb-4">
                Amuse Tech Solutions
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Revolutionizing entertainment venues through innovative IoT
                solutions and smart automation.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 font-poppins">
                Quick Links
              </h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-gray-300 hover:text-amuse-accent transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="block text-gray-300 hover:text-amuse-accent transition-colors"
                >
                  Solutions
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-300 hover:text-amuse-accent transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-300 hover:text-amuse-accent transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 font-poppins">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amuse-accent hover:text-amuse-primary transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amuse-accent hover:text-amuse-primary transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amuse-accent hover:text-amuse-primary transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Amuse Tech Solutions – All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
