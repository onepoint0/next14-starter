import styles from './contact.module.css';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          className={styles.img}
          src="/contact.png" 
          alt="Contact image" 
          fill
        />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action="">
          <input type="text" name="" id="" placeholder='Name and Surname' />
          <input type="text" name="" id="" placeholder='Email Address' />
          <input type="text" name="" id="" placeholder='Phone Number (optional)' />
          <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
          <button>Send</button>
        </form>
      </div>

    </div>
  )
}
export default ContactPage