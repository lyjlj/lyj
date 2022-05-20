import React ,{Component,lazy,Suspense} from 'react'
import { NavLink,Route } from 'react-router-dom'
import Loading from './Loading'

const Home = lazy(() => import('./Home'));
const About = lazy(() => import ('./About'))

//使用组建时
export default class Demo extends Component{
    render(){
        return(
            <suspense fallback={<Loading/>}>
                <Route path="/about" component={About}></Route>
                <Route path="/home" component={Home}></Route>
            </suspense>

        )
    }

}