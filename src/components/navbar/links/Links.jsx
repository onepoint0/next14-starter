"use client"

import styles from "./links.module.css";
import NavLink from "../navLink/NavLink";
import { useState } from "react";
import Image from "next/image";

const Links = () => {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;

  const links = [
    {
      title: 'Home Page',
      path: '/'
    },
    {
      title: 'Contact',
      path: '/contact'
    },
    {
      title: 'About',
      path: '/about'
    }, {
      title: 'Blog',
      path: '/blog'
    }
  ]
  return (
    <div className={styles.container}>

      <div className={styles.links}>
        {links.map(link => (
          <NavLink item={link} key={link.path} />
        ))}
        {session ?
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
          : <NavLink item={{ title: "Login", path: "/login" }} />
        }

      </div>
      <Image
        className={styles.menuButton}
        onClick={() => { setOpen(prev => !prev); }}
        src="/menu.png"
        width={30}
        height={30}
      />
      {
        open &&
        <div className={styles.mobileLinks}>
          {links.map(link => <NavLink item={link} key={link.path} />)}
        </div>
      }
    </div>
  )
}
export default Links