
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const { profile, signOut } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Your Dashboard</CardTitle>
          <CardDescription>
            You are now logged in as {profile?.username || 'User'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>Welcome to Java DSA Roadmap! Start exploring to build your programming skills.</p>
            <p>You're now at level {profile?.level || 1} with {profile?.experience_points || 0} XP.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={signOut} className="w-full">
            Sign Out
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
