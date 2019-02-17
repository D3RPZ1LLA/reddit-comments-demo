import $ from 'jquery'

export default (state) => {
  state.list = $.extend({}, state.list || {})
  state.commentableKeys = $.extend({}, state.commentableKeys || {})
  return state
}
