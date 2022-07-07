import React from 'react'
import Button from '../ui/button'

const MovieCard: React.FC<any> = ({ data, watchlist, addMovieWatchlist }) => {
    const { poster_path, title, vote_average, vote_count, id, release_date } = data
    const imageURL = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : ""


    const storedMovie = watchlist.length ? watchlist.find((i: any) => i.id === data.id) : null
    const disabledMovie = storedMovie ? true : false

    return (
        <>
            <div className='w-full flex h-auto px-3 my-3 border-gray-400' key={id}>
                <div className='w-28 h-auto relative'>
                    <img src={imageURL} alt={title} className="w-full h-full rounded-lg" />
                    <div className='absolute top-4 start-4'></div>
                </div>
                <div className='flex flex-col mx-5'>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-blue-900">{title}</h3>
                    <h4 className='text-base pt-4 md:text-base lg:text-lg text-blue-500'>
                        Ratting : {vote_average}
                    </h4>
                    <h4 className='text-base pt-0.5 md:text-base lg:text-lg text-blue-500'>
                        Count Viwer : {vote_count}
                    </h4>
                    <h4 className='text-base pt-0.5 md:text-base lg:text-lg text-blue-300'>
                        {release_date ? release_date.substring(0, 4) : ""}
                    </h4>
                    <div className='my-2 px-1'>

                        <Button variant='modal'
                            disabled={disabledMovie}
                            aria-label='add watchlist'
                            className='w-40 h-12 text-center rounded-3xl'
                            onClick={() => {
                                addMovieWatchlist(data)
                            }}
                        >
                            add to watchlist
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard