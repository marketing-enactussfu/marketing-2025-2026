
'use client'

import React, { useState } from 'react'

function Page() {

    const [counter, setCounter] = useState(0)

    return (
        <div>{counter}
            <button onClick={() => setCounter(counter + 1)}> press </button>
        </div>
    )
}

export default Page