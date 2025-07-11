import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/FullLogo_Transparent_NoBuffer.png"
        alt="NearaNavi logo"
        width={120}
        height={60}
        className={styles.logo}
        priority
      />
      <h1 className={styles.title}>NearaNavi</h1>
    </header>
  )
}
