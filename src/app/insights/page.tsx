import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Insights - Synergy Insights",
  description: "Read the latest articles, news, and thought leadership on UX and Human Factors from Synergy Insights.",
};

// Placeholder blog posts
const blogPosts = [
  {
    id: "1",
    title: "The ROI of UX in Industrial Settings",
    slug: "roi-of-ux-industrial",
    date: "October 26, 2023",
    excerpt: "Discover how investing in User Experience can lead to significant returns in safety, efficiency, and employee satisfaction in industrial environments.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "factory automation",
    category: "UX Strategy"
  },
  {
    id: "2",
    title: "Human Factors in Medical Device Design: A Compliance Guide",
    slug: "hf-medical-device-compliance",
    date: "November 5, 2023",
    excerpt: "Navigating the complex regulatory landscape of medical device design with a focus on human factors to ensure safety and usability.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "medical device",
    category: "Healthcare UX"
  },
  {
    id: "3",
    title: "Future of Aerospace: AI-Assisted Cockpit Interfaces",
    slug: "ai-aerospace-cockpits",
    date: "November 15, 2023",
    excerpt: "Exploring the potential of artificial intelligence in revolutionizing cockpit design and enhancing pilot decision-making.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "futuristic cockpit",
    category: "Aerospace Tech"
  },
];

export default function InsightsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Industry Insights & News</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Stay informed with our latest articles, case studies, and expert opinions on UX, Human Factors, and industry-specific innovations.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={post.imageHint}
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <p className="text-sm text-brand-accent font-semibold mb-1">{post.category}</p>
              <CardTitle className="text-xl mb-2 hover:text-brand-primary transition-colors">
                <Link href={`/insights/${post.slug}`}>{post.title}</Link>
              </CardTitle>
              <CardDescription className="text-sm mb-3">{post.excerpt}</CardDescription>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Link href={`/insights/${post.slug}`} className="w-full">
                <Button variant="outline" className="w-full text-brand-primary border-primary hover:bg-primary/10">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </section>
      
      {/* Placeholder for a specific blog post page structure - can be developed later */}
      {/* Example: /insights/[slug]/page.tsx */}
      {/* For now, clicking "Read More" will lead to a 404, or you can make them link to '#' */}

    </div>
  );
}
