
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sidebar } from "@/components/Sidebar";
import { TopicsGrid } from "@/components/TopicsGrid";
import { BookmarkedTopics } from "@/components/BookmarkedTopics";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Hero />
          <BookmarkedTopics />
          
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1">
              <TopicsGrid />
            </main>
          </div>
          
          <Footer />
        </div>
      </ProgressProvider>
    </ThemeProvider>
  );
};

export default Index;
