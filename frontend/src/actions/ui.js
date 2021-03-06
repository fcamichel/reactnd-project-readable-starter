export const UI_SORT_ORDER = 'UI_SORT_ORDER';
export const UI_SORT_PROPERTY = 'UI_SORT_PROPERTY';
export const UI_LOADING_STATE = 'UI_LOADING_STATE';

export const SORT_ORDER_ASC = 'ASC';
export const SORT_ORDER_DESC = 'DESC';

export function setPostSortPropertyAction(property) {
  return {
    type: UI_SORT_PROPERTY,
    payload: property
  }
}

export function setPostSortOrderAction(order) {
  return {
    type: UI_SORT_ORDER,
    payload: order
  }
}