import { Dispatch, SetStateAction } from 'react'

export type PanelContextTypes = {
  threadListPanel: boolean
  setIsThreadListPanelOpen: Dispatch<SetStateAction<boolean>>
}
