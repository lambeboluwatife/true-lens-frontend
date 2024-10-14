import Link from "next/link";
import {
  Search,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowRight,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const factChecks = [
  {
    id: 1,
    title: "Claim: COVID-19 vaccines contain microchips",
    status: "False",
    category: "Health",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "Claim: Earth is flat",
    status: "False",
    category: "Science",
    date: "2023-06-14",
  },
  {
    id: 3,
    title: "Claim: New study shows benefits of meditation",
    status: "Mostly True",
    category: "Health",
    date: "2023-06-13",
  },
  {
    id: 4,
    title: "Claim: Global temperatures hit record high",
    status: "True",
    category: "Environment",
    date: "2023-06-12",
  },
  {
    id: 5,
    title: "Claim: New tax law to be implemented next month",
    status: "Unverified",
    category: "Politics",
    date: "2023-06-11",
  },
  {
    id: 6,
    title: "Claim: Artificial sweeteners linked to cancer",
    status: "Misleading",
    category: "Health",
    date: "2023-06-10",
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "True":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "False":
      return <XCircle className="h-5 w-5 text-red-500" />;
    case "Mostly True":
      return <CheckCircle className="h-5 w-5 text-yellow-500" />;
    case "Misleading":
      return <AlertCircle className="h-5 w-5 text-orange-500" />;
    default:
      return <AlertCircle className="h-5 w-5 text-gray-500" />;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "True":
      return "bg-green-100 text-green-800";
    case "False":
      return "bg-red-100 text-red-800";
    case "Mostly True":
      return "bg-yellow-100 text-yellow-800";
    case "Misleading":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const page = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Fact Checks</h1>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <Input
          type="search"
          placeholder="Search fact checks..."
          className="flex-grow"
        />
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="health">Health</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="politics">Politics</SelectItem>
            <SelectItem value="environment">Environment</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="true">True</SelectItem>
            <SelectItem value="false">False</SelectItem>
            <SelectItem value="mostly-true">Mostly True</SelectItem>
            <SelectItem value="misleading">Misleading</SelectItem>
            <SelectItem value="unverified">Unverified</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {factChecks.map((factCheck) => (
          <Card key={factCheck.id}>
            <CardHeader>
              <CardTitle className="text-lg">{factCheck.title}</CardTitle>
              <CardDescription>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{factCheck.category}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {factCheck.date}
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {getStatusIcon(factCheck.status)}
                  <span
                    className={`ml-2 text-sm font-medium ${getStatusColor(
                      factCheck.status
                    )}`}
                  >
                    {factCheck.status}
                  </span>
                </div>
                <Button variant="ghost" size="sm">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button>Load More</Button>
      </div>
    </main>
  );
};

export default page;
