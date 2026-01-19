import { Mail, Phone, MapPin, Send, Linkedin, Github, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactTab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "(+880) 1709264924", href: "tel:+8801709264924" },
    { icon: Mail, label: "Email", value: "imranmeg2356@gmail.com", href: "mailto:imranmeg2356@gmail.com" },
    { icon: MapPin, label: "Location", value: "Joypurhat, Rajshahi, Bangladesh", href: "#" },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Globe, label: "Portfolio", href: "#" },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Section Title */}
      <div>
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Let's work together!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-3">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-3 p-4 card-glass hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <info.icon size={18} />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">{info.label}</p>
                  <p className="text-foreground font-medium text-sm">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <p className="text-muted-foreground text-sm mb-3">Follow me</p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="card-glass p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-sm"
                placeholder="Project Discussion"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none text-sm"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] glow-effect flex items-center justify-center gap-2 group text-sm"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
