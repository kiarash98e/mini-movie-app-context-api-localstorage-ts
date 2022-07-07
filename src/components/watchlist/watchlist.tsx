import React from 'react'
import Scrollbar from '../ui/scrollbar'
import Logo from '../logo/logo'
import { useMovie } from '../../context/movie'
import Button from '../ui/button'
import { IoCloseCircle } from 'react-icons/io5'

const Watchlist: React.FC = () => {

    const { watchlist , addMovieWatched , deleteMovieWatchlist } = useMovie()
    const title = watchlist.length && watchlist.length > 1 ? "Movies" : "Movie"

    return (
        <div className='w-full h-full flex flex-col p-2 py-4'>
             <div className="py-3 ">
                <Logo title={title} />
            </div>
            <Scrollbar key={'uk'} className='my-3 p-3 watch-scrollbar'>
                <div className='w-full h-full row-span-full'>
                
                    {
                        watchlist.length ?
                        <div className="grid grid-cols-full sm:grid-cols-12 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-4 2xl:grid-cols-3"> 
                            {   
                                watchlist.map((item: any) => {
                                    const imageURL = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : ""
    
                                    return(
                                        <div key={item.id} className='py-2 w-full flex h-full'>
                                            <div className='w-full flex h-auto'>
                                                
                                                <div className='w-28 h-auto relative'>
                                                    <img src={imageURL} alt={item.title} className="w-full h-full rounded-lg" />
                                                    <div className='absolute top-1 cursor-pointer left-2' onClick={() => deleteMovieWatchlist(item.id)}>
                                                        <IoCloseCircle size={20} className=" text-white"/>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col mx-5'>
                                                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-blue-900">{item.title}</h3>
                                                    <h4 className='text-base pt-4 md:text-base lg:text-lg text-blue-500'>
                                                        Ratting : {item.vote_average}
                                                    </h4>
                                                    <h4 className='text-base pt-0.5 md:text-base lg:text-lg text-blue-500'>
                                                        Count Viwer : {item.vote_count}
                                                    </h4>
                                                    <h4 className='text-base pt-0.5 md:text-base lg:text-lg text-blue-300'>
                                                        {item.release_date.substring(0, 4)}
                                                    </h4>
                                                    <div className='my-2 px-1'>
    
                                                        <Button variant='modal'
                                                            aria-label='add watchlist'
                                                            className='w-40 h-12 text-center rounded-3xl'
                                                            onClick={() => {
                                                                addMovieWatched(item)
                                                            }}
                                                        >
                                                            add to watched
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div> : null
                    }
                </div>
            </Scrollbar>
        </div>
    )
}

export default Watchlist