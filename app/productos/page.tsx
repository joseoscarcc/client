import BlogPost from "@/components/BlogPost";
import { POSTS } from "@/constants";

export default function Home() {
  return (
    <>
      <BlogPost 
        id={POSTS.id}
        title={POSTS.title}
        subtitle={POSTS.subtitle}
        date={POSTS.date}
        start={POSTS.start}
        image={POSTS.image}
        body={POSTS.body}
        end={POSTS.end}
      />
    </>
  );
}