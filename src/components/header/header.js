import React, {Component} from 'react'
import './media-header.css'
import './header.css'
import Modal from './../modal/modal'
// import {update, unless} from 'ramda'

export default class Header extends Component {

  
  componentDidUpdate() {
    this.modalShow()  
  }
  
  modalShow = () => {
    const { isShowModal, ...props } = this.props
    if(isShowModal) {
      document.body.style.overflowY = 'hidden'
      return (
        <Modal 
        {...props}
        />
      )
    } else {
      document.body.style.overflowY = 'scroll'
    }
}

render() {
  const { isModal, isShowModal } = this.props
  const head = <HeadOffer isModal={isModal} />
  const modal = isShowModal ? this.modalShow() : null
  
  return (
    <>
    {head}
    {modal}
    </>
  )
  }
}

const HeadOffer = ( {isModal} ) => {
  return (
<section> 
  <div className="header fadeI d-flex flex-column justify-content-around">
  <div className="d-flex justify-content-around"> 
    <div className="head-title d-flex flex-column justify-content-start justify-content-sm-around
    justify-content-md-between">
    <div className="header_title">
      <div className="header_content">
        <h2>построй-нам.рф</h2>
        <a href="tel:+79040902239">89040902239</a>
        <a href="mailto:vitalistarkiii@gmail.com">vitalistarkiii@gmail.com</a>
      </div>
    </div>
        <h1>Укладка плитки в Валуйках и Валуйском районе</h1>
      <div className="second-piece d-none d-sm-block d-md-block">
          <p>Наши специалисты помогут Вам рассчитать смету всех предстоящих работ</p>
      </div>  
    <div>  
      <button 
      className="btn-bay btn btn-warning d-none d-sm-none d-md-block d-lg-block d-xl-block "
      onClick={isModal}
      >узнать стоимость работ</button>
    </div>
    </div>

  <div className="d-flex flex-column head-content ml-3 h-100">
  <div className="item-content">
    <ul className="txt-head head-info-next align-self-center">
      <li>Выполняем работы по благоустройству территории</li>
      <li>Сможете купить плитку по цене производителя</li>
      <li>Доставляем продукцию до объекта покупателя</li>
      <li className="d-none d-sm-none d-md-block d-lg-block d-xl-block">Раскладка логотипа на территории Вашего предприятия</li>
      <li className="">Осуществляем подготовку дизайн-проекта</li>
      <li>Гарантия на выполненную работу</li>
    </ul>
    <button 
      className="btn-bay btn btn-warning d-block d-sm-block d-md-none d-lg-none d-xl-none mt-2"
      onClick={isModal}
      >узнать стоимость работ</button>
  </div>
    <div className="item-content item-content-img">
      <img src="/img/fotoo.svg" alt=""></img>
    </div>
  </div>
  </div>

</div> 
    </section>
  )
}


































// <div className="d-flex flex-column justify-content-around">
// <div className="d-flex head-menu">
//   {/* <!-- header info --> */}
// </div>
// <div className="head-content d-flex flex-column flex-sm-column flex-md-row  
//  flex-lg-row flex-xl-row align-items-start justify-content-xl-around
//  justify-content-lg-around justify-content-md-between justify-content-sm-around">
//   <ul className="z m-0 p-0">
//   <ul className="head-title">
//     <li>
//       <h1>Укладка плитки в Валуйках и Валуйском районе</h1>
//       {/* <span className="line"></span> */}
//     </li>
//   </ul>
//   </ul>
//   <ul className="head-info-next">
//     <span className="line-one d-none d-sm-none d-md-none d-lg-block d-xl-block"></span>
//     <span className="line-two d-none d-sm-none d-md-none d-lg-block d-xl-block"></span>
//     <li>Выполняем работы по благоустройству территории</li>
//     <li>Сможете купить плитку по цене производителя</li>
//     <li>Доставляем продукцию до объекта покупателя</li>
//     <li>Гарантия на выполненную работу</li>
//     <li>Раскладка логотипа на территории Вашего предприятия.</li>
//     <li className="mb-3">Осуществляем подготовку дизайн-проекта</li>
//   </ul>
// </div>
//   <ul className="second-piece d-none d-sm-none d-md-block">
//     <li className=""><p>Наши специалисты помогут Вам рассчитать смету всех предстоящих работ</p></li>
//   </ul>
//   <div className="d-flex p-0 ml-md-5 mt-0 mt-sm-0 mt-md-5 mt-lg-5 mt-xl-5 justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start justify-content-xl-start ">
//   <button className="btn-bay btn btn-danger d-block d-sm-block d-md-none d-lg-none d-xl-none ">узнайте стоимость работ</button>
  
//   <button className="btn-bay btn btn-warning d-none d-sm-none d-md-block d-lg-block d-xl-block ">узнайте стоимость работ</button>
//   </div>
// </div>














// import React from 'react'
// import './header.sass'
// import './media-header.css'

