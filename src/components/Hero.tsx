
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { user } = useAuth();
  
  return (
    <div className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Master Java Data Structures & Algorithms
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Your comprehensive roadmap to mastering DSA concepts for interviews, 
              competitive programming, and becoming a better developer.
            </p>
          </div>
          <div className="space-x-4">
            {user ? (
              <Button asChild>
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button asChild>
                  <Link to="/auth/login">Sign In</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/auth/register">Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
