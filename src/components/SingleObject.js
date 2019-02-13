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
        background: #a1a1a1;
        transition: .5s ease-in-out;

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

const SingleObject = ({ showObjectInfo, onClick, id, type, address, client, contract, services, status, date, expiration, active, shown }) => (
    
    <li
        onClick={showObjectInfo}
        style={{ 
            display: active ? 'inline' : 'none' 
        }}
    >
        <Div>
            <List style={{ flexDirection: 'column' }}>
                <List>
                    <Paragraph>Договор</Paragraph>
                    <p>{contract}</p>
                </List>
                <List>
                    <Paragraph>тип: </Paragraph>
                    <p>{type}</p>
                </List>
                <List>
                    <Paragraph>от </Paragraph>
                    <p>{date}</p>
                </List>
            </List>
            <List style={{ display: shown ? 'flex' : 'none' }}>
                <Paragraph>адресс: </Paragraph><p>{address}</p>
            </List>
            <List style={{ display: shown ? 'flex' : 'none' }}>
                <Paragraph>клиент: </Paragraph><p>{client}</p>
            </List>
            <List style={{ display: shown ? 'flex' : 'none' }}>
                <Paragraph>подключенные услуги: </Paragraph><p>{services}</p>
            </List>
            <List style={{ display: shown ? 'flex' : 'none' }}>
                <Paragraph>статус:</Paragraph><p>{status}</p>
            </List>
            <List style={{ display: shown ? 'flex' : 'none' }}>
                <Paragraph>дата, до которой действует договор: </Paragraph><p>{expiration}</p>
            </List>
            <List style={{display: 'flex', justifyContent: 'flex-end' }}>
                <Button kety={id} style={{ display: shown ? 'flex' : 'none' }}>Update!</Button>
                <Button kety={id} onClick={onClick} style={{ display: shown ? 'flex' : 'none' }}>Delete!</Button>
            </List>
        </Div>

        
        
    </li>
)

SingleObject.propTypes = {
    showInfo: PropTypes.func,
    onClick: PropTypes.func,
    id: PropTypes.string,
    type: PropTypes.string,
    address: PropTypes.string,
    client: PropTypes.string,
    contract: PropTypes.string,
    services: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
    expiration: PropTypes.string,
    active: PropTypes.bool,
    shown: PropTypes.bool
}

export default SingleObject
