import Image from 'next/image';
import style from './logo.module.css';
function logo() {
  return (
  <div className={style.logo}>
  <Image src="/logo.jpg" alt="image" width="64" height="64" />
  </div>
  )
}

export default logo;