import Image from "next/dist/client/image"
import convertDate from "../../utils/convertDate"
import Link from "next/link"

export default function Post({ item,styles }) {

  const date = convertDate(item.date)

  return (
    <div className={styles.post}>
        <h2 className={styles.post__title}>{item.summary}</h2>
        <div className={styles.post__wrapp}>
          <div className={styles.post__subline}>
            <span className={styles.post__time}>{date}</span>
            <Link href={`/category/${item.category}`}>
              <a className={styles.post__category__link}>{item.category}</a>
            </Link>  
          </div>
          <div className={styles.post__img__wrapp}>
            <Image className={styles.post__img} src={`${item.src_img}`} alt="" width={1920} height={1080} />
          </div>
          <p className={styles.post__text}>{item.text}</p>
        </div>
        <hr/>
    </div>
  )
}