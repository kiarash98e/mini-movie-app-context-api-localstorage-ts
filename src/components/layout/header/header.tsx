import React from 'react'
import Logo from '../../logo/logo'
import { Link } from 'react-router-dom'


const header:React.FC = () => {
    return (
        <header className=' h-16 sm:h-20 lg:h-24 w-full relative z-[1000]'>
                <div className="innerSticky lg:w-full body-font fixed bg-rose-300 w-full h-16 sm:h-20 lg:h-24 z-20 ps-2 md:ps-0 lg:ps-16 pe-2 lg:pe-6">
                    <div className="flex items-center justify-between mx-auto px-3 md:px-12 max-w-[1920px] h-full w-full">
                        <div className='flex'>
                            <Logo title={"Movie App"} />
                        </div>
                        <div className="flex px-0 md:px-4 lg:px-12">
                            <div className="px-4">
                                <Link to={"/"}>
                                    <h3 className='text-lime-700 text-base md:text-xl lg:text-2xl ps-2 font-satisfy font-bold'>watch list</h3>  
                                </Link>
                            </div>
                            <div className="px-4">
                                <Link to={"/watched"}>
                                    <h3 className='text-lime-700 text-base md:text-xl lg:text-2xl ps-2 font-satisfy font-bold'>watched</h3>  
                                </Link>
                            </div>
                            <div className="px-4">
                                <Link to={"/add"}>
                                    <h3 className='text-lime-700 text-base md:text-xl lg:text-2xl ps-2 font-satisfy font-bold'>add</h3>  
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default header
