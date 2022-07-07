import React from 'react'
import Input from '../ui/input'
import tmdb from '../../api/tmdb'
import MovieCard from '../movieCard/movieCard'
import Scrollbar from '../ui/scrollbar'
import { useMovie } from '../../context/movie'

const Add:React.FC = () => {

    const [search,setSearch] = React.useState<string>("")
    const [resualts,setResualts] = React.useState([])

    const handleChange = (e:React.ChangeEvent) => {
        const { value } = e.target as HTMLInputElement
        setSearch(value)
    }

    React.useEffect(() => {
        const tmdbMovie = async (term:any) => { 
            const res = await tmdb.get("/search/movie",{
                params:{
                    api_key:"a5b13e03aca3e4b39dee2a79d5e2db94",
                    query: term
                }
            })
            setResualts(res!.data['results'])
           
        }  

        if (search !== "") {
            tmdbMovie(search)
        }
            
        
    }, [search])
    
    const { addMovieWatchlist , watchlist } = useMovie()  
   
    return (
        <div className='w-full h-full flex flex-col p-2 py-4'>
            <Input 
                label='search movie' 
                name='search'
                placeHolder='search movie ...'
                type='search'
                value={search}
                onChange={handleChange}
            />
            <Scrollbar key={'ut'} className='my-3 p-3 cart-scrollbar flex flex-col'>
                {resualts.length && search.length > 0 ? 
                    resualts.map((item,i) => 
                        <div key={item + i}>
                            <MovieCard data={item} addMovieWatchlist={addMovieWatchlist} watchlist={watchlist} />
                        </div>
                    )
                :null}
            </Scrollbar>
        </div>
    )
}

export default Add