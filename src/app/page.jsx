import { CheckCircle, BookOpen, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Decipher the Facts</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Empowering individuals and communities with accurate, transparent,
            and timely information.
          </p>
          <Button size="lg">
            Start Verifying Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Core Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Fact-Checking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Rigorous verification of claims and statements to ensure
                    accuracy.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Media Verification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Analyzing and authenticating media content for truthfulness.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    User Empowerment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Equipping users with tools and knowledge to identify
                    misinformation.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Latest Verified Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <Card key={item}>
                  <CardHeader>
                    <CardTitle>Fact Check #{item}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </CardDescription>
                    <Button variant="link" className="mt-4">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
