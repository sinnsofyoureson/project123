import React from 'react'
import PropTypes from 'prop-types'
import Client from './Client'

const ClientsList = ({ clients, onClientClick, onShowInfo }) => (
    <ul style={{
        maxHeight: '65vh',
        width: '400px',
        background: '#080808',
        borderRadius: '8px',
        boxShadow: '0 8px 21px #000',
        padding: '0',
        margin: '34px',
        overflowY: 'scroll'
    }}>
        {clients.map(client => 
            <Client
                key={client.id}
                {...client}
                onClick={() => onClientClick(client.id)}
                showInfo={() => onShowInfo(client.id)} />
        )}
    </ul>
)



ClientsList.propTypes = {
    clients: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        middlename: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string.isRequired,
        city: PropTypes.string,
        info: PropTypes.string,
        objects: PropTypes.string.isRequired,
    }).isRequired),
    onClientClick: PropTypes.func,
    onShowInfo: PropTypes.func
}

export default ClientsList