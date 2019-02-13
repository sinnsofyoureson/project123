import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 8px 34px;
    border-radius: 5px;
    cursor: pointer;
    transition: .2s ease-in-out;
    border-bottom: solid 1px #000;

    &:hover {
        background: #050505;
    }
    &:active {
        background: #7f7f7f;
    }
`

const Paragraph = styled.p`
    color: #555;
    margin-right: 5px;
`

const List = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
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
    }
`

const Client = ({ showInfo, onClick, id, name, middlename, surname, phone, email, city, info, objects, active, shown }) => (
    <li
        onClick={showInfo}
        style={{ 
            display: active ? 'inline' : 'none' 
        }}
    >
        <Div>
            <List>
                <Paragraph>ФИО:</Paragraph>
                <p>{surname}{' '}{name}{' '}{middlename}</p>
            </List>
            <List style={{ display: shown ? 'flex' : 'none' }}>
                <Paragraph>телефон: </Paragraph><p>{phone}</p>
            </List>
            <List style={{ display: shown ? 'flex' : 'none' }}>
                <Paragraph>email: </Paragraph><p>{email}</p>
            </List>
            <List style={{ display: shown ? 'flex' : 'none' }}>
                <Paragraph>город: </Paragraph><p>{city}</p>
            </List>
            <List style={{ display: shown ? 'flex' : 'none' }}>
                <Paragraph>информация:</Paragraph><p>{info}</p>
            </List>
            <List style={{ display: shown ? 'flex' : 'none' }}>
                <Paragraph>список объектов: </Paragraph><p>{objects}</p>
            </List>
            <div style={{display: 'flex', justifyContent: 'flex-end' }}>
                <Button kety={id} style={{ display: shown ? 'flex' : 'none' }}>Update!</Button>
                <Button kety={id} onClick={onClick} style={{ display: shown ? 'flex' : 'none' }}>Delete!</Button>
            </div>
        </Div>
    </li>
)

Client.propTypes = {
    showInfo: PropTypes.func,
    onClick: PropTypes.func,
    id: PropTypes.string,
    surname: PropTypes.string,
    name: PropTypes.string,
    middlename: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    info: PropTypes.string,
    objects: PropTypes.string,
    active: PropTypes.bool,
    shown: PropTypes.bool
}

export default Client