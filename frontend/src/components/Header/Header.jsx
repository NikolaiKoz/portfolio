import DesktopImg from "../../assets/Header/Img1.jpg"
import MobileImg from "../../assets/Header/Img2.jpg"
import styles from "./Header.module.scss"

export default function Header() {
  return (
    <figure>
        <img src={DesktopImg} className={styles.Desktop} alt="Desktop Image" />
        <img src={MobileImg} className={styles.Mobile} alt="Mobile Image" />
    </figure>
  )
}
