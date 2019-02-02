import { connect } from 'react-redux'
import { toggleActiveObject, toggleShownObject } from '../actions/actions'
import ObjectsList from '../components/ObjectsList'

const getVisibleObjects = (objects, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return objects
        case 'SHOW_ACTIVE':
            return objects.filter(o => o.active)
        case 'SHOW_CLOSED':
            return objects.filter(o => !o.active)
        default:
            return objects
    }
}

const mapStateToProps = (state) => {
    return {
        objects: getVisibleObjects(state.objects, state.setVisibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onObjectClick: (id) => {
            dispatch(toggleActiveObject(id))
        },
        onShowInfo: (id) => {
            dispatch(toggleShownObject(id))
        }
    }
}

const Objects = connect(
    mapStateToProps,
    mapDispatchToProps
)(ObjectsList)

export default Objects