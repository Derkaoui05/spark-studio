import { Button } from "@/components/ui/button";
import FuzzyText from "@/components/ui/fuzzy-text";
import { BusFrontIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center space-y-10">
        <FuzzyText baseIntensity={0.2}>404 Not Found!!!</FuzzyText>
        <Link href="/">
          <Button>Back To Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
