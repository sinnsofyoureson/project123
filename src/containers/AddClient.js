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
    width: 800px;
`

const Div = styled.div`
    width: 100%;
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
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    width: '100%',
    boxShadow: '0 0 13px #000',
}

const AddClient = props => {

    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <Ground>
            <Form onSubmit={handleSubmit}>
                <div style={{width: '400px', alignContent: 'stretch', margin: '8px'}}>
                    <Div>
                        <Label>Фамилия</Label>
                        <Field
                            name="surname"
                            component="input"
                            type="text"
                            style={field}
                        />
                    </Div>                
                
                    <Div>
                        <Label>Имя</Label>
                        <Field
                            name="name"
                            component="input"
                            type="text"
                            style={field}
                        />
                    </Div>
                
                    <Div>
                        <Label>Отчество</Label>
                        <Field
                            name="middlename"
                            component="input"
                            type="text"
                            style={field}
                        />
                    </Div>

                    <Label>Город</Label>
                    <div>
                        <Field name="city" component="select" style={option}>
                            <option />
                            <option value="Саратов">Саратов</option>
                            <option value="Москва">Москва</option>
                            <option value="Питер">Питер</option>
                        </Field>
                    </div>
                    <Label>Объект</Label>
                    <div>
                        <Field name="objects" component="select" style={option}>
                            <Option />
                            <Option value="объект 1">объект 1</Option>
                            <Option value="объект 2">объект 2</Option>
                            <Option value="объект 51">объект 51</Option>
                        </Field>
                    </div>
                </div>

                <div style={{width: '400px'}}>
                    <Div>
                        <Label>Телефон</Label>
                        <Field
                            name="phone"
                            component="input"
                            type="text"
                            style={field}
                        />
                    </Div>
                
                    <Div >
                        <Label>Email</Label>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            style={field}
                        />
                    </Div>
                    
                    <div style={{width: '100%'}}>
                        <Label>Дополнительная информация</Label>
                        <Field name="notes" component="textarea" style={field}/>
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
    form: 'client'
})(AddClient)