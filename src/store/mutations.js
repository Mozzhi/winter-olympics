import * as types from './mutations_type';

export default {
  [types.INDEXDATA](state, obj) {
    state.indexData = obj
  },
  [types.NOTICEDATA](state, arr) {
    state.noticeData = arr
  }
}
