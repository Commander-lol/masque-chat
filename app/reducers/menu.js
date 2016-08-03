import { OPEN_MENU, CLOSE_MENU } from '../actions/menu';

export default function menu(state = false, action) {
  switch (action.type) {
    case OPEN_MENU:
      return true;
    case CLOSE_MENU:
      return false;
    default:
      return state;
  }
}
