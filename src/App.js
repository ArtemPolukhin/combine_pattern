import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Routes, Route, Outlet, useNavigate, useLocation } from 'react-router-dom'

import { actions as postsActions } from './features/posts/slice'

export default function App() {
  const navTo = useNavigate()

  useEffect(() => { navTo('users') }, [])
  
  return (
    <div className="App">
      <nav>
        <Link to={'/users'}>Users</Link>
        &nbsp;
        <Link to={'/posts'}>Posts</Link>
      </nav>
      <Routes>
        <Route path={'/'} element={<h1>HELLO</h1>}>Users</Route>
        <Route path={'/users'} element={<Tab title={'users'} />}>Users</Route>
        <Route path={'/posts'} element={<Tab title={'posts'} />}>Posts</Route>
      </Routes>
      <main>
        <Outlet />
      </main>
    </div>
    
  );
}

export const Tab = ({ title }) => {
  const tab = useSelector((state) => {
    switch(title) {
      case 'users': return state.users;
      case 'posts': return state.posts
    }
  })

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: title + '/' + 'add',
      payload: ['items', 'four']
    })
  }

  const handleRightClick = (ev) => {
    ev.preventDefault()

    dispatch(postsActions.toggle('items'))
  }

  useEffect(() => {
    console.log('tab', title, tab)
  }, [title, tab])

  return (
    <div>
      <h1 onClick={handleClick} onContextMenu={handleRightClick}>{title}</h1>
      {tab?.items.visible 
        && tab?.items.options.map((option, i) => <h3 key={i}>{option}</h3>)}
    </div>
  )
}
