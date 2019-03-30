import React from 'react'
import './catalog.css'
import './catalog-media.css'

const catalog = () => {

const catalog = {
catalogKladka: [
    {  
        title: 'Укладка плитки с подготовкой основания из ПЩС:  от 600 рублей м2', 
        phone: 'tel:+79040902239',
        email: 'mailto:vitalistarkiii@gmail.com',
        price: 250
    },{  
        title: 'Укладка плитки с подготовкой основания из ПЩС:  от 600 рублей м2', 
        phone: 'tel:+79040902239',
        email: 'mailto:vitalistarkiii@gmail.com',
        price: 250
    },{  
        title: 'Укладка плитки с подготовкой основания из ПЩС:  от 600 рублей м2', 
        phone: 'tel:+79040902239',
        email: 'mailto:vitalistarkiii@gmail.com',
        price: 250
    },{  
        title: 'Укладка плитки с подготовкой основания из ПЩС:  от 600 рублей м2', 
        phone: 'tel:+79040902239',
        email: 'mailto:vitalistarkiii@gmail.com',
        price: 250
    },{  
        title: 'Укладка плитки с подготовкой основания из ПЩС:  от 600 рублей м2', 
        phone: 'tel:+79040902239',
        email: 'mailto:vitalistarkiii@gmail.com',
        price: 250
    },{  
        title: 'Укладка плитки с подготовкой основания из ПЩС:  от 600 рублей м2', 
        phone: 'tel:+79040902239',
        email: 'mailto:vitalistarkiii@gmail.com',
        price: 250
    }
],
catalogBay: [
     {  
        title: 'Укладка плитки с подготовкой основания из ПЩС:  от 600 рублей м2', 
        phone: 'tel:+79040902239',
        email: 'mailto:vitalistarkiii@gmail.com',
        price: 250
    },{  
        title: 'Укладка плитки с подготовкой основания из ПЩС:  от 600 рублей м2', 
        phone: 'tel:+79040902239',
        email: 'mailto:vitalistarkiii@gmail.com',
        price: 250
    },{  
        title: 'Укладка плитки с подготовкой основания из ПЩС:  от 600 рублей м2', 
        phone: 'tel:+79040902239',
        email: 'mailto:vitalistarkiii@gmail.com',
        price: 250
    },{  
        title: 'Укладка плитки с подготовкой основания из ПЩС:  от 600 рублей м2', 
        phone: 'tel:+79040902239',
        email: 'mailto:vitalistarkiii@gmail.com',
        price: 250
    },{  
        title: 'Укладка плитки с подготовкой основания из ПЩС:  от 600 рублей м2', 
        phone: 'tel:+79040902239',
        email: 'mailto:vitalistarkiii@gmail.com',
        price: 250
    },{  
        title: 'Укладка плитки с подготовкой основания из ПЩС:  от 600 рублей м2', 
        phone: 'tel:+79040902239',
        email: 'mailto:vitalistarkiii@gmail.com',
        price: 250
    }

]
}
  
return (  
  <section className="catalog">
  <div className="d-flex h-100 justify-content-around title-catalog">
    <div className="flex-grow-1">
    <div className="catalog-title-ukladka h-100">
    <ul>
        <li>
        <h2>
            Укладка тротуарной плитки
        </h2>
        </li>
    </ul>

    <ul>
    {
        catalog.catalogKladka.map((catalog) => {
        return (          
            <>
            <li>
            <p>{catalog.title}</p>
            </li>
            <button
                className="btn btn-warning btn-sm float-right mr-2">
                <a className="phone-companany" href={catalog.email}><span itemprop ="email"><i className="fa fa-envelope"/></span></a>
            </button>
            <button
                className="btn btn-warning btn-sm float-right mr-2">
                <a href={catalog.phone}><span itemprop ="telephone"><i className="fa fa-volume-control-phone"/></span></a>
            </button>
            </>
            )
        })
    }
    </ul>
</div>
</div>

    <div className="flex-grow-1">
    <div className="catalog-title-bay h-100">
        <ul> 
            <li>
            <h2>
                Цена тротуарной плитки
            </h2>
            </li>
        </ul>
        
<div className="bay h-100 m-0 p-0">
        <span className="m-0 p-0"></span>
    <ul>
    {
        catalog.catalogBay.map((catalog) => {
        return (
         <>
            <li>
        <p>
        {catalog.title}
        </p>
        </li>
       
        <button
        className="btn btn-outline-warning btn-sm float-right mr-2">
        <a className="phone-companany" href="mailto:vitalistarkiii@gmail.com"><span itemprop ="email"><i className="fa fa-envelope"/></span></a>
        </button>
        <button
        className="btn btn-outline-warning btn-sm float-right mr-2">
        <a href="tel:+79040902239"><span itemprop ="telephone"><i className="fa fa-volume-control-phone"/></span></a>
        </button>
        </>
            )
        })
    }
        </ul>
        </div>
            </div>
        </div>
    </div>
  </section>
    )
}

export default catalog


