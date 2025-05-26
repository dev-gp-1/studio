import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Briefcase, Users, Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { industrySpecificServices } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-card shadow-xl rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-brand-primary">Synergy</span> Insights
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Elevating Your Operations with Expert UX & Human Factors Consulting. We empower Oil & Gas, Aerospace, Medical, CPA, and Legal industries through data-driven design and human-centered solutions.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Request a Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services-overview" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Tailored Solutions for Your Industry</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We understand the unique challenges and opportunities within your sector. Explore how our specialized UX and Human Factors services can drive efficiency, safety, and innovation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySpecificServices.slice(0,3).map((industry) => ( // Show first 3, more on services page
              <Card key={industry.id} className="hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <industry.icon className="w-10 h-10 text-brand-primary" />
                    <CardTitle className="text-2xl">{industry.name}</CardTitle>
                  </div>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/services#${industry.id}`}>
                    <Button variant="outline" className="w-full text-brand-primary border-primary hover:bg-primary/10">
                      Learn More about {industry.name} Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="secondary">Explore All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 bg-card shadow-lg rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner with Synergy Insights?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Briefcase className="w-12 h-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-muted-foreground">Deep understanding of Oil & Gas, Aerospace, Medical, CPA, and Legal sectors.</p>
            </div>
            <div className="p-6">
              <Users className="w-12 h-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Human-Centered Approach</h3>
              <p className="text-muted-foreground">Solutions designed around your users for maximum impact and adoption.</p>
            </div>
            <div className="p-6">
              <Lightbulb className="w-12 h-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Measurable Results</h3>
              <p className="text-muted-foreground">Focus on delivering tangible improvements in efficiency, safety, and user satisfaction.</p>
            </div>
          </div>
           <div className="mt-12 text-center">
             <Image 
                src="https://placehold.co/800x400.png" 
                alt="Team collaboration" 
                width={800} 
                height={400} 
                className="rounded-lg mx-auto shadow-md"
                data-ai-hint="team meeting"
              />
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your User Experience?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how Synergy Insights can help you achieve your business goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
