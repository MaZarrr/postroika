import React,{ Component } from 'react';
import classes from './descript.css'

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

const { service, catalog__info, ss, products, left, right, center, descript_txt_left, 
        description_product, fa_volume_control_phone, fa_envelope, btn_sm, 
        navbar__info, catalog__button} = classes

return (  
    <>
<section className={`${service} d-none d-sm-none d-md-block d-lg-block d-xl-block`}>
    <div className="d-flex h-100 flex-column justify-content-around">
        <div className={left}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className={descript_txt_left}>Перед началом работ применяется точное взвешивание и подбор сыпучих стройматериалов для создания прочной, долговечной смеси для основы</div>
        </div>
        <div className={`${center} align-self-end`}>2
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div>
        <div className={`${right} align-self-end`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        {/* <img className='apparat' src="/img/apparat.png" alt="insta"></img> */}
        </div>
    </div>
    <div className="back"></div>
</section>
    
<section className={description_product}>
    <div className="d-flex flex-column justify-content-center">
    <ul className={`d-flex ${products} flex-column justify-content-around p-0`}>
        <li><h2>Наши услуги</h2></li>
{
this.state.catalog.map(({ title, price, phone, email })=> {
return (
    <li 
    key={title}
    className={`${catalog__info} bg-info p-1`}>
        <div className="d-flex justify-content-between align-items-center">
        <div className={`${navbar__info} d-flex justify-content-between w-100`}>
            <h3 className="p-0 m-0">{title}:</h3>
            <p className={`${ss}`}>от {price} рублей м<sup>2</sup></p>
        </div>
        <div className={`${catalog__button} d-flex`}>
            <button className={`${btn_sm} btn btn-sm btn-warning m-2 p-0` }>
                <a href={phone}>
                    <span itemProp ="telephone">
                        <i className={`${fa_volume_control_phone} fa fa-volume-control-phone`}/>
                    </span>
                </a>
            </button>
           
            <button className={`${btn_sm} btn btn-sm btn-warning m-2 p-0` }>
                <a href={email}>
                    <span itemProp ="telephone">
                        <i className={`${fa_envelope} fa fa-envelope`}/>
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


