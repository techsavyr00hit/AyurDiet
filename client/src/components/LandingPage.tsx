import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Brain, TrendingUp, Users, Star, CheckCircle } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

type LandingPageProps = {
  onGetStarted: () => void;
};

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const benefits = [
    {
      icon: Brain,
      title: "Personalized AI Recommendations",
      description: "Get customized diet plans based on your unique Ayurvedic constitution and health goals",
    },
    {
      icon: Heart,
      title: "Holistic Wellness Tracking",
      description: "Monitor glucose levels, SpO2, calories, and step count all in one place",
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Track your health journey with detailed insights and historical data visualization",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Active Users", icon: Users },
    { value: "95%", label: "Success Rate", icon: Star },
    { value: "50K+", label: "Diet Plans Created", icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold font-serif">AyurDiet</h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button onClick={onGetStarted} data-testid="button-get-started-header">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="container px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              Ancient Wisdom Meets Modern Technology
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold font-serif tracking-tight">
              Your Personalized Ayurvedic Wellness Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover balance and vitality with AI-powered Ayurvedic diet plans tailored to your unique constitution, health goals, and lifestyle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={onGetStarted} className="gap-2" data-testid="button-get-started-hero">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="container px-4 py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold font-serif mb-4">Trusted by Thousands</h3>
              <p className="text-muted-foreground">Join our growing community of wellness seekers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center" data-testid={`stat-card-${index}`}>
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <div className="text-4xl font-bold font-mono mb-2">{stat.value}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold font-serif mb-4">Why Choose AyurDiet?</h3>
              <p className="text-muted-foreground">Experience the perfect blend of ancient wisdom and modern science</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-elevate" data-testid={`benefit-card-${index}`}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container px-4 py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-bold font-serif">Ready to Start Your Wellness Journey?</h3>
            <p className="text-xl text-muted-foreground">
              Join thousands who have transformed their health with personalized Ayurvedic guidance
            </p>
            <Button size="lg" onClick={onGetStarted} className="gap-2" data-testid="button-get-started-cta">
              Begin Your Journey
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 AyurDiet. Personalized Ayurvedic wellness for everyone.</p>
        </div>
      </footer>
    </div>
  );
}
