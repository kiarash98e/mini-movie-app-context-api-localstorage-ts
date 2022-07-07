import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useMovie } from '../../context/movie'
import Add from '../add/add'
import Watched from '../watched/watched'
import Watchlist from '../watchlist/watchlist'
import Header from './header/header'

const Layout:React.FC = () => {

  const { watchlist } = useMovie()
  console.log(watchlist)
  return (
    <div className='relative flex-grow'>
        <Header />
        <div className='h-full w-full'>
          <div className="max-w-7xl mx-auto flex justify-center items-center py-3">
            <Routes>
              <Route path='/' element={<Watchlist/>}/>
              <Route path='/watched' element={<Watched/>} />
              <Route path='/add' element={<Add/>} />
          </Routes>
          </div>
        </div>
        
    </div>
  )
}

export default Layout