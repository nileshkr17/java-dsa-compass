
import { Button } from "@/components/ui/button";
import { useProgress } from "@/contexts/ProgressContext";

export function Footer() {
  const { resetProgress } = useProgress();
  
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Java DSA Roadmap</h3>
            <p className="text-sm text-muted-foreground">
              A comprehensive guide to master Data Structures and Algorithms in Java.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://leetcode.com" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  LeetCode
                </a>
              </li>
              <li>
                <a href="https://www.geeksforgeeks.org" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  GeeksForGeeks
                </a>
              </li>
              <li>
                <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">About</h3>
            <p className="text-sm text-muted-foreground">
              Created with ❤️ to help developers master DSA concepts.
            </p>
            <Button variant="outline" size="sm" onClick={resetProgress}>
              Reset Progress
            </Button>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()}
            
            <a href="https://in.linkedin.com/in/nileshkr17" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
              Nileshkr17
            </a> .
             
             All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
