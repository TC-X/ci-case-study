import { Dispatch, SetStateAction } from 'react'

export interface PanelContextTypes {
  threadListPanel: boolean
  setIsThreadListPanelOpen: Dispatch<SetStateAction<boolean>>
}
