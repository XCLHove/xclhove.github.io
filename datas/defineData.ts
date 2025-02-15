type Data = {
  load: () => MaybePromise<any>
}
const defineData = (data: Prettify<Data>) => data

export default defineData
