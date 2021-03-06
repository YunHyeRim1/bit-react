import React, { useContext } from 'react'
import { NumberContext } from './NumberProvider'

const EqualButton = () => {
    const { doMatch } = useContext(NumberContext)
    return (<button className={"white-button"} type={"button"} onClick={ () => doMatch()}>
        =
    </button>)
}

export default EqualButton