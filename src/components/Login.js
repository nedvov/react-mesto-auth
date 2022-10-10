import {useFormAndValidation} from '../hooks/useFormAndValidation';

function Login() {
    const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();
    return (        
        <div className="sign__container">
            <h2 className="sign__title">Регистрация</h2>
                <form className = "sign__form" id={`register-form`} name={`register-form`} onSubmit={console.log('s')}>
                    <fieldset className="sign__inputs">
                        <input type="text" className={isValid.name ? "sign__input" : "sign__input sign__input_active"} id ="author-name-sign__input" name ="name" value={values.name  ? values.name : ''} placeholder="Имя" required minLength="2" maxLength="40" onChange={handleChange}/>
                        <span className="sign__input-error" id="author-name-sign__input-error">{errors.name}</span>
                        <input type="text" className={isValid.about ? "sign__input" : "sign__input sign__input_active"} id ="author-job-sign__input" name ="about" value={values.about ? values.about : ''} placeholder="Деятельность" required minLength="2" maxLength="200" onChange={handleChange}/>
                        <span className="sign__input-error" id="author-job-sign__input-error">{errors.about}</span>   
                        <input type="submit" className="sign__save-button" id={`register__save-button`} value={'Войти'} disabled={!(isValid.name && isValid.about)}/>
                    </fieldset>                
                </form>
        </div>
    );
  }
  
export default Login;