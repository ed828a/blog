import React from "react";
import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";
import ListItem from "@/app/components/ListItem";

export const revalidate = 86400; // a day

type Props = {
    params: {
        tag: string;
    };
};

export async function generateStaticParams() {
    const posts = await getPostsMeta(); // deduped
    if (!posts) return [];

    const tags = new Set(posts.map((posts) => posts.tags).flat());
    console.log("tags", tags);

    return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }: Props) {
    return {
        title: `Posts about ${tag}`,
    };
}

const TagPostList = async ({ params: { tag } }: Props) => {
    console.log("tag", tag);
    const posts = await getPostsMeta(); //deduped
    if (!posts)
        return <p className="mt-10 text-center">Sorry, no posts available</p>;

    const tagPosts = posts.filter((post) => post.tags.includes(tag));
    if (!tagPosts.length)
        return (
            <div className="text-center">
                <p className="mt-10">Sorry, no posts for that keyword.</p>
                <Link href="/">Back to Home</Link>
            </div>
        );

    return (
        <div>
            <h2 className="text-3xl mt-4 mb-0">Results for #{tag}</h2>
            <section className="mt-6 mx-auto max-w-2xl">
                <ul className="w-full list-none p-0">
                    {tagPosts.map((post) => (
                        <ListItem key={post.id} post={post} />
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default TagPostList;
