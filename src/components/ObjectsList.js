import React from 'react'
import PropTypes from 'prop-types'
import SingleObject from './SingleObject.js'

const ObjectsList = ({ objects, onObjectClick, onShowInfo }) => (
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
        {objects.map(object => 
            <SingleObject
                key={object.id}
                {...object}
                onClick={() => onObjectClick(object.id)}
                showObjectInfo={() => onShowInfo(object.id)} />
        )}
    </ul>
)

ObjectsList.propTypes = {
    objects: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        client: PropTypes.string.isRequired,
        contract: PropTypes.string.isRequired,
        services: PropTypes.string,
        status: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        expiration: PropTypes.string,
        active: PropTypes.bool.isRequired,
        shown: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    onObjectClick: PropTypes.func.isRequired,
    onShowInfo: PropTypes.func.isRequired
}

export default ObjectsList