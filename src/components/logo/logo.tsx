import React from 'react'

interface ILogo{
    title:string
}

const logo: React.FC <ILogo> = ({title}) => {
    return (
        <>
            <h3 className='text-lime-700 text-base md:text-xl lg:text-2xl ps-2 font-satisfy font-bold'>{title}</h3>  
        </>
    )
}

export default logo
