import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ModSummary = (props) => {
    const {name, author, summary, linkName} = props.mod;
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();

        setIsActive(prev => !prev);
    }
    const pageLink = `/mod/${props.index}/${linkName}`
    return (
        <article className={isActive ? 'expandedModSummary' : 'modSummary'}>
            <h3  style={{display: "inline"}}><strong>{name}</strong> by <em>{author}</em></h3> <button onClick={handleClick} style={{display: "inline"}}>{isActive ? '-' : '+' }</button>
            {isActive &&
                <>
                    <p>{summary}</p>
                    <Link to={pageLink}>More on {name}</Link> <span className="spacer">||</span><p>Download {name} now!</p>
                </>
            }
        </article>
    )
}

export default ModSummary;