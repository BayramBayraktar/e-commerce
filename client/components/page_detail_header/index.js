import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styleCss from './style.module.css'


const Page_detail_header = ({ title, extra_text }) => {
    const router = useRouter()
    const [breadcrumps, setbreadcrumps] = useState()

    useEffect(() => {
        const breadcrump = router.asPath.split('/').filter(e => { return e.length != 0 })
        setbreadcrumps(breadcrump)
    }, [router])

    return (
        <div className={styleCss.about_header}>
            <div className={styleCss.breadcrumb}>
                <li>
                    <Link href='/' className={styleCss.basepage}>Home</Link>
                </li>
                {breadcrumps && breadcrumps.map((item, index) => (
                    <li key={index}>
                        <Link href={`/${item}`} className={`${router.asPath === router.asPath && styleCss.basepage}`}>
                            {`${item} ${extra_text ? extra_text : ""}`}
                        </Link>
                    </li>
                ))}
            </div>
            <div className={styleCss.title_page}>
                {title}
            </div>
        </div>
    )
}


export default Page_detail_header

