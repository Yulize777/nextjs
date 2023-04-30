import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from "./burgers.module.css"
export const getStaticProps = async () => {
    const res = await fetch("http://localhost:8000/items")
    const data = await res.json()
    return {
        props: {
            burgers: data
        }
    }
}
export default function Burger({burgers}) {
    return (
        <div>
           <h1> all burgers</h1>
            {
                burgers.map(item => (
                    <Link legacyBehavior key={item.id} href={`/burgers/${item.id}`}>
                        <a className={styles.burgerCard}>
                            <div className={styles.imageContainer}>
                                <Image width="150" height="150"   src={item.image} alt={`${item.name}`}/>
                            </div>
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </a>
                    </Link>
                ))
            }
        </div>
    );
};

