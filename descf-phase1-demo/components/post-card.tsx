import Link from "next/link";
import { Card } from "@/components/card";
import type { NewsPost } from "@/data/site";

export function PostCard({ post }: { post: NewsPost }) {
  return (
    <Card className="h-full">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth-300">{post.category}</p>
      <h3 className="mt-4 text-xl font-bold text-cream">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-cream/70">{post.excerpt}</p>
      <Link href={`/newsroom/${post.slug}`} className="focus-ring mt-6 inline-flex rounded-full text-sm font-semibold text-earth-300 hover:text-cream">
        Read update →
      </Link>
    </Card>
  );
}
