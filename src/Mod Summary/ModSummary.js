import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.css';

const ModSummary = (props) => {
    const {name, author, summary, linkName} = props.mod;
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();

        setIsActive(prev => !prev);
    }
    const pageLink = `/mod/${props.index}/${linkName}`
    return (
        <article className={isActive ? styles.summaryOpen : styles.summaryCollapsed}>
            <div onClick={handleClick} className={styles.titleBar}>
                <h3 className={isActive ? styles.titleOpen : styles.collapsedTitle}>{name} by {author}</h3>
                <button  className={isActive ? styles.buttonOpen : styles.buttonClosed}>{isActive ? '-' : '+' }</button>
            </div>
            {isActive &&
                <>
                    <p className={styles.summaryBody}>{summary}</p>
                    <div className={styles.linkSection}>
                        <Link to={pageLink}>More on {name}</Link>
                        <span className={styles.spacingBars}>||</span>
                        <p>Download {name} now!</p>
                    </div>
                </>
            }
        </article>
    )
}

export default ModSummary;