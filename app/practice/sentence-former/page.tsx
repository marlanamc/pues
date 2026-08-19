"use client";

import { useRouter } from "next/navigation";
import { SentenceFormerGame } from "@/components/SentenceFormerGame";

export default function SentenceFormerPage() {
  const router = useRouter();

  return (
    <div className="space-y-5 lg:mx-auto lg:w-full lg:max-w-4xl">
      <SentenceFormerGame onQuit={() => router.push("/mas")} />
    </div>
  );
}
