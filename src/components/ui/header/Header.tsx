import { Container } from "@mui/system"
import { Navbar, BurgerMenu, SignInHeader, DropDownMenu } from "src/components"
import { Burger, IUser } from "src/types"
import { useHeader } from "src/hooks"

import indexStyles from "./index.module.scss"
import { dataLinks } from "config/filling_data"



export default function Header(props: Burger & IUser ) {

  const {
    navbarProps, burgerMenuProps
  } = useHeader(props, indexStyles, dataLinks)

  return (
    <header className={ indexStyles.header }>
      <div className={ indexStyles.navbarWrap }>
        <Container>
          <div
            onClick={(e) => e.stopPropagation()}
            className={ indexStyles.reverseWrap }
          >
            <Navbar {...navbarProps} />

            <SignInHeader {...props} className={indexStyles.user} />
            <DropDownMenu styles={indexStyles} />

            <BurgerMenu {...burgerMenuProps}/>
          </div>
        </Container>
      </div>
    </header>
  )
}
