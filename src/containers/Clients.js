import { connect } from 'react-redux'
import { toggleActiveClient, toggleShownClient } from '../actions/actions'
import ClientsList from '../components/ClientsList'

const getVisibleClients = (clients, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return clients
        case 'SHOW_ACTIVE':
            return clients.filter(c => c.active)
        case 'SHOW_CLOSED':
            return clients.filter(c => !c.active)
        default:
            return clients
    }
}

const mapStateToProps = (state) => {
    return {
        clients: getVisibleClients(state.clients, state.setVisibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClientClick: (id) => {
            dispatch(toggleActiveClient(id))
        },
        onShowInfo: (id) => {
            dispatch(toggleShownClient(id))
        }
    }
}

const Clients = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientsList)

export default Clients