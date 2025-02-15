import ajax from './ajax'
import { AxiosResponse } from 'axios'
import * as fs from 'fs'
import * as path from 'node:path'

export type Note = {
  id: number
  title: string
  content: string
  userId: number
  releaseTime: string
  updateTime: string
  isPublic: string
  typeId: number
}

export type PageNoteItem = {
  id: number
  title: string
  content: string
  userId: number
  releaseTime: string
  updateTime: string
  isPublic: string
  typeId: number
}

const needCache = process.env.NEED_CACHE === 'true'
export const getNoteById = (id: number | string) => {
  const filePath = `./temp/getNoteById_${id}.json`
  if (needCache && fs.existsSync(filePath)) {
    const note = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Note
    return Promise.resolve(note)
  }

  return ajax.get(`/xnote/note/${id}`).then((res: AxiosResponse<AjaxResult<Note>>) => {
    const note = res.data.data
    if (needCache) {
      fs.mkdirSync(path.resolve(filePath, '..'), { recursive: true })
      fs.writeFileSync(filePath, JSON.stringify(note, null, 4))
    }
    return note
  })
}

export const pageNote = async (current = 1, size = 10) => {
  const res: AxiosResponse<AjaxResult<PageVO<PageNoteItem>>> = await ajax.get(`/xnote/note/search`, {
    params: {
      current,
      size,
      search: '',
    },
  })
  return res.data.data
}

export let getAllNoteInfo = async () => {
  let page = 1
  let size = 100
  let total: number | null = null
  let noteInfoList: PageNoteItem[] = []

  await pageNote(page, size)
    .then((res) => {
      if (total === null) total = res.total
      noteInfoList.push(...res.records)
    })
    .catch((e) => {
      if (total === null) total = 0
    })

  // @ts-ignore
  while (page * size < total) {
    page += 1
    await pageNote(page, size)
      .then((res) => {
        noteInfoList.push(...res.records)
      })
      .catch((e) => {
        console.log(`pageNote(${page}, ${size}) error: ${e}`)
      })
  }

  return noteInfoList
}
