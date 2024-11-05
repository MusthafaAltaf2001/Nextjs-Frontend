import React from 'react'

const Heading = ({ text }: { text: string }) => {
    return (
        <h1 className="text-2xl font-bold text-center pt-4 text-white">
            {text}
        </h1>
    )
}

export default Heading