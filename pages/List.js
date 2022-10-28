import { React, useState } from 'react'
import data from "./api/dummy.json"
import styles from "../styles/checkattendance.module.css"

function List(props) {
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className={styles.tj}>
             <ul>
            {filteredData.map((item) => (
                <li className={styles.efg} key={item.id}>{item.text}</li>
            ))}
            </ul>
        </div>
       
    )
}

export default List