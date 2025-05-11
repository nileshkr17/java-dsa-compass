
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="font-bold tracking-tighter text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Java DSA Roadmap
          </h1>
          
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Your one-stop checkpoint to master Data Structures and Algorithms in Java.
          </p>
          
          <p className="max-w-[600px] text-sm md:text-base text-muted-foreground">
            Master Data Structures & Algorithms for coding interviews, real-world software development, 
            and academic learning with our structured learning path.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link to="topics" smooth={true} duration={500}>
              <Button className="px-8 bg-primary hover:bg-primary/90">Start Learning</Button>
            </Link>
            <Button asChild variant="outline">
              <a 
                href="https://github.com/nileshkr17/Java-DSA-roadmap" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8"
              >
                GitHub Repo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
