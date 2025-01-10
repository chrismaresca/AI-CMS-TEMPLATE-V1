// Next and React
import Link from "next/link";

// Shadcn UI
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Constants
import { LINKEDIN_URL, X_URL } from "@/constants";

// Components
import Linkedin from "@/components/social-icons/Linkedin";
import X from "@/components/social-icons/X";

export function FollowSocials() {
  return (
    <Card className="px-2 py-4 mb-6 bg-card border dark:border-gray-700 rounded-xl">
      <CardHeader>
        <CardTitle>Social Media</CardTitle>
        <CardDescription>I&apos;m active on these platforms</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button variant="outline" className="w-full h-12 justify-start gap-2 rounded-xl" asChild>
          <Link href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <Linkedin />
            LinkedIn
          </Link>
        </Button>
        <Button variant="outline" className="w-full h-12 justify-start gap-2 rounded-xl" asChild>
          <Link href={X_URL} target="_blank" rel="noreferrer">
            <X />X
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
