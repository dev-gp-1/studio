import ContactForm from "@/components/forms/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us - Synergy Insights",
  description: "Get in touch with Synergy Insights for expert UX and Human Factors consulting. We're based in Houston, TX.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Synergy Insights</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We're here to answer your questions and discuss how our UX and Human Factors expertise can help your organization. Reach out to us today to schedule a consultation.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <section className="p-6 sm:p-8 bg-card rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Send Us a Message</h2>
          <ContactForm />
        </section>

        <section className="p-6 sm:p-8 bg-card rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-brand-accent">Our Contact Information</h2>
          <div className="space-y-6 text-foreground/90">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-4 mt-1 text-brand-accent flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>123 Innovation Drive<br />Houston, TX 77002<br />United States</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 mr-4 mt-1 text-brand-accent flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="w-6 h-6 mr-4 mt-1 text-brand-accent flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>info@synergyinsights.com</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border">
             <h3 className="font-semibold mb-2 text-foreground">Business Hours</h3>
             <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM (CST)</p>
          </div>
        </section>
      </div>
    </div>
  );
}