// const Header = () => {
//     return (
//       <section>
//       <div className="header bg-primary">
//       <div className="d-flex h-100 flex-column bg-secondary justify-content-between">
//       <ul className="head-title bg-danger h-100 align-items-center">
//           <li>
//             <h1>Укладка плитки в Валуйках и Валуйском районе</h1>
//           </li>
//           <div className="second-piece d-none d-sm-none d-md-block">
//           <li className=""><p>Наши специалисты помогут Вам рассчитать смету всех предстоящих работ</p></li>
//         </div>
//         <div>
//         <button className="btn-bay btn btn-danger d-block d-sm-block d-md-none d-lg-none d-xl-none ">узнайте стоимость работ</button>
//         <button className="btn-bay btn btn-warning d-none d-sm-none d-md-block d-lg-block d-xl-block ">узнайте стоимость работ</button>
//         </div>
//         </ul>
//       <div className="fff"></div>
//       <div className="head-content bg-success d-flex h-100 justify-content-around align-items-end">
//         {/* <ul className="head-title bg-danger h-100 align-items-center">
//           <li>
//             <h1>Укладка плитки в Валуйках и Валуйском районе</h1>
//           </li>
//           <div className="second-piece d-none d-sm-none d-md-block">
//           <li className=""><p>Наши специалисты помогут Вам рассчитать смету всех предстоящих работ</p></li>
//         </div>
//         <div>
//         <button className="btn-bay btn btn-danger d-block d-sm-block d-md-none d-lg-none d-xl-none ">узнайте стоимость работ</button>
//         <button className="btn-bay btn btn-warning d-none d-sm-none d-md-block d-lg-block d-xl-block ">узнайте стоимость работ</button>
//         </div>
//         </ul> */}
  
//         <ul className="txt-head head-info-next align-self-center">
//           <li className="mt-5">Выполняем работы по благоустройству территории</li>
//           <li>Сможете купить плитку по цене производителя</li>
//           <li>Доставляем продукцию до объекта покупателя</li>
//           <li>Гарантия на выполненную работу</li>
//           <li>Раскладка логотипа на территории Вашего предприятия</li>
//           <li className="mb-3">Осуществляем подготовку дизайн-проекта</li>
//         </ul>
     
//       </div>
//         {/* <div className="d-flex p-0 ml-md-5 mt-0 mt-sm-0 mt-md-5 mt-lg-5 mt-xl-5 justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start justify-content-xl-start "> */}
//         <div className="d-flex justify-content-around">
//         <div>
//         {/* <button className="btn-bay btn btn-danger d-block d-sm-block d-md-none d-lg-none d-xl-none ">узнайте стоимость работ</button>
//         <button className="btn-bay btn btn-warning d-none d-sm-none d-md-block d-lg-block d-xl-block ">узнайте стоимость работ</button> */}
//         </div>
//         <div>
//         <ul className="foto mb-3"></ul>
//         </div>
//         </div> 
//         </div> 
//         </div>
//     </section>
//     )
// }








// export default Header









// // <div className="d-flex flex-column justify-content-around">
// // <div className="d-flex head-menu">
// //   {/* <!-- header info --> */}
// // </div>
// // <div className="head-content d-flex flex-column flex-sm-column flex-md-row  
// //  flex-lg-row flex-xl-row align-items-start justify-content-xl-around
// //  justify-content-lg-around justify-content-md-between justify-content-sm-around">
// //   <ul className="z m-0 p-0">
// //   <ul className="head-title">
// //     <li>
// //       <h1>Укладка плитки в Валуйках и Валуйском районе</h1>
// //       {/* <span className="line"></span> */}
// //     </li>
// //   </ul>
// //   </ul>
// //   <ul className="head-info-next">
// //     <span className="line-one d-none d-sm-none d-md-none d-lg-block d-xl-block"></span>
// //     <span className="line-two d-none d-sm-none d-md-none d-lg-block d-xl-block"></span>
// //     <li>Выполняем работы по благоустройству территории</li>
// //     <li>Сможете купить плитку по цене производителя</li>
// //     <li>Доставляем продукцию до объекта покупателя</li>
// //     <li>Гарантия на выполненную работу</li>
// //     <li>Раскладка логотипа на территории Вашего предприятия.</li>
// //     <li className="mb-3">Осуществляем подготовку дизайн-проекта</li>
// //   </ul>
// // </div>
// //   <ul className="second-piece d-none d-sm-none d-md-block">
// //     <li className=""><p>Наши специалисты помогут Вам рассчитать смету всех предстоящих работ</p></li>
// //   </ul>
// //   <div className="d-flex p-0 ml-md-5 mt-0 mt-sm-0 mt-md-5 mt-lg-5 mt-xl-5 justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start justify-content-xl-start ">
// //   <button className="btn-bay btn btn-danger d-block d-sm-block d-md-none d-lg-none d-xl-none ">узнайте стоимость работ</button>
  
// //   <button className="btn-bay btn btn-warning d-none d-sm-none d-md-block d-lg-block d-xl-block ">узнайте стоимость работ</button>
// //   </div>
// // </div>