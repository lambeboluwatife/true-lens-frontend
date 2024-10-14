import Link from "next/link";
import {
  Search,
  ArrowRight,
  FileText,
  Book,
  Video,
  CheckCircle,
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

const searchResults = {
  factChecks: [
    {
      id: 1,
      title: "Claim: COVID-19 vaccines contain microchips",
      status: "False",
      date: "2023-06-15",
    },
    {
      id: 2,
      title: "Claim: Earth is flat",
      status: "False",
      date: "2023-06-14",
    },
    {
      id: 3,
      title: "Claim: New study shows benefits of meditation",
      status: "Mostly True",
      date: "2023-06-13",
    },
  ],
  resources: [
    {
      id: 1,
      title: "Introduction to Fact-Checking",
      type: "Guide",
      level: "Beginner",
    },
    { id: 2, title: "How to Verify Images", type: "Video", duration: "15 min" },
    {
      id: 3,
      title: "TRUELENS Browser Extension",
      type: "Tool",
      platform: "Chrome, Firefox",
    },
  ],
  blogPosts: [
    {
      id: 1,
      title: "The Rise of Deepfakes: How to Spot Them",
      excerpt:
        "As technology advances, so does the sophistication of fake media. Learn how to identify deepfakes and protect yourself from misinformation.",
      author: "Jane Doe",
      date: "2023-06-15",
    },
    {
      id: 2,
      title: "Fact-Checking in the Age of Social Media",
      excerpt:
        "Social media has revolutionized how we consume news. Discover effective strategies for fact-checking in this fast-paced digital landscape.",
      author: "John Smith",
      date: "2023-06-10",
    },
  ],
};

const getStatusIcon = (status) => {
  switch (status) {
    case "True":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "False":
      return <CheckCircle className="h-5 w-5 text-red-500" />;
    case "Mostly True":
      return <CheckCircle className="h-5 w-5 text-yellow-500" />;
    default:
      return <CheckCircle className="h-5 w-5 text-gray-500" />;
  }
};

const page = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Search Results for "example query"
      </h1>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Results</TabsTrigger>
          <TabsTrigger value="fact-checks">Fact Checks</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="blog-posts">Blog Posts</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Fact Checks</h2>
              <div className="grid gap-4">
                {searchResults.factChecks.map((result) => (
                  <Card key={result.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{result.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {result.date}
                          </span>
                          <div className="flex items-center">
                            {getStatusIcon(result.status)}
                            <span className="ml-2 text-sm font-medium">
                              {result.status}
                            </span>
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" size="sm">
                        Read Full Fact Check
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Resources</h2>
              <div className="grid gap-4">
                {searchResults.resources.map((result) => (
                  <Card key={result.id}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        {result.type === "Guide" && (
                          <FileText className="h-5 w-5 mr-2" />
                        )}
                        {result.type === "Video" && (
                          <Video className="h-5 w-5 mr-2" />
                        )}
                        {result.type === "Tool" && (
                          <Book className="h-5 w-5 mr-2" />
                        )}
                        {result.title}
                      </CardTitle>
                      <CardDescription>
                        <Badge variant="secondary" className="mr-2">
                          {result.type}
                        </Badge>
                        {result.level && (
                          <Badge variant="outline">{result.level}</Badge>
                        )}
                        {result.duration && (
                          <Badge variant="outline">{result.duration}</Badge>
                        )}
                        {result.platform && (
                          <Badge variant="outline">{result.platform}</Badge>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" size="sm">
                        Access Resource
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
              <div className="grid gap-4">
                {searchResults.blogPosts.map((result) => (
                  <Card key={result.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{result.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {result.author}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {result.date}
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        {result.excerpt}
                      </p>
                      <Button variant="ghost" size="sm">
                        Read Full Post
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </TabsContent>
        <TabsContent value="fact-checks">
          <div className="grid gap-4">
            {searchResults.factChecks.map((result) => (
              <Card key={result.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{result.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {result.date}
                      </span>
                      <div className="flex items-center">
                        {getStatusIcon(result.status)}
                        <span className="ml-2 text-sm font-medium">
                          {result.status}
                        </span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm">
                    Read Full Fact Check
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="resources">
          <div className="grid gap-4">
            {searchResults.resources.map((result) => (
              <Card key={result.id}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    {result.type === "Guide" && (
                      <FileText className="h-5 w-5 mr-2" />
                    )}
                    {result.type === "Video" && (
                      <Video className="h-5 w-5 mr-2" />
                    )}
                    {result.type === "Tool" && (
                      <Book className="h-5 w-5 mr-2" />
                    )}
                    {result.title}
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mr-2">
                      {result.type}
                    </Badge>
                    {result.level && (
                      <Badge variant="outline">{result.level}</Badge>
                    )}
                    {result.duration && (
                      <Badge variant="outline">{result.duration}</Badge>
                    )}
                    {result.platform && (
                      <Badge variant="outline">{result.platform}</Badge>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm">
                    Access Resource
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="blog-posts">
          <div className="grid gap-4">
            {searchResults.blogPosts.map((result) => (
              <Card key={result.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{result.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {result.author}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {result.date}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {result.excerpt}
                  </p>
                  <Button variant="ghost" size="sm">
                    Read Full Post
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-center">
        <Button>Load More Results</Button>
      </div>
    </main>
  );
};

export default page;
