import React, {Component} from 'react'
import classes from './modal.css'
import Input from '../../UI/input/input'
import axios from 'axios'

const validatePhone = (phone) => {
    const phoneValidate = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/gi
    return phoneValidate.test(phone)
}

const validateUserName = (name) => {
    const nameValidate = /^[а-я]/gi
    return nameValidate.test(String(name).toLowerCase())
}

export default class Modal extends Component { 

state = {
    isFormValid: false,
    formControls: {
        name: {
            value: '',
            type: 'text',
            placeholder: 'Ваше имя',
            errorMassege: 'Введите корректное имя',
            valid: false,
            touched: false,
            validation: {
                required: true,
                name: true,
                minLength: 2,
                maxLength: 25
                }
            },
        phone: {
            value: '',
            type: 'number',
            placeholder: 'Ваш телефон',
            errorMassege: 'Введите корректный телефон',
            valid: false,
            touched: false,
            validation: {
                required: true,
                phone: true,
                minLength: 10,
                maxLength: 12
                }
            }
        }
    }

submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
        userName: this.state.formControls.name.value,
        userPhone: this.state.formControls.phone.value
    };
    try {
    const responce = await axios.post('https://plitka-f8e9c.firebaseio.com/plitka.json', newUser)
    this.setState({
        isFormValid: false,
    formControls: {
        name: {
            value: '',
            type: 'text',
            placeholder: 'Ваше имя',
            errorMassege: 'Введите корректное имя',
            valid: false,
            touched: false,
            validation: {
                required: true,
                name: true,
                minLength: 2,
                maxLength: 25
                }
            },
        phone: {
            value: '',
            type: 'number',
            placeholder: 'Ваш телефон',
            errorMassege: 'Введите корректный телефон',
            valid: false,
            touched: false,
            validation: {
                required: true,
                phone: true,
                minLength: 10,
                maxLength: 12
                }
            }
        }
    })
    console.log(responce);    
    } catch(e) {
    console.log(e);
    }
} 

sucessHandler = async () => {

} 

validateControl(value, validation) {
    const { required, phone, minLength, maxLength, name } = validation
    // console.log(validation);
    if(!validation) {
        return true
    }

    let isValid = true   

    if(required) {
        isValid = value.trim() !== '' && isValid
    }
    if(phone) {
        isValid = validatePhone(value) && isValid 
    }
    if(name) {
        isValid = validateUserName(value) && isValid
    }
    if(minLength) {
        isValid = value.length >= minLength && value.length <= maxLength && isValid
    }

    return isValid
}

onChangeHandler = (event, controlName) => {
    // console.log(`${controlName}: `, event.target.value);
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }
    
    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true
    Object.keys(formControls).forEach(name => {
        isFormValid = formControls[name].valid && isFormValid
    })
    
    this.setState({
        formControls,
        isFormValid
    })
}

renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
        const control = this.state.formControls[controlName]
        return (
            <Input
                key={controlName + index}
                {...control}
                shouldValidate={!!control.validation}
                input={classes.input}
                onChange={event => this.onChangeHandler(event, controlName)}
            />
        )
    })
}

render() {

const { zoomInDown, modal, modal_content, modal_header, modal_close, modal_title, modal_subtitle, form_row, 
        form_row_checkbox, modal_body, form, form_button, checkbox, checkbox_label, form_group } = classes

const { isModal } = this.props 
    
return (
    <section 
    className={`${modal}`}>
        <div className={`${modal_content} ${zoomInDown}`}>
            <div className={modal_header}>
                <div className={modal_body}>
                <h2 className={modal_title}>Отправте заявку на расчет</h2>
                <span className={modal_subtitle}>и получите скидку 10% на тротуарную плитку от Построй-нам.рф</span>
                
                <form 
                className={`${form} modal_form`}
                onSubmit={this.submitHandler}
                >  
                <div className={`${form_row} ${form_row_checkbox}`}>
                <div className="form_checkbox">
                    <label className={checkbox_label} htmlFor="install">
                        <input className={checkbox} type="checkbox" id="install"></input>
                        Укладка
                    </label>
                </div>
                <div className="form_checkbox">
                    <label className={checkbox_label} htmlFor="delivery">
                        <input className={checkbox} type="checkbox" id="delivery"></input>
                        Доставка
                    </label>
                </div>
                </div>

                <div className={form_row}>
                    
                    { this.renderInputs() }
                    
                    <div className={form_group}>
                        <button 
                        type="success" 
                        className={`button ${form_button}`}
                        disabled={!this.state.isFormValid} 
                        onClick={this.sucessHandler}
                        >
                        Отправить заявку</button>
                    </div>
                </div>
                             
                <button 
                className={`${modal_close} btn`}  
                type="button"
                onClick={isModal}>
                <i className="fa fa-window-close-o"></i>
                </button>
                
                </form>
                </div>
            </div>
        </div>
    </section>
        )
    }
};









//   {/* <div className="form_row">
//                     <div className="form_group d-flex flex-column">
//                         <label for="" className="form_label">Вид услуги</label>
//                         <input type="text" className="input form_input"></input>
//                     </div>
//                     </div> */}


    // const newData = {
    //     userName: this.state.formControls.name.value,
    //     userPhone: this.state.formControls.phone.value,
    // }
    // axios.post('https://plitka-f8e9c.firebaseio.com/plitka.json', newData)
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(error => console.log(error))