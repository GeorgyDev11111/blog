import { IAdminComments } from "src/types"
import { ButtonSubmit } from "src/components"
import { useEffect } from "react"
import { useAdminComments, useAdminCommentsDispatch } from "src/context"

import { SnacksView, ModalView } from "."
import style from "./style.module.scss"


export default function AdminComments(props: IAdminComments ) {
  const {comments: data, state} = props
  const { filteredData } = useAdminComments()
  const dispatch = useAdminCommentsDispatch()

  useEffect(() => {
    dispatch({ type: "filter_data", payload: data.filter((comment) => 
      Object.entries(comment)
        .toString()
        .toLowerCase()
        .includes(state.trim().toLowerCase())
    )})
  }, [state, data, dispatch])

  function deleteComment(id: string | number) {
    dispatch({ type: "modal_delete_active", id })
  }

  const comments = filteredData.map((el) => (
    <tr className={style.tr} key={el.comment_id}>
      <td className={style.td}>{el.comment_id}</td>
      <td className={style.td}>{el.author}</td>
      <td className={style.td}>{el.text}</td>
      <td className={style.td}>{el.date}</td>
      <td className={style.td}>
        <ButtonSubmit 
          className={style.button} 
          event={() => deleteComment(el.comment_id)} 
          text={"Удалить"} 
        />
      </td>
    </tr>
    ))


  return (
    <div className={style.content}>
      <ModalView />
      <SnacksView />
        <h1 className="text-h1">Комментарии</h1>
        <table className={style.table}>
          <thead className={style.thead}>
            <tr className={style.tr}>
              <th className={style.th}>Id</th>
              <th className={style.th}>Author</th>
              <th className={`${style.td} ${style.text}`}>Text</th>
              <th className={`${style.th} ${style.date}`}>Date</th>
              <th className={style.th}>Settings</th>
            </tr>
          </thead>
          <tbody>{comments}</tbody>
        </table>
    </div>
  )
}
