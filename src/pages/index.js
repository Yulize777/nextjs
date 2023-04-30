import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
export default function Home({review}) {
    console.log(review)
  return (
      <>
          <Head>
              <title>fat burgers</title>
              <meta name="title" content="fat burgers"/>
          </Head>
          <div className={styles.container}>
              <h1 className={`${styles.title} font-effect-fire-animation`}>main</h1>
              <div className={styles.mainImage}>
                  <Image src="/fatburger.png" alt="" width={400} height={300}/>
              </div>
              <p className={styles.text}>Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих начинки можно поспорить, ведь это дело вкуса.</p>
              <p className={styles.text}>Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера заведения.</p>
              <Link  legacyBehavior href='/burgers'>
                  <a className={styles.btn}>all burgers</a>
              </Link>
          </div>
      </>
  )
}
