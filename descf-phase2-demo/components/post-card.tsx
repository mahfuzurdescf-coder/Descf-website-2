import Link from "next/link";
import { Card } from "@/components/card";

type PostCardData = {
  title: string;
  slug: string;
  excerpt: string;
  category?: string | { title: string };
  publishedAt?: string;
  date?: string;
};

function getCategoryLabel(category: PostCardData["category"]) {
  if (!category) return "Newsroom";
  if (typeof category === "string") return category;
  return category.title;
}

export function PostCard({ post }: { post: PostCardData }) {
  return (
    <Card className="h-full">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth-300">{getCategoryLabel(post.category)}</p>
      <h3 className="mt-4 text-xl font-bold text-cream">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-cream/70">{post.excerpt}</p>
      <Link href={`/newsroom/${post.slug}`} className="focus-ring mt-6 inline-flex rounded-full text-sm font-semibold text-earth-300 hover:text-cream">
        Read update →
      </Link>
    </Card>
  );
}
