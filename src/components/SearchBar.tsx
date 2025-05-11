
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Topic, topics } from "@/contexts/ProgressContext";

interface SearchBarProps {
  onSearch: (results: Topic[]) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const results = topics.filter(topic => 
      topic.title.toLowerCase().includes(query.toLowerCase()) || 
      topic.description.toLowerCase().includes(query.toLowerCase()) ||
      topic.category.toLowerCase().includes(query.toLowerCase())
    );
    
    onSearch(results);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    
    if (e.target.value === "") {
      onSearch([]);
    }
  };
  
  return (
    <form onSubmit={handleSearch} className="relative max-w-md w-full mx-auto mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search topics, keywords..."
          className="pl-10 pr-12"
          value={query}
          onChange={handleChange}
        />
        <Button 
          type="submit" 
          size="sm" 
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7"
        >
          Search
        </Button>
      </div>
    </form>
  );
}
