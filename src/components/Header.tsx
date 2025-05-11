
import { ThemeToggle } from "./ThemeToggle";
import { useProgress } from "@/contexts/ProgressContext";

export function Header() {
  const { completionPercentage } = useProgress();
  
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg md:text-xl inline-flex items-center">
            <span className="text-java-dark dark:text-java-light">Java</span>
            <span className="ml-1">DSA Roadmap</span>
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center">
            <div className="text-muted-foreground text-sm font-medium">
              Progress: {completionPercentage}% complete
            </div>
            <div className="ml-2 w-32 h-2 bg-muted rounded-full">
              <div 
                className="h-full bg-secondary rounded-full transition-all duration-500 ease-out"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
