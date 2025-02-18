import { ReactNode } from "react"
import { AppState } from "../../types"
import { MailyProvider } from "./context"
import { createClassNameFactory } from "../../../utils/createClassNameFactory"

import styles from './styles.module.css'

const generateClassName = createClassNameFactory('maily', styles)

export const Maily = ({
  children,
  config,
}: {
  children?: ReactNode,
  config: AppState,
}) => {
  return (
    <MailyProvider config={config}>
      {children || (
        <div className={generateClassName('wrapper')}>
          <div className={generateClassName('header')}>
            <h3 className={generateClassName('title')}>Header</h3>
          </div>
          <div className={generateClassName('contentPart')}>
            <div className={generateClassName('leftSidebar')}>
              Left sidebar
            </div>
            <div className={generateClassName('root')}>Root</div>
            <div className={generateClassName('rightSidebar')}>
              Right sidebar
            </div>
          </div>
          <div className={generateClassName('footer')}>Footer</div>
        </div>
      )}
    </MailyProvider>
  )
}