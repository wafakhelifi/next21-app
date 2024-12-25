import Link from 'next/link';

const PostList = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id} className="mb-4">
        <Link href={`/blog/${post.link}`} className="text-pink-900 hover:underline">
          {post.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default PostList;
