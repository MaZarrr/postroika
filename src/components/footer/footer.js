import React from 'react';
import './footer.css'
import './footer-media.css'

const footer = ({isModal}) => {
  return (
    <footer>
    <div className="d-flex footer-content justify-content-center justify-content-sm-center justify-content-md-around justify-content-lg-around 
    justify-content-xl-around h-100">
      <div className="d-flex footer-item-social">
        <ul className="align-self-center"><li><h2>Укладка плитки в Валуйках и Валуйском районе</h2></li></ul>
        <div className="d-flex flex-column justify-content-around social-icon">
        {/* <a href=""><img src="/img/vk.png" alt="vk"></img></a>      
        <a href=""><img src="/img/instagram.png" alt="insta"></img></a>      
        <a href=""><img src="/img/odnoklassniki.png" alt="vk"></img></a>      
        <a href=""><img src="/img/facebook.png" alt="vk"></img></a>       */}
       <img src="/img/vk.png" alt="vk"></img>   
      <img src="/img/instagram.png" alt="insta"></img>     
        <img src="/img/odnoklassniki.png" alt="vk"></img>   
        <img src="/img/facebook.png" alt="vk"></img> 
        </div>
      </div>
        <div className="d-flex d-none d-sm-none d-md-block footer-items flex-column justify-content-around">
        <ul className="bg-secondary"><li><p>Уточните полный перечень услуг позвонив нам или отправив заявку</p></li></ul>
        <button 
        className="btn btn-warning mt-3 w-75"
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