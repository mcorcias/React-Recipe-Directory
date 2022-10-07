import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { lazy,Suspense} from 'react'

import NavBar from './components/NavBar' 
import Home from './pages/home/Home' 

const Search = lazy(()=>import('./pages/search/Search'))
const Recipe = lazy(()=>import('./pages/recipe/Recipe'))
const Create = lazy(()=>import('./pages/create/Create'))


export default function Routes() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Suspense fallback={<p>Loading...</p>}>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/recipes/:id">
                    <Recipe />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
            </Suspense>
        </Switch>
    </BrowserRouter>
  )
}
