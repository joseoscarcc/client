
import BlogPost from "@/components/BlogPost";
import { POSTS } from "@/constants";

export default function Home() {
  return (
    <>
      <BlogPost post={POSTS} />
    </>
  );
}