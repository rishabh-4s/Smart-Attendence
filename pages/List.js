import { React, useState } from 'react'
import data from "./api/dummy.json"
import styles from "../styles/checkattendance.module.css"

function List(props) {
    return (
        <div className={styles.tj}>
             <ul>
            {data.map((item) => (
                <li className={styles.efg} key={item.id}>{item.text}</li>
            ))}
            </ul>
        </div>
       
    )
}

export default List