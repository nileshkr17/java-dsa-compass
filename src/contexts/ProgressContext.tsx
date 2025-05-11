
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "@/components/ui/sonner";

export interface Topic {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

interface ProgressContextType {
  completedTopics: Set<string>;
  bookmarkedTopics: Set<string>;
  toggleCompleted: (topicId: string) => void;
  toggleBookmarked: (topicId: string) => void;
  completionPercentage: number;
  isCompleted: (topicId: string) => boolean;
  isBookmarked: (topicId: string) => boolean;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const topics: Topic[] = [
  // Arrays
  {
    id: "arrays-basics",
    title: "Arrays Basics",
    description: "Learn about array creation, initialization, and basic operations.",
    category: "Arrays",
    link: "https://github.com/username/java-dsa-roadmap/arrays",
    difficulty: "beginner"
  },
  {
    id: "arrays-searching",
    title: "Array Searching",
    description: "Linear search, binary search, and other searching algorithms.",
    category: "Arrays",
    link: "https://github.com/username/java-dsa-roadmap/arrays/searching",
    difficulty: "beginner"
  },
  {
    id: "arrays-sorting",
    title: "Sorting Algorithms",
    description: "Bubble sort, insertion sort, selection sort, merge sort, quick sort.",
    category: "Arrays",
    link: "https://github.com/username/java-dsa-roadmap/arrays/sorting",
    difficulty: "intermediate"
  },
  {
    id: "arrays-2d",
    title: "2D Arrays / Matrices",
    description: "Working with multi-dimensional arrays and matrices in Java.",
    category: "Arrays",
    link: "https://github.com/username/java-dsa-roadmap/arrays/2d",
    difficulty: "intermediate"
  },
  
  // Linked Lists
  {
    id: "linkedlist-singly",
    title: "Singly Linked Lists",
    description: "Implementation and operations on singly linked lists.",
    category: "Linked Lists",
    link: "https://github.com/username/java-dsa-roadmap/linkedlist/singly",
    difficulty: "beginner"
  },
  {
    id: "linkedlist-doubly",
    title: "Doubly Linked Lists",
    description: "Implementation and operations on doubly linked lists.",
    category: "Linked Lists",
    link: "https://github.com/username/java-dsa-roadmap/linkedlist/doubly",
    difficulty: "intermediate"
  },
  {
    id: "linkedlist-circular",
    title: "Circular Linked Lists",
    description: "Implementation and operations on circular linked lists.",
    category: "Linked Lists",
    link: "https://github.com/username/java-dsa-roadmap/linkedlist/circular",
    difficulty: "intermediate"
  },
  
  // Stacks & Queues
  {
    id: "stack-basics",
    title: "Stack Implementation",
    description: "Implementation of stack data structure using arrays and linked lists.",
    category: "Stacks & Queues",
    link: "https://github.com/username/java-dsa-roadmap/stack",
    difficulty: "beginner"
  },
  {
    id: "queue-basics",
    title: "Queue Implementation",
    description: "Implementation of queue data structure using arrays and linked lists.",
    category: "Stacks & Queues",
    link: "https://github.com/username/java-dsa-roadmap/queue",
    difficulty: "beginner"
  },
  {
    id: "deque",
    title: "Deque",
    description: "Double-ended queue implementation and applications.",
    category: "Stacks & Queues",
    link: "https://github.com/username/java-dsa-roadmap/deque",
    difficulty: "intermediate"
  },
  
  // Trees
  {
    id: "binary-tree",
    title: "Binary Trees",
    description: "Implementation of binary trees and basic operations.",
    category: "Trees",
    link: "https://github.com/username/java-dsa-roadmap/trees/binary",
    difficulty: "intermediate"
  },
  {
    id: "bst",
    title: "Binary Search Trees",
    description: "Implementation and operations on binary search trees.",
    category: "Trees",
    link: "https://github.com/username/java-dsa-roadmap/trees/bst",
    difficulty: "intermediate"
  },
  {
    id: "avl-tree",
    title: "AVL Trees",
    description: "Self-balancing binary search trees with rotations.",
    category: "Trees",
    link: "https://github.com/username/java-dsa-roadmap/trees/avl",
    difficulty: "advanced"
  },
  
  // Graphs
  {
    id: "graph-representation",
    title: "Graph Representation",
    description: "Adjacency matrix and adjacency list representations.",
    category: "Graphs",
    link: "https://github.com/username/java-dsa-roadmap/graphs/representation",
    difficulty: "intermediate"
  },
  {
    id: "graph-traversal",
    title: "Graph Traversal",
    description: "Breadth-first search (BFS) and depth-first search (DFS).",
    category: "Graphs",
    link: "https://github.com/username/java-dsa-roadmap/graphs/traversal",
    difficulty: "intermediate"
  },
  {
    id: "shortest-path",
    title: "Shortest Path Algorithms",
    description: "Dijkstra's and Bellman-Ford algorithms.",
    category: "Graphs",
    link: "https://github.com/username/java-dsa-roadmap/graphs/shortest-path",
    difficulty: "advanced"
  },
  
  // Hash Tables
  {
    id: "hash-basics",
    title: "Hashing Basics",
    description: "Hash functions and collision resolution techniques.",
    category: "Hash Tables",
    link: "https://github.com/username/java-dsa-roadmap/hashing/basics",
    difficulty: "intermediate"
  },
  {
    id: "hashmap-impl",
    title: "HashMap Implementation",
    description: "Creating a hash map data structure in Java.",
    category: "Hash Tables",
    link: "https://github.com/username/java-dsa-roadmap/hashing/hashmap",
    difficulty: "advanced"
  },
  
  // Heaps
  {
    id: "heap-basics",
    title: "Heap Data Structure",
    description: "Implementation of min and max heaps.",
    category: "Heaps",
    link: "https://github.com/username/java-dsa-roadmap/heaps/basics",
    difficulty: "intermediate"
  },
  {
    id: "priority-queue",
    title: "Priority Queue",
    description: "Implementation and applications of priority queues.",
    category: "Heaps",
    link: "https://github.com/username/java-dsa-roadmap/heaps/priority-queue",
    difficulty: "intermediate"
  }
];

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [bookmarkedTopics, setBookmarkedTopics] = useState<Set<string>>(new Set());
  const [completionPercentage, setCompletionPercentage] = useState(0);
  
