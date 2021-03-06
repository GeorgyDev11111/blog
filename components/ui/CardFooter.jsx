import { Grid } from "@mui/material"
import NextJsActiveLink from "./NextJsActiveLink.jsx"


export default function CardFooter({ styles, card }) {

  if(!card) return <h1>Loading</h1>
  
  return (
    <Grid container={ true } spacing={3} rowSpacing={6}>
      {
        card.map((it,index) => (
          <Grid key={ index } item xs={12} md={6}>
            <div className={ styles.reverseWrap }>
              <h3 className={ styles.title }>{ it.title }</h3>
              <p className={ styles.content }>{ it.text }</p>

            { it.namelink && <NextJsActiveLink href={ it.href } name={ it.namelink } classNameProps={ styles.link }/> }
            
            </div>
          </Grid>
        ))
      }
    </Grid>
  )
}