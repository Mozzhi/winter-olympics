import * as types from './mutations_type';

export default {
  save_index_data: ({ commit }, obj) => {
    commit(types.INDEXDATA, obj);
  },
  save_notice_data: ({ commit }, arr) => {
    commit(types.NOTICEDATA, arr);
  }
}
