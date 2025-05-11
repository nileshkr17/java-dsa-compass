
import { useProgress, Topic, topics } from "@/contexts/ProgressContext";
import { TopicCard } from "./TopicCard";
import { ScrollArea } from "./ui/scroll-area";

export function BookmarkedTopics() {
  const { bookmarkedTopics } = useProgress();
  
  const bookmarkedTopicData = topics.filter(topic => 
    bookmarkedTopics.has(topic.id)
  );
  
  if (bookmarkedTopicData.length === 0) {
    return null;
  }
  
  return (
    <section className="py-6">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Bookmarked Topics</h2>
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex space-x-4 p-1">
            {bookmarkedTopicData.map((topic) => (
              <div key={topic.id} className="w-[300px] flex-shrink-0">
                <TopicCard topic={topic} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}
