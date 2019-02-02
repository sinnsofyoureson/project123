import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components'

const Ground = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    cursor: pointer;
    margin: 3px 0 3px 13px;
    padding: 8px 21px;
    background: #080808;
    color: #e5e5e5;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 100;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: .2s ease-in-out;

    &:hover {
        background: #e5e5e5;
        color: #080808;
        box-shadow: 0 0 8px #fff;
    }
    &:active {
        background: #000;
        color: #e5e5e5;
        border: none;
    }
    &:disabled {
        color: red;
        &:hover {
            background: none;
            box-shadow: none;
        }
    }
`

const Label = styled.label`
    color: #555;
    width: 30%;
    font-size: 18px;
`

const Form = styled.form`
    display: flex;
`

const Div = styled.div`
    width: 100%;
    margin: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Option = styled.option`
    background: #080808;
    padding: 55px;
`

const field = {
    fontSize: '21px',
    padding: '13px',
    background: '#080808',
    color: '#e5e5e5',
    border: 'none',
    borderRadius: '8px',
    margin: '8px',
    boxShadow: '0 0 13px #000',
    width: '70%'
}

const option = {
    background: '#080808',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#e5e5e5',
    padding: '13px',
    margin: '8px 0',
    boxShadow: '0 0 13px #000',
    width: '100%'
}

const AddObject = props => {
    
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <Ground>
            <Form onSubmit={handleSubmit}>
                <div style={{width: '400px'}}>
                    <Div>
                        <Label>Номер договора</Label>
                        <Field
                            name="contract"
                            component="input"
                            type="text"
                            style={field}
                        />
                    </Div>                
                    <div>
                        <Label>Тип объекта</Label>
                        <Field name="type" component="select" style={option}>
                            <option />
                            <option value="Недвижимость">Недвижимость</option>
                            <option value="Авто">Авто</option>
                        </Field>
                    </div>
                    <Div>
                        <Label>дата заключения договора</Label>
                        <Field
                            name="date"
                            component="input"
                            type="date"
                            style={field}
                        />
                    </Div>
                    <Div>
                        <Label>дата окончания договора</Label>
                        <Field
                            name="expiration"
                            component="input"
                            type="date"
                            style={field}
                        />
                    </Div>
                
                    <Div>
                        <Label>Адресс</Label>
                        <Field
                            name="address"
                            component="input"
                            type="text"
                            style={field}
                        />
                    </Div>

                    <Label>Клиент</Label>
                    <div>
                        <Field name="client" component="select" style={option}>
                            <option />
                            <option value="Москвин Ринат">Москвин Ринат</option>
                            <option value="Major Tom">Major Tom</option>
                            <option value="Гайзенберг Гавриил">Гайзенберг Гавриил</option>
                            <option value="Макаров Тимофей">Макаров Тимофей</option>
                            <option value="Гольдшмидт Мефодий">Гольдшмидт Мефодий</option>
                            <option value="Пестов Руслан">Пестов Руслан</option>
                            <option value="Перельман Сильвестр">Перельман Сильвестр</option>
                            <option value="Шапиро Герман">Шапиро Герман</option>
                            <option value="Хейфиц Герасим">Хейфиц Герасим</option>
                            <option value="Цигельман Аарон">Цигельман Аарон</option>
                            <option value="Мендель Авдий">Мендель Авдий</option>
                            <option value="Мирон Янович">Мирон Янович</option> 
                        </Field>
                    </div>
                    <Label>список подключенных услуг</Label>
                    <div>
                        <Field name="services" component="select" style={option}>
                            <Option />
                            <Option value="охрана, видеонаблюдение, датчик воды, датчик дыма">охрана, видеонаблюдение, датчик воды, датчик дыма</Option>
                            <Option value="охрана, видеонаблюдение, датчик воды">охрана, видеонаблюдение, датчик воды</Option>
                            <Option value="охрана, видеонаблюдение">охрана, видеонаблюдение</Option>
                            <Option value="охрана">охрана</Option>
                        </Field>
                    </div>
                    <Label>статус</Label>
                    <div>
                        <Field name="status" component="select" style={option}>
                            <Option />
                            <Option value="ожидает оплаты">ожидает оплаты</Option>
                            <Option value="действует">действует</Option>
                            <Option value="отключен">отключен</Option>
                        </Field>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <Button type="button" disabled={ pristine || submitting } onClick={reset}>
                            Clear
                        </Button>
                        <Button type="submit" disabled={ pristine || submitting }>
                            Submit
                        </Button>
                    </div>
                </div>
            </Form>
        </Ground>
    )
}

export default reduxForm({
    form: 'object'
})(AddObject)