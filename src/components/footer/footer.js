import React from 'react';
import classes from './footer.css'

const footer = ({isModal}) => {

const { footer_item_social, footer_items, social_icon } = classes  
  return (
    <footer>
    <div className="d-flex footer-content justify-content-center justify-content-sm-center justify-content-md-around justify-content-lg-around 
    justify-content-xl-around h-100">
      <div className={`${footer_item_social} d-flex`}>
        <ul className="align-self-center"><li><h2>Укладка плитки в Валуйках и Валуйском районе</h2></li></ul>
        <div className={`${social_icon} d-flex flex-column justify-content-around`}>
          <img src="/img/vk.png" alt="vk"></img>   
          <img src="/img/instagram.png" alt="insta"></img>     
          <img src="/img/odnoklassniki.png" alt="vk"></img>   
          <img src="/img/facebook.png" alt="vk"></img> 
        </div>
      </div>
        <div className={`${footer_items} d-flex d-none d-sm-none d-md-block flex-column justify-content-around`}>
        <ul className="bg-secondary"><li><p>Уточните полный перечень услуг позвонив нам или отправив заявку</p></li></ul>
        <button 
        className="btn btn-warning mt-3 w-100"
        onClick={isModal}
        >
        Отправить
        </button>
        </div>
    </div>
    <div className="muted mt-2 d-flex justify-content-center">
      <span className="text-muted">Все права защищены 2019</span>
    </div>
    </footer>
  );
};

export default footer;