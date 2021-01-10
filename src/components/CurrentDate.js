import React from 'react';


export default function CurrentDate() {
    const d = new Date()
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const day = weekDays[d.getDay()]
    const month = months[d.getMonth()]
    const date = d.getDate()

    return (
        <div>
            <p>
                <span className="mr-3 text-base text-gray-200 md:text-xl md:mr-3">{day}</span>
                <span className="text-gray-200">{month}, </span>
                <span className="text-gray-200">{date}</span>
            </p>      
        </div>
    )
}
