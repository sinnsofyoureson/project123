/*
 * типы действий
 */
export const ADD_CLIENT = 'ADD_CLIENT'
export const ADD_OBJECT = 'ADD_OBJECT'
export const TOGGLE_ACTIVE_CLIENT = 'TOGGLE_ACTIVE_CLIENT'
export const TOGGLE_ACTIVE_OBJECT = 'TOGGLE_ACTIVE_OBJECT'
export const TOGGLE_SHOWN_CLIENT = 'TOGGLE_SHOWN_CLIENT'
export const TOGGLE_SHOWN_OBJECT = 'TOGGLE_SHOWN_OBJECT'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * другие константы
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_CLOSED: 'SHOW_CLOSED'
}

/*
 * генераторы действий
 */
export function addClient(values) {
    return { type: ADD_CLIENT, values}
}

export function addObject(values) {
    return { type: ADD_OBJECT, values}
}

export function toggleActiveClient(id) {
    return { type: TOGGLE_ACTIVE_CLIENT, id }
}
export function toggleActiveObject(id) {
    return { type: TOGGLE_ACTIVE_OBJECT, id }
}
export function toggleShownClient(id) {
    return { type: TOGGLE_SHOWN_CLIENT, id }
}
export function toggleShownObject(id) {
    return { type: TOGGLE_SHOWN_OBJECT, id }
}
export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}