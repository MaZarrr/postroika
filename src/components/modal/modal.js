import React from 'react'
import './modal.css'
import Input from '../../UI/input/input'

const Modal = ({ isModal, sucessHandler, submitHandler }) => {
    return (
    <section 
    className="modal d-flex flex-column align-items-center justify-content-center">
        <div className="modal_content zoomInDown">
            <div className="modal_header">
                <div className="modal_body">
                <h2 className="modal_title">Отправте заявку на расчет</h2>
                <span className="modal_subtitle">и получите скидку 10% на тротуарную плитку от Построй-нам.рф</span>
                
                <form 
                className="form modal_form"
                onSubmit={submitHandler}
                >  
                <div className="form_row form_row-checkbox">
                <div className="form_checkbox">
                    <label className="checkbox-label" htmlFor="install">
                        <input className="checkbox" type="checkbox" id="install"></input>
                        Укладка
                    </label>
                </div>
                <div className="form_checkbox">
                    <label className="checkbox-label" htmlFor="delivery">
                        <input className="checkbox" type="checkbox" id="delivery"></input>
                        Доставка
                    </label>
                </div>
                </div>

                <div className="form_row">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Ваш телефон" />
                    {/* <div className="form_group">
                        <input type="text" className="input form_input" placeholder="Ваше имя"></input>
                    </div>
                    <div className="form_group">
                        <input type="text" className="input form_input" placeholder="Ваше телефон"></input>
                    </div> */}
                    <div className="form_group">
                        <button 
                        type="success" 
                        className="button form_button" 
                        onClick={sucessHandler}
                        >
                        Отправить заявку</button>
                    </div>
                </div>
                             
                <button 
                className="modal_close btn"  
                type="button"
                onClick={isModal}>
                <i class="fa fa-window-close-o"></i>
                </button>
                
                </form>
                </div>
            </div>
        </div>
    </section>
    )
};

export default Modal 







//   {/* <div className="form_row">
//                     <div className="form_group d-flex flex-column">
//                         <label for="" className="form_label">Вид услуги</label>
//                         <input type="text" className="input form_input"></input>
//                     </div>
//                     </div> */}