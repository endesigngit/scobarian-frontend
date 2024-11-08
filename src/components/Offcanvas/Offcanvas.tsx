import { clsx } from "clsx";
import styles from "./Offcanvas.module.css";
import { ReactNode, useState, useEffect } from "react";

type OffcanvasProps = {
  isActive: boolean;
  closeHandler: (value: boolean) => void;
  title: string;
  children: ReactNode;
};

export default function Offcanvas({ isActive, closeHandler, title = "Offcanvas", children }: OffcanvasProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setIsClosing(true);
      const timer = setTimeout(() => setIsClosing(false), 600); 
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <div className={clsx(styles.offcanvas, isActive ? styles.offcanvas__active : isClosing && styles.offcanvas__inactive)}>
      <div className={styles.overlay} onClick={() => closeHandler(false)}></div>
      <div className={styles.offcanvas_body}>
        <div className={styles.offcanvas_nav}>
          <span className={styles.offcanvas_title}>{title}</span>
          <button type="button" className={styles.offcanvas_close_btn} onClick={() => closeHandler(false)}>
            Закрыть
          </button>
        </div>
        <div className={styles.offcanvas_content}>{children}</div>
      </div>
    </div>
  );
}
