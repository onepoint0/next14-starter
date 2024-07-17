import PostCard from '@/components/postcard/PostCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

// get with API
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-store"});

//   if (!res.ok) {
//     throw new Error('something went wrong');
//   }
//   return res.json();
// }

const BlogPage = async () => {
  const posts = await getPosts();
  // GET WITH API
  // const posts = await getData();
  return (
    <div className={styles.container}>
        {posts.map(post => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
    </div>

  )
}
export default BlogPage