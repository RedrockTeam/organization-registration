export default function formatQuery(query): string {
  let params: Array<string> = []

  if (query) {
    for (let item in query) {
      let vals = query[item]
      if (vals !== undefined) {
        params.push(item + '=' + query[item])
      }
    }
  }
  return params.length ? '?' + params.join('&') : ''
}
