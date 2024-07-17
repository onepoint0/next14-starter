import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        clariodev
      </div>
      <div className={styles.text}>
        Clario creative thoughts agency &copy; all rights reserved
      </div>
    </div>
  )
}
export default Footer