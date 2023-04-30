import React, {useEffect} from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    },[])
    return (
        <div className={'not-found'}>
            <h1>upss</h1>
            <h2>the page does not exist</h2>
            <p>go to the <Link legacyBehavior href='/'><a>main page</a></Link></p>

        </div>
    );
};

export default NotFound;