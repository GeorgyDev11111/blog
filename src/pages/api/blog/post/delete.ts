


import { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"
import { Posts } from "src/model"
import path from "path"
import { error, isValid } from "src/utils"
import fs from "fs"
import { cwd } from "process"

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "DELETE") {
    const { id } = req.body
    try {
      const token = await getToken({ req })
      if(!token) return error("access denied")


      if(!id || !isValid(+id, { sign: true })) {
        return error("failed")
      }

      const img = await Posts.getPost(id)
        // path.join(cwd(), "public",`${process.env["NEXT_PUBLIC_UPLOAD"]}`,`${file.name}`)
        // img.src_img
      const pathFile = path.join(cwd(), "public",`${process.env["NEXT_PUBLIC_UPLOAD"]}`,`${img.src_img}`)

      if(fs.existsSync(pathFile)) {
        fs.unlinkSync(pathFile)
      }

      const result = await Posts.deletePostWithComments(id)
      if(result <= 0) return error("post not deleted")

      return res.status(200).send("OK")
    } catch(e) {
      return res.status(400).json(e.message)
    }
  }
}

export default Login
