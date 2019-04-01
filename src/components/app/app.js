import React, {Component} from 'react';
import classes from './app.css'
import Header from '../header/header'
import Job from './../job/job'
import Description from '../descriptions/descript'
import Footer from '../footer/footer'
import Modal from './../modal/modal';

import withTileService from '../hw-components/withTileService'

class App extends Component {

state = {
  userData: [],
  isShowModal: false
}

toogleModal = () => {
  console.log(this.state.isShowModal);
  this.setState(state => ({
    isShowModal: !state.isShowModal
  }))
}

componentDidMount() {
  this.getСustomers()
}

componentDidUpdate(prevProps, prevState) {
  this.modalShow()
  if(this.state.userData < prevState.userData) {
    this.getСustomers()
  }
}

getСustomers = () => {
  const { stroikaServices } = this.props
  stroikaServices.getUsers()
  .then(users => {
    this.setState({
      userData: users
    })
    console.log(this.state.userData);
  })
  .catch(err => console.log(err))
}

modalShow = () => {
  const { isShowModal } = this.state
  if(isShowModal) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'scroll'
  }
}

render()
{
  const modal = this.state.isShowModal ? <Modal 
    isModal={this.toogleModal}
    /> : null

const main = (
  <main role="main" className={`${classes.app} container-fluid`}>
    <Header isModal={this.toogleModal} />
    <Job />
    <Description />
    <Footer isModal={this.toogleModal}/>
    </main>
    ) 
    
    return (
      <>
      {modal}
      {main}
    </>
    );
  }
};

export default withTileService()(App)























// window.addEventListener('scroll', this.state.scroll();


// handleScroll = () => {
//   this.setState({pixel: this.state.scroll})
//   // console.log(document.documentElement.scrollTop)
// }



// state = {
  //   scroll: () => this.handleScroll,
  //   pixel: null,
  //   isShowModal: false,
  //   userData: []
  // }
  
  
  
  // import React, {Component} from 'react';
// import './app.css'
// import Header from '../header/header'
// import Job from './../job/job'
// import Description from '../descriptions/descript'
// import Catalog from './../catalog/catalog'
// import Footer from '../footer/footer'

// export default class App extends Component {

// state = {
//   scroll: () => this.handleScroll,
//   pixel: null
// }

// componentDidMount() {
//   window.addEventListener('scroll', this.state.scroll());
// }

// // componentWillMount() {
// //   if(this.state.scroll === 1600) {
// //   window.removeEventListener('scroll', this.state.scroll);
// //   }
// // }

// handleScroll = () => {
//   this.setState({pixel: this.state.scroll})
//   console.log(document.documentElement.scrollTop)
// }

//   render()

//   {
//     return (
//     <main role="main" className="container-fluid app">
//     {/* <div onScroll={this.handleScroll} ref={(scroller) => this.scroller = scroller} > */}
//     <Header />
//     <Job scroll={this.state}/>
//     <Description />
//     <Catalog />
//     <Footer />
//      {/* </div> */}
//     </main>
//     );
//   }
// };




















// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
// import ShopHeader from './../shop-header/index';


    //     const data = [
    //         {name: 'Dubai', uv: 350, pv: 1300, amt: 2400}, 
    //         // {name: 'Dubai', uv: window.setInterval(() => Math.floor(Math.random(222 * 2) * 3), 1000), pv: 1300, amt: 2400}, 
    //         {name: 'Moscow', uv: 212, pv: 1000, amt: 2100}, 
    //         {name: 'Berlin', uv: 900, pv: 700, amt: 1800}, 
    //         {name: 'New-York', uv: 444, pv: 400, amt: 1500}, 
    //         {name: 'Washington', uv: 56, pv: 0, amt: 1200}
    // ];
    
        
// const renderLineChart = (
//     <BarChart width={730} height={250} data={data}>
//     <CartesianGrid strokeDasharray="1 1" />
//     {/* <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}> */}
//       <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//       {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
//       <XAxis dataKey="name" />
//       <YAxis dataKey="pv"/>
//       <Bar dataKey="pv" fill="#8884d8" />
//         <Bar dataKey="uv" fill="#82ca9d" />
//       <Tooltip />
//     {/* </LineChart> */}
//     </BarChart>
//   );













// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
// import ShopHeader from './../shop-header/index';




    //     const data = [
    //         {name: 'Dubai', uv: 350, pv: 1300, amt: 2400}, 
    //         // {name: 'Dubai', uv: window.setInterval(() => Math.floor(Math.random(222 * 2) * 3), 1000), pv: 1300, amt: 2400}, 
    //         {name: 'Moscow', uv: 212, pv: 1000, amt: 2100}, 
    //         {name: 'Berlin', uv: 900, pv: 700, amt: 1800}, 
    //         {name: 'New-York', uv: 444, pv: 400, amt: 1500}, 
    //         {name: 'Washington', uv: 56, pv: 0, amt: 1200}
    // ];
    
        
// const renderLineChart = (
//     <BarChart width={730} height={250} data={data}>
//     <CartesianGrid strokeDasharray="1 1" />
//     {/* <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}> */}
//       <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//       {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
//       <XAxis dataKey="name" />
//       <YAxis dataKey="pv"/>
//       <Bar dataKey="pv" fill="#8884d8" />
//         <Bar dataKey="uv" fill="#82ca9d" />
//       <Tooltip />
//     {/* </LineChart> */}
//     </BarChart>
//   );

