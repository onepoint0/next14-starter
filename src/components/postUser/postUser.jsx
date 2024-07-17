import Image from 'next/image';
import styles from './postUser.module.css';
import { getUser } from '@/lib/data';

// get with API
// const getUser = async (userId) => {
//   console.log('get user ', userId);
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache: "no-store"})

//   if (!res.ok) {
//     throw new Error('post user component - sht went wrong');
//   }
//   return res.json();
// }

const PostUser = async ({ userId }) => {
  console.log('uid = ', userId)

  const user = await getUser(userId);
  // GET WITH API
  // const user = await getUser(userId);
  console.log('user = ', user);
  return (
    <div className={styles.detailText}>
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>{user.username}</span>
    </div>
  )
}
export default PostUser