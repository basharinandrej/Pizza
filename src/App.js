import React from 'react';
import './assets/app.scss'
import {BrowserRouter, Route, Switch} from "react-router-dom";



import {Header, Home, Card} from './page/index'





// классовая компанента с redux
// class App extends Component {
//
//     componentDidMount() {
//         axios.get('http://localhost:3000/db.json').then(resp => {
//             this.props.setPizzas(resp.data.pizzas);
//         })
//     }
//
//     render() {
//
//         return (
//             <div className="wrapper">
//
//                 <BrowserRouter>
//                     <Header />
//
//                     <Switch>
//                         <Route path="/" exact render={() => <Home items={this.props.items}/>}/>
//                         <Route path="/card" exact component={Card}/>
//                     </Switch>
//                 </BrowserRouter>
//
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) =>{
//     return {
//         items: state.pizzas.items,
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return  {
//         setPizzas: item => { dispatch( setPizzasAction(item)) }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);


const App = () => {

    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/card" component={Card}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;