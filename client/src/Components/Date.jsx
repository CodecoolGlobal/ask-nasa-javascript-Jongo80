import React from 'react'

const Date = (props) => {
    return (
        <div>
            <form onSubmit={props.date}>
                <label htmlFor="date">Write here the date (YYYY-MM-DD)</label><br />
                <input name="date" /><br />
                <input type="submit" /><br />
            </form>
        </div>
    )
}

export default Date
