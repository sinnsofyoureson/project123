import { combineReducers } from 'redux'
import { ADD_CLIENT, ADD_OBJECT, VisibilityFilters, SET_VISIBILITY_FILTER, TOGGLE_ACTIVE_CLIENT, TOGGLE_SHOWN_CLIENT, TOGGLE_ACTIVE_OBJECT, TOGGLE_SHOWN_OBJECT } from '../actions/actions';
import { reducer as formReducer } from 'redux-form'
import uuid from 'uuid';

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function clients(state = [], action) {
    switch (action.type) {
        case ADD_CLIENT:
            return [
                {
                    id: uuid.v4(),
                    name: action.values.name,
                    middlename: action.values.middlename,
                    surname: action.values.surname,
                    phone: action.values.phone,
                    email: action.values.email,
                    city: action.values.city,
                    info: action.values.info,
                    objects: action.values.objects,
                    active: true,
                    shown:false
                },
                ...state
            ]
        case TOGGLE_ACTIVE_CLIENT:
            return state.map((clients) => {
                if (clients.id === action.id) {
                    return Object.assign({}, clients, {
                        active: !clients.active
                    })
                }
                console.log(state)
                return clients
            })
        case TOGGLE_SHOWN_CLIENT:
            return state.map((clients, id) => {
                if (clients.id === action.id) {
                    return Object.assign({}, clients, {
                        shown: !clients.shown
                    })
                }
                console.log(state)
                return clients
            })
        default:
            return state
    }
}

function objects(state = [], action) {
    switch (action.type) {
        case ADD_OBJECT:
            return [
                {
                    id: uuid.v4(),
                    type: action.values.type,
                    address: action.values.address,
                    client: action.values.client,
                    contract: action.values.contract,
                    services: action.values.services,
                    status: action.values.status,
                    date: action.values.date,
                    expiration: action.values.expiration,
                    active: true,
                    shown:false
                },
                ...state
            ]
        case TOGGLE_ACTIVE_OBJECT:
            return state.map((objects) => {
                if (objects.id === action.id) {
                    return Object.assign({}, objects, {
                        active: !objects.active
                    })
                }
                console.log(state)
                return objects
            })
        case TOGGLE_SHOWN_OBJECT:
            return state.map((objects, id) => {
                if (objects.id === action.id) {
                    return Object.assign({}, objects, {
                        shown: !objects.shown
                    })
                }
                console.log(state)
                return objects
            })
        default:
            return state
    }
}

const crmApp = combineReducers({
    visibilityFilter,
    clients,
    objects,
    form: formReducer
})

export default crmApp