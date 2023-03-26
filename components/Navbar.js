import Link from "next/link";
import React from "react";
import styles from "../styles/navBar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/classes">
        סדנאות והרצאות
      </Link>
      <br />
      <Link className={styles.link} href="/blog">
        משהו קטן לנפש
      </Link>
      <br />
      <Link className={styles.link} href="/stories">
        תיאור מקרים
      </Link>
      <br />
      <Link className={styles.link} href="/articles">
        מאמרים
      </Link>
      <br />
      <Link className={styles.link} href="/orders">
        הזמנת טיפול
      </Link>
      <br />
    </div>
  );
};

export default Navbar;
