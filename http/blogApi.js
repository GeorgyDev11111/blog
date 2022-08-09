import { $host } from "./index.js"

export const addComment = async (body) => {
  try{
    const { data } = await $host.post("/api/blog/getComments/",body)
    return data
  }catch(e) {
    alert("Упс, комментарий не отправился :(")
    /* eslint-disable-next-line no-console */
    console.error(new Error(e.response.data))
  }
}