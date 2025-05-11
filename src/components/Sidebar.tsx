
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { topics } from "@/contexts/ProgressContext";

export function Sidebar({ className }: { className?: string }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = [...new Set(topics.map(topic => topic.category))];
  
  // Get visible categories based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const categoryElements = categories.map(category => 
        document.getElementById(`category-${category.replace(/\s+/g, '-').toLowerCase()}`)
      );
      
      let current = null;
      for (let i = 0; i < categoryElements.length; i++) {
        const element = categoryElements[i];
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          current = categories[i];
        }
      }
      
      setActiveCategory(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [categories]);
  
  return (
    <aside className={cn("hidden lg:block w-[240px] shrink-0 border-r", className)}>
      <ScrollArea className="h-[calc(100vh-64px)] py-6 pr-6">
        <div className="pl-4 pr-1">
          <h2 className="text-lg font-semibold mb-4">DSA Categories</h2>
          <div className="space-y-1">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  activeCategory === category && "font-medium"
                )}
                asChild
              >
                <Link 
                  to={`category-${category.replace(/\s+/g, '-').toLowerCase()}`}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {category}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}
