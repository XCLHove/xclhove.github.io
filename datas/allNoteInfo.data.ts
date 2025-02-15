import defineData from './defineData.ts'
import { getAllNoteInfo } from '../apis/noteApi.ts'

export default defineData({
  async load() {
    return await getAllNoteInfo().then((noteInfoList) => {
      return noteInfoList.map((item) => {
        return {
          ...item,
          url: `/note/${item.id}#${item.title}`,
        }
      })
    })
  },
})
