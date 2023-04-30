import React from 'react';
import styles from "./burgers.module.css"
import Image from "next/image";
export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:8000/items")
    const data = await res.json()
    const paths = data.map(item => {
        return {
            params: {id: item.id}
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`http://localhost:8000/items/${id}`)
    const data = await res.json()
    return {
        props: {
            burger: data
        }
    }
}
const Id = ({burger}) => {
    return (
        <div className={styles.singleBurger}>
            <h1>{burger.name}</h1>
            <div className={styles.imageContainer}>
                <Image width="150" height="150"   src={burger.image} alt={`${burger.name}`}/>
            </div>
            <div className="">
                <p>{burger.desc}</p>
            </div>
        </div>
    );
};

export default Id;