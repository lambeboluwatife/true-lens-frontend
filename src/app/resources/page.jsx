import Link from "next/link";
import {
  Search,
  Book,
  Video,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const resources = {
  guides: [
    {
      id: 1,
      title: "Introduction to Fact-Checking",
      type: "Guide",
      level: "Beginner",
      link: "#",
    },
    {
      id: 2,
      title: "Advanced Verification Techniques",
      type: "Guide",
      level: "Advanced",
      link: "#",
    },
    {
      id: 3,
      title: "Spotting Fake News on Social Media",
      type: "Guide",
      level: "Intermediate",
      link: "#",
    },
  ],
  videos: [
    {
      id: 1,
      title: "How to Verify Images",
      type: "Video",
      duration: "15 min",
      link: "#",
    },
    {
      id: 2,
      title: "Understanding Cognitive Biases",
      type: "Video",
      duration: "20 min",
      link: "#",
    },
    {
      id: 3,
      title: "Fact-Checking in the Digital Age",
      type: "Video",
      duration: "25 min",
      link: "#",
    },
  ],
  tools: [
    {
      id: 1,
      title: "TRUELENS Browser Extension",
      type: "Tool",
      platform: "Chrome, Firefox",
      link: "#",
    },
    {
      id: 2,
      title: "Image Verification Tool",
      type: "Tool",
      platform: "Web",
      link: "#",
    },
    {
      id: 3,
      title: "Fact-Check Database API",
      type: "Tool",
      platform: "API",
      link: "#",
    },
  ],
};

const page = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Resources</h1>

      <p className="text-lg mb-8">
        Enhance your fact-checking skills and media literacy with our curated
        collection of guides, videos, and tools.
      </p>

      <Tabs defaultValue="guides" className="mb-8">
        <TabsList>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>
        <TabsContent value="guides">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.guides.map((guide) => (
              <Card key={guide.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Book className="h-5 w-5 mr-2" />
                    {guide.title}
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mr-2">
                      {guide.type}
                    </Badge>
                    <Badge variant="outline">{guide.level}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link href={guide.link}>
                      Read Guide
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.videos.map((video) => (
              <Card key={video.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Video className="h-5 w-5 mr-2" />
                    {video.title}
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mr-2">
                      {video.type}
                    </Badge>
                    <Badge variant="outline">{video.duration}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link href={video.link}>
                      Watch Video
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="tools">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.tools.map((tool) => (
              <Card key={tool.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    {tool.title}
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mr-2">
                      {tool.type}
                    </Badge>
                    <Badge variant="outline">{tool.platform}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link href={tool.link}>
                      Access Tool
                      <Download className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
        <p className="mb-4">
          Our team of experts is here to assist you with any questions you may
          have about fact-checking or using our resources.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </main>
  );
};

export default page;
