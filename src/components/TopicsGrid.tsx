
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { TopicCard } from "./TopicCard";
import { topics, Topic as TopicType } from "@/contexts/ProgressContext";
import { cn } from "@/lib/utils";

export function TopicsGrid() {
  const [searchResults, setSearchResults] = useState<TopicType[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = (results: TopicType[]) => {
    setSearchResults(results);
    setIsSearching(results.length > 0);
  };
  
  const categories = [...new Set(topics.map(topic => topic.category))];
  
  return (
    <section id="topics" className="py-10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">DSA Topics</h2>
        <SearchBar onSearch={handleSearch} />
        
        {isSearching ? (
          <div>
            <h3 className="text-xl font-medium mb-4">Search Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            {categories.map((category) => {
              const categoryTopics = topics.filter(topic => topic.category === category);
              const categoryId = `category-${category.replace(/\s+/g, '-').toLowerCase()}`;
              
              return (
                <div key={category} id={categoryId} className="mb-10">
                  <h3 className="text-2xl font-bold mb-4">{category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryTopics.map((topic) => (
                      <TopicCard key={topic.id} topic={topic} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
