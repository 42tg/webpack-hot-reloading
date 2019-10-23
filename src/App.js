import React, { useState } from "react"
import { hot } from "react-hot-loader"

import { css } from "@emotion/core"

const Button = ({ children, ...props }) => {
    return (
        <button
            {...props}
            css={css`
                border-radius: 5px;
                padding: 5px 10px;
                margin: 5px;
            `}
        >
            {children}
        </button>
    )
}

const App = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div
            css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            `}
        >
            <Button onClick={() => setCounter(counter + 1)}>+1</Button>
            {counter}
            <Button onClick={() => setCounter(counter - 1)}>-1</Button>
        </div>
    )
}

export default hot(module)(App)
