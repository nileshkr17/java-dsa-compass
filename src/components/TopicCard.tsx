
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useProgress, Topic } from "@/contexts/ProgressContext";
import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  const { toggleCompleted, toggleBookmarked, isCompleted, isBookmarked } = useProgress();
  
  const difficultyColor = {
    beginner: "text-green-500 dark:text-green-400",
    intermediate: "text-amber-500 dark:text-amber-400",
    advanced: "text-red-500 dark:text-red-400"
  };
  
  return (
    <Card className={cn(
      "transition-all duration-200 hover:shadow-md border",
      isCompleted(topic.id) ? "bg-muted/30" : ""
    )}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <CardTitle className="text-lg">{topic.title}</CardTitle>
            <span className={cn("text-xs", difficultyColor[topic.difficulty])}>
              {topic.difficulty.charAt(0).toUpperCase() + topic.difficulty.slice(1)}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8",
              isBookmarked(topic.id) ? "text-yellow-500 hover:text-yellow-600" : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => toggleBookmarked(topic.id)}
          >
            <Bookmark
              className={cn("h-5 w-5", isBookmarked(topic.id) ? "fill-current" : "")}
            />
          </Button>
        </div>
        <CardDescription className="line-clamp-2 h-10">
          {topic.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id={`checkbox-${topic.id}`} 
            checked={isCompleted(topic.id)} 
            onCheckedChange={() => toggleCompleted(topic.id)}
          />
          <label 
            htmlFor={`checkbox-${topic.id}`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {isCompleted(topic.id) ? "Completed" : "Mark as complete"}
          </label>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm" className="w-full">
          <a href={topic.link} target="_blank" rel="noreferrer">
            Learn More
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
