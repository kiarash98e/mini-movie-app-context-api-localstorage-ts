import React,{ createContext } from 'react'


interface State {
    watchlist: any;
    watched: any;
}

export const initialState:State = {
    watchlist: localStorage.getItem("watchlist")!
        ? JSON.parse(localStorage.getItem("watchlist")!)
        : [],
     watched: localStorage.getItem("watched")!
        ? JSON.parse(localStorage.getItem("watched")!)
        : [],    
}


type Action = 
| {
    type: "ADD_WATCHLIST",movie:any
}| {
    type: "ADD_WATCHED",movie:any
}| {
    type: "DELETE_WATCHED",id:any
}| {
    type: "DELETE_WATCHLIST",id:any
}


const uiReducer = ( state:State, action:Action ) => {
    switch (action.type) {
        case "ADD_WATCHLIST" : {
            return {
                ...state,
                watchlist: [ ...state.watchlist, { ...action.movie } ]
            }
        }
        case "ADD_WATCHED" : {
            return {
                ...state,
                watchlist: state.watchlist.filter((item:any) => (
                    item.id !== action.movie.id
                )),
                watched: [ ...state.watched , { ...action.movie } ]
            }
        }
        case "DELETE_WATCHED" : {
           let watchDel = state.watched.filter((item:any) => item.id !== action.id)
            return {
                ...state,
                watched: watchDel
            }
        }
        case "DELETE_WATCHLIST" : {
            let watchDel = state.watchlist.filter((item:any) => item.id !== action.id)
            return {
                ...state,
                watchlist:  watchDel
            }
        }
        default:
            return state
    }
}


const MovieContext = createContext<State | any>(initialState)
MovieContext.displayName = "MovieContext"

export const useMovie = () => {
    const context = React.useContext(MovieContext)
    if (context === undefined) {
        throw new Error("useMovie not found !!!")
    }
    return context
}

export const MovieProvider:React.FC<any> = (props) => {
    
    const [state, dispatch] = React.useReducer(
        uiReducer,
        initialState
    )
    
    React.useEffect(() => {
        localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
        localStorage.setItem("watched",JSON.stringify(state.watched))
    }, [state])

    const addMovieWatchlist = (movie: any) => dispatch({type:"ADD_WATCHLIST",movie})
    const addMovieWatched = (movie: any) => dispatch({type:"ADD_WATCHED",movie})
     const deleteMovieWatched = (id: any) => dispatch({type:"DELETE_WATCHED",id})
    const deleteMovieWatchlist = (id: any) => dispatch({type:"DELETE_WATCHLIST",id})
    
    const value = React.useMemo(
        () => ({
            ...state,
            addMovieWatchlist,
            addMovieWatched,
            deleteMovieWatched,
            deleteMovieWatchlist,
        }),
        [state]    
    )

    return <MovieContext.Provider value={value} {...props} />

}

const MovieMagned:React.FC<any> = ({children}) => {
    return(
        <MovieProvider>{children}</MovieProvider>
    )
}

export default MovieMagned