  // Load progress from localStorage
  useEffect(() => {
    const savedCompletedTopics = localStorage.getItem("javaDSA-completedTopics");
    const savedBookmarkedTopics = localStorage.getItem("javaDSA-bookmarkedTopics");
    
    if (savedCompletedTopics) {
      setCompletedTopics(new Set(JSON.parse(savedCompletedTopics)));
    }
    
    if (savedBookmarkedTopics) {
      setBookmarkedTopics(new Set(JSON.parse(savedBookmarkedTopics)));
    }
  }, []);
  
  // Update completion percentage and save to localStorage whenever completedTopics changes
  useEffect(() => {
    const percentage = (completedTopics.size / topics.length) * 100;
    setCompletionPercentage(Math.round(percentage));
    
    localStorage.setItem("javaDSA-completedTopics", JSON.stringify([...completedTopics]));
    
    // Show confetti when all topics are completed
    if (completedTopics.size === topics.length && completedTopics.size > 0) {
      toast("Congratulations! 🎉", {
        description: "You've completed all topics in the roadmap!",
      });
      // We would trigger confetti here
    }
  }, [completedTopics]);
  
  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem("javaDSA-bookmarkedTopics", JSON.stringify([...bookmarkedTopics]));
  }, [bookmarkedTopics]);
  
  const toggleCompleted = (topicId: string) => {
    setCompletedTopics((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(topicId)) {
        newSet.delete(topicId);
      } else {
        newSet.add(topicId);
        toast(`Topic Completed! 🎯`, {
          description: `You've marked "${topics.find(t => t.id === topicId)?.title}" as complete.`,
        });
      }
      return newSet;
    });
  };
  
  const toggleBookmarked = (topicId: string) => {
    setBookmarkedTopics((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(topicId)) {
        newSet.delete(topicId);
        toast(`Bookmark Removed`, {
          description: `"${topics.find(t => t.id === topicId)?.title}" has been removed from bookmarks.`,
        });
      } else {
        newSet.add(topicId);
        toast(`Bookmarked! 🔖`, {
          description: `"${topics.find(t => t.id === topicId)?.title}" has been added to bookmarks.`,
        });
      }
      return newSet;
    });
  };
  
  const isCompleted = (topicId: string) => completedTopics.has(topicId);
  const isBookmarked = (topicId: string) => bookmarkedTopics.has(topicId);
  
  const resetProgress = () => {
    setCompletedTopics(new Set());
    localStorage.removeItem("javaDSA-completedTopics");
    toast("Progress Reset", {
      description: "Your progress has been reset to 0%.",
    });
  };
  
  return (
    <ProgressContext.Provider value={{
      completedTopics,
      bookmarkedTopics,
      toggleCompleted,
      toggleBookmarked,
      completionPercentage,
      isCompleted,
      isBookmarked,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
