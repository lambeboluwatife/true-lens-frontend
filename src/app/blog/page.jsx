import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Deepfakes: How to Spot Them",
    excerpt:
      "As technology advances, so does the sophistication of fake media. Learn how to identify deepfakes and protect yourself from misinformation.",
    author: "Jane Doe",
    date: "2023-06-15",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Fact-Checking in the Age of Social Media",
    excerpt:
      "Social media has revolutionized how we consume news. Discover effective strategies for fact-checking in this fast-paced digital landscape.",
    author: "John Smith",
    date: "2023-06-10",
    category: "Media Literacy",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "The Psychology of Misinformation",
    excerpt:
      "Why do people believe and spread false information? Dive into the psychological factors that contribute to the spread of misinformation.",
    author: "Emily Johnson",
    date: "2023-06-05",
    category: "Psychology",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Combating Health Misinformation",
    excerpt:
      "In light of recent global health crises, learn how to identify and combat health-related misinformation to keep yourself and others safe.",
    author: "Dr. Michael Brown",
    date: "2023-05-30",
    category: "Health",
    image: "/placeholder.svg?height=200&width=400",
  },
];

const page = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">TRUELENS Blog</h1>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <Input
          type="search"
          placeholder="Search blog posts..."
          className="flex-grow"
        />
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="media-literacy">Media Literacy</SelectItem>
            <SelectItem value="psychology">Psychology</SelectItem>
            <SelectItem value="health">Health</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <Badge className="mb-2">{post.category}</Badge>
              <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
              <CardDescription className="text-base">
                {post.excerpt}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={`/placeholder.svg?height=32&width=32&text=${post.author.charAt(
                      0
                    )}`}
                  />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium">{post.author}</p>
                  <p className="text-muted-foreground flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </p>
                </div>
              </div>
              <Button variant="ghost">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button>Load More Posts</Button>
      </div>
    </main>
  );
};

export default page;
