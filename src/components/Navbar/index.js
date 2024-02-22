import React, { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./Nav.module.css";
import VectorIcon from "./images/vector.svg";
import BurgerIcon from "./images/burger.svg";
import CurlIcon from "./images/curl.svg";
import CurlMobIcon from "./images/curlMob.svg";

function Navigation() {
  const [nav, setNav] = useState(false);

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    setNav(false);
  };

  return (
    <section>
      <Image
        src={VectorIcon.src}
        alt="Abstraction"
        width={170}
        height={202}
        layout="fixed"
        className={styles.rotatedElement}
      />
      <Image
        src={CurlMobIcon.src}
        alt="Abstraction"
        width={118}
        height={130}
        layout="fixed"
        className={styles.rotatedMobElement}
      />
      <nav className={styles.nav}>
        <div
          className={
            nav ? [styles.navList, styles.active].join(" ") : [styles.navList]
          }
        >
          <ul className={styles.navBox}>
            <li className={styles.navItem}>
              <a
                onClick={handleNavLinkClick}
                href="#about"
                title="About Us"
                className={styles.navLink}
              >
                Обо мне{" "}
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                onClick={handleNavLinkClick}
                href="#for-whom"
                title="Target Audience"
                className={styles.navLink}
              >
                Для кого
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                onClick={handleNavLinkClick}
                href="#program"
                title="Program Details"
                className={styles.navLink}
              >
                Программа
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                onClick={handleNavLinkClick}
                href="#pricing"
                title="Pricing Plans"
                className={styles.navLink}
              >
                Тарифы
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                onClick={handleNavLinkClick}
                href="#speakers"
                title="Meet the Speakers"
                className={styles.navLink}
              >
                Спикеры
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                onClick={handleNavLinkClick}
                href="#testimonials"
                title="Customer Testimonials"
                className={styles.navLink}
              >
                Отзывы
              </a>
            </li>
          </ul>
          <div className={styles.curl}>
            <Image
              src={CurlIcon.src}
              alt="Curl"
              width={322}
              height={166}
              layout="responsive"
            />
          </div>
        </div>

        <div>
          <div onClick={() => setNav(!nav)} className={styles.mobBtn}>
            <Image
              src={BurgerIcon.src}
              alt="Abstraction"
              width={72}
              height={72}
              layout="fixed"
            />
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navigation;
