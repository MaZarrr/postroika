import React, {Component} from 'react'
import classes from './job.css'
// import { append, drop, without, add} from 'ramda'

export default class Job extends Component {
    
state = {
    inputClasses: [classes.fade]
}

componentDidMount() {
    window.addEventListener('scroll', this.handleScroll); 
}
handleScroll = () => {
    if(document.documentElement.scrollTop >= 350) {
        this.state.inputClasses.unshift(classes.zoomIn)
        window.removeEventListener('scroll', this.handleScroll);
        this.state.inputClasses.pop()
        console.log(document.documentElement.scrollTop)
    }
}

render() { 
    
    const { job, my_job, shemas, sss, fa_phone, stroika_logo, 
            linee, one, one_txt, two, two_txt, tree, tree_txt, fo, fo_txt } = classes
            
    return (
        <>
      <section className={`${job} d-flex flex-column`}>
      <ul className={this.state.inputClasses.join(' ')}>
        <li className={`${my_job} justify-content-center`}>
            <h2>Укладка тротуарной плитки — комплексное мероприятие, требующее соблюдения строгих строительных тонкостей, о которых, благодаря успешному многолетнему опыту работы, знают наши укладчики</h2>
        </li>
      </ul>
    </section>
    {/* ------------------------------------------------------------------------ */}
        <div className={`${shemas} d-flex justify-content-around align-items-center`}>
        <div>
        <ul className="m-0 p-0">
        <li className=""></li>
        </ul>
        </div>
        <div>
<div className="d-flex flex-column justify-content-start">
            <div className="d-flex flex-column align-items-center">
                <ul className="m-0 p-0"><li className={`${one} m-0 pt-2`}>1</li></ul>
                <p className={one_txt}>Вызовете замерщика по телефону или отправте заявку с помощью сайта</p>
            </div>
        <li className={`${linee} d-flex justify-content-center flex-column`}>
            <div className="d-flex justify-content-between">
                <div>
                <ul className="align-self-center m-0 p-0"><li className={`${fo} m-0 pt-2`}>4</li></ul>
                <p className={fo_txt}>Подпишите договор и смету</p>
                </div>
                <ul className="m-0 p-0"><li className={`${two} m-0 pt-2`}>2</li></ul>
            </div>
            <p className={two_txt}>Замерщик приедет, проведет замеры и оговорит нюансы</p>
        <div className={`${sss} d-flex flex-column align-items-center`}>
        <button className={`${stroika_logo} m-0 p-4 bg-danger`}>
            <a href='tel:+79040902239'><i className={`fa fa-phone ${fa_phone}`}></i></a>
        </button>
    </div>
        </li>

    <div className={`d-flex ${sss} flex-column align-items-center`}>
        <ul className="p-0 m-0"><li className={`${tree} m-0 pt-2`}>3</li></ul>
        <p className={tree_txt}>После проведения замеров мы составим смету с деталями заказа</p>
    </div>
</div>
        </div>
        <li></li>
        {/* </div> */}
        </div>
    </>
        )
    }
}



















// state = {
//     inputClasses: []
// }

// componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll); 
// }
// handleScroll = () => {
//     if(document.documentElement.scrollTop >= 600) {
//         this.state.inputClasses.push('zoomIn')
//         window.removeEventListener('scroll', this.handleScroll);
//     } else {
//         this.state.inputClasses.push('fade')
//     }
//     console.log(document.documentElement.scrollTop)
// }






          
        //   {/* <ul className="my-job-schema d-flex flex-column align-items-center justify-content-between">
        //     <li className=""><span className="line">
        //     <li className="one"><div><span className="">4</span><p className="mt-3 text-center bg-info p-2">ПОДПИШИТЕ ДОГОВОР И СМЕТУ</p></div></li>
        //     <li className="two"><span>2</span></li>
        //     <li className="three"><span>3</span></li>
        //     <li className="fo"><span>1</span></li>
        //     </span></li>
        //   </ul> */}





// {/* <li><p>1</p></li>
// <div className="d-flex bg-success justify-content-around mb-5">
// <li className="bg-warning mr-5"><p className="bg-secondary ml-5">4</p></li>
// <li className="ml-5"><p className="bg-secondary mr-5">2</p></li>
// </div>
// <li><p>3</p></li> */}


// {/* <div className="shemas">
// <ul className="my-job-schema d-flex flex-column align-items-center justify-content-between">
//   <li className=""><span className="line"></span></li>
//   <li className="one"><div><span className="">4</span><p className="mt-3 text-center bg-info p-2">ПОДПИШИТЕ ДОГОВОР И СМЕТУ</p></div></li>
//   <li className="two"><span>2</span></li>
//   <li className="three"><span>3</span></li>
//   <li className="fo"><span>1</span></li>
// </ul>
// </div> */}






   // return (
    // <>
    //   <section className="job d-flex flex-column">
    //   <ul className="m-0 p-0">
    //     <li className="my-job justify-content-center">
    //         <h2>Укладка тротуарной плитки — комплексное мероприятие, требующее соблюдения строгих строительных тонкостей, о которых, благодаря успешному многолетнему опыту работы, знают наши укладчики</h2>
    //     </li>
    //   </ul>
    // </section>
    //     <div className="bg-secondary">
    //       <ul className="my-job-schema bg-info d-flex flex-column align-items-center justify-content-between">
    //         <li className=""><span></span></li>
    //         <li><p>1</p></li>
    //     <div className="d-flex bg-success justify-content-around mb-5">
    //         <li className="bg-warning"><p className="bg-secondary ml-5">4</p></li>
    //         <li><p className="bg-secondary mr-5">2</p></li>
    //     </div>
    //         <li><p>3</p></li>
    //       </ul>
    //     </div>