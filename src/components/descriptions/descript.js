import React,{ Component } from 'react';
import './descript.css'
import './descript-media.css'

export default class description extends Component{

    state = {
        inputClasses: ['fade'],
        catalog: [
            {
                title: 'Установка поребрика', 
                price: 150, 
                phone: 'tel:+79040902239',
                email: 'mailto:vitalistarkiii@gmail.com'
            },
            {
                title: 'Установка бордюра', 
                price: 300, 
                phone: 'tel:+79040902239',
                email: 'mailto:vitalistarkiii@gmail.com'
            },
            {
                title: 'Укладка с подготовкой из гравия', 
                price: 300, 
                phone: 'tel:+79040902239',
                email: 'mailto:vitalistarkiii@gmail.com'
            },
            {
                title: 'Укладка с бетонным основанием', 
                price: 750, 
                phone: 'tel:+79040902239',
                email: 'mailto:vitalistarkiii@gmail.com'
            }
        ]
    }      
  
render() {
return (  
    <>
<section className="service">
    <div className="d-flex h-100 flex-column justify-content-around">
        <div className="left">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="descript-txt-left">Перед началом работ применяется точное взвешивание и подбор сыпучих стройматериалов для создания прочной, долговечной смеси для основы</div>
        </div>
        <div className="center align-self-end">2
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div>
        <div className="right align-self-end">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* <div className="descript-txt-right">Мы выпускаем плитку от эконом до премиум класса, что позволяет нам подобрать оптимальное решение для каждого нашего покупателя</div> */}
        <img className='apparat' src="/img/apparat.png" alt="insta"></img>
        </div>
    </div>
    <div className="back"></div>
</section>
    
<section className="description-product">
    <div className="d-flex flex-column justify-content-center">
    <ul className="d-flex products flex-column justify-content-around p-0">
        <li><h2>Наши услуги</h2></li>
{
this.state.catalog.map(({ title, price, phone, email })=> {
return (
    <li 
    key={title}
    className="bg-info p-1 catalog__info">
        <div className="d-flex justify-content-between align-items-center">
        <div className="navbar__info d-flex justify-content-between w-100">
            <h3 className="p-0 m-0">{title}:</h3>
            <p className="ss ml-4">от {price} рублей м<sup>2</sup></p>
        </div>
        <div className="d-flex catalog__button">
            <button className="btn btn-sm btn-warning m-2 p-0">
                <a href={phone}>
                    <span itemProp ="telephone">
                        <i className="fa fa-volume-control-phone" />
                    </span>
                </a>
            </button>
           
            <button className="btn btn-sm btn-warning m-2 p-0">
                <a href={email}>
                    <span itemProp ="telephone">
                        <i className="fa fa-envelope"/>
                    </span>
                </a>
            </button>
        </div>
        </div>
    </li>
        )
    })
}
    </ul>
    </div>
</section>
  </> 
        );    
    }
};


