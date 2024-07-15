import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error('main post page, sth went wrong');
  }
  return res.json();
}

export const SingePostPage = async ({params}) => {
  const {slug} = params; 
  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.unsplash.com/photo-1720440931331-bdc0e7af2045?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="post image" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title} chang it</h1>
        <div className={styles.detail}>
        <Image
          className={styles.avatar} src="https://images.unsplash.com/photo-1720440931331-bdc0e7af2045?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="post image"
          width={50}
          height={50}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={post.userId} />
        </Suspense>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>02 JUN 24</span>
        </div>
      </div>
        <div className={styles.content}>
          { post.body }  
        </div>
      </div>
    </div>
  )
}
export default SingePostPage