import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { industrySpecificServices, type IndustryService } from "@/lib/constants";

export const metadata = {
  title: "Our Services - Synergy Insights",
  description: "Explore tailored UX and Human Factors consulting services for Oil & Gas, Aerospace, Medical, CPA, and Legal industries.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Our Specialized Services</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Synergy Insights offers a comprehensive suite of UX and Human Factors consulting services, customized to meet the unique demands of your industry. We focus on delivering practical solutions that enhance performance, ensure safety, and drive innovation.
        </p>
      </section>

      <Tabs defaultValue={industrySpecificServices[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 h-auto p-2">
          {industrySpecificServices.map((industry) => (
            <TabsTrigger key={industry.id} value={industry.id} className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <industry.icon className="w-4 h-4 mr-2 hidden sm:inline-block" />
              {industry.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {industrySpecificServices.map((industry: IndustryService) => (
          <TabsContent key={industry.id} value={industry.id} className="mt-8">
            <Card className="shadow-lg">
              <CardHeader className="bg-card-foreground/5 p-8 rounded-t-lg">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <industry.icon className="w-16 h-16 text-brand-primary flex-shrink-0" />
                  <div>
                    <CardTitle className="text-3xl text-brand-primary mb-2">{industry.name}</CardTitle>
                    <CardDescription className="text-md text-foreground/80">{industry.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-10">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-brand-accent">Key Services for {industry.name}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {industry.services.map((service, index) => (
                      <div key={index} className="p-4 bg-background rounded-md border border-border/50">
                        <h4 className="font-semibold text-lg mb-1 text-foreground">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Image 
                  src={`https://placehold.co/1200x400.png`} 
                  alt={`${industry.name} industry visual`} 
                  width={1200} 
                  height={400} 
                  className="rounded-lg shadow-md aspect-[3/1] object-cover w-full"
                  data-ai-hint={industry.heroImageHint}
                />
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-brand-accent">Benefits We Deliver</h3>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckSquare className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-foreground/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center pt-6">
                  <Link href="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Discuss Your {industry.name} Project
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
