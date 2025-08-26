import React from 'react'
import Test from "../components/test.js"

function page() {
    return (
        <div>
            <Test name="hello1" body="hello2" />
            <Test name="hello13" body="hello22" />
            <Test />
            <Test />
        </div>
    )
}

export default page