import React from "react";
import styles from "./styles.module.scss";

export const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => (
  <button style={{ color: "orange" }} {...props}>
    {children}
  </button>
);

export const Menu = ({ id = "icon", ...props }: { id?: string }) => (
  <>
    <input type="checkbox" id={id} />
    <label className={styles.MenuIcon} htmlFor={id}>
      <span className={styles.BreadTop}>
        <span className={styles.BreadCrust} />
      </span>
      <span className={styles.BreadBottom}>
        <span className={styles.BreadCrust} />
      </span>
    </label>
    <div className={styles.Content} {...props} />
  </>
);
