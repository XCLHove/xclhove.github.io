import { getAllNoteInfo, getNoteById, Note } from '../../apis/noteApi'

const imageBaseUrl = 'https://xnote.xclhove.top'

export default {
  async paths() {
    const noteInfoList = await getAllNoteInfo()
    const noteList: Note[] = []
    for (const noteInfo of noteInfoList) {
      await getNoteById(noteInfo.id)
        .then((note) => {
          noteList.push(note)
        })
        .catch((e) => {
          console.log(`getNoteById(${noteInfo.id}) error: ${e}`)
        })
    }

    const resultList = noteList.map((note, index) => {
      let content = note.content

      // 处理标题
      if (!content.startsWith('# ')) {
        content = `# ${note.title}\n${content}`
      }

      // 处理图片 url
      content = content.replace(/(\()(\/api\/image\/name)/g, `$1${imageBaseUrl}$2`)

      // 上一页
      let prev: Prettify<MaybeNull<{ link: string; text: string }>> = null
      if (index > 0) {
        const prevNote = noteList[index - 1]
        prev = {
          link: `./${prevNote.id}#${prevNote.title}`,
          text: `上一篇：${prevNote.title}`,
        }
      }

      // 下一页
      let next: Prettify<MaybeNull<{ link: string; text: string }>> = null
      if (index + 1 < noteList.length) {
        const nextNote = noteList[index + 1]
        next = {
          link: `./${nextNote.id}#${nextNote.title}`,
          text: `下一篇：${nextNote.title}`,
        }
      }

      const params: Prettify<Optional<Note, 'content'> & { sourceUrl: string; prev?: typeof prev; next?: typeof next }> = {
        ...note,
        sourceUrl: `https://xnote.xclhove.top/note/preview/${note.id}`,
        updateTime: new Date(note.updateTime).toLocaleString(),
        prev,
        next,
      }
      delete params.content

      return {
        params,
        content,
      }
    })
    return resultList
  },
}
