import { CheckCircle, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">About TRUELENS</h1>
        <p className="text-xl mb-8">
          Empowering truth in the digital age through rigorous fact-checking and
          media verification.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="mb-4">
          At TRUELENS, we are dedicated to fostering a more informed society by
          providing accurate, transparent, and timely information. In an era of
          information overload and rapid dissemination of news, our mission is
          to be the beacon of truth, helping individuals and communities
          navigate the complex landscape of digital media.
        </p>
        <p>We strive to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Promote critical thinking and media literacy</li>
          <li>Combat the spread of misinformation and disinformation</li>
          <li>
            Empower users with tools and knowledge to verify information
            independently
          </li>
          <li>
            Foster trust in journalism and digital media through transparency
            and accuracy
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                Rigorous Fact-Checking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We employ a team of experienced fact-checkers and use advanced
                verification techniques to ensure the accuracy of information.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Educational Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We provide comprehensive guides, tutorials, and workshops to
                enhance media literacy and critical thinking skills.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Community Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We actively involve our community in the fact-checking process,
                encouraging user submissions and feedback.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="mb-4">
          TRUELENS is powered by a diverse team of experts in journalism, data
          science, and digital media. Our fact-checkers come from various
          backgrounds, ensuring a well-rounded approach to information
          verification.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Jane Doe",
              role: "Chief Editor",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              name: "John Smith",
              role: "Lead Fact-Checker",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              name: "Emily Johnson",
              role: "Data Scientist",
              image: "/placeholder.svg?height=200&width=200",
            },
          ].map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-foreground/60">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="mb-4">
          We believe that everyone has a role to play in combating
          misinformation. Join us in our mission to promote truth and accuracy
          in the digital world.
        </p>
        <Button size="lg">Get Involved</Button>
      </section>
    </main>
  );
};

export default page;
