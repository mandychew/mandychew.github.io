import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, Tag } from "lucide-react";

interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

interface ArticlesListProps {
  articles?: Article[];
  isLoading?: boolean;
}

const ArticlesList = ({
  articles = [
    {
      id: "1",
      title: "The Intersection of Computing and Law in Modern Business",
      summary:
        "Exploring how technology is reshaping legal frameworks and business operations in the digital age.",
      date: "2023-10-15",
      readTime: "5 min read",
      tags: ["Computing", "Law", "Business"],
      slug: "computing-law-business",
    },
    {
      id: "2",
      title: "Digital Transformation in Legal Services",
      summary:
        "How AI and automation are changing the landscape of legal services and creating new opportunities.",
      date: "2023-09-22",
      readTime: "8 min read",
      tags: ["Legal Tech", "AI", "Digital Transformation"],
      slug: "digital-transformation-legal",
    },
    {
      id: "3",
      title: "Ethical Considerations in Business Computing",
      summary:
        "Examining the ethical challenges that arise at the intersection of business decisions and computing technologies.",
      date: "2023-08-10",
      readTime: "6 min read",
      tags: ["Ethics", "Computing", "Business"],
      slug: "ethical-considerations",
    },
  ],
  isLoading = false,
}: ArticlesListProps) => {
  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 bg-background">
        <h2 className="text-2xl font-bold mb-6">Articles</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="w-full">
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </CardHeader>
              <CardContent>
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              </CardContent>
              <CardFooter>
                <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 bg-background">
        <h2 className="text-2xl font-bold mb-6">Articles</h2>
        <Card className="w-full text-center p-12">
          <CardContent>
            <h3 className="text-xl font-medium mb-2">No articles yet</h3>
            <p className="text-muted-foreground mb-6">
              I'm working on some interesting content. Check back soon for
              articles about computing, law, and digital business.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-background">
      <h2 className="text-2xl font-bold mb-6">Articles</h2>
      <div className="space-y-6">
        {articles.map((article) => (
          <Card
            key={article.id}
            className="w-full hover:shadow-md transition-shadow"
          >
            <CardHeader>
              <CardTitle className="text-xl">{article.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarIcon className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                <span className="mx-1">•</span>
                <Clock className="h-4 w-4" /> {article.readTime}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{article.summary}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Tag className="h-3 w-3" /> {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
