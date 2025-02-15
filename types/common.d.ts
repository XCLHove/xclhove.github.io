export {}

declare global {
  type PageVO<RecordsItem = any> = {
    current: number
    size: number
    total: number
    records: RecordsItem[]
  }
}
