import React from "react"
import { Thread } from "../../types/chat"
import ThreadList from "../ThreadList"
import { useSidebarContext } from "../../context/SidebarContext"
import ButtonSidebarHide from "../Buttons/ButtonSidebarHide"
import ButtonNewChat from "../Buttons/ButtonNewChat"
import { getUserDevice } from "../../utils/getUserDevice"

interface SidebarProps {
  threads: Thread[]
}

export default function Sidebar({ threads }: SidebarProps) {
  /* States */
  const { isMobile } = getUserDevice()
  const { isSidebarHidden, setIsSidebarHidden } = useSidebarContext()

  // Hide sidebar on mobile by default
  React.useEffect(() => {
    if (isMobile && !isSidebarHidden) setIsSidebarHidden(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={`
      p-4 h-full max-w-full flex flex-col transition-[width_padding_margin] duration-150 ease-in-out
      bg-gray-100 dark:bg-neutral-700 rounded-xl overflow-hidden
      max-md:max-w-full max-md:fixed max-md:left-0 max-md:top-0 max-md:rounded-none max-md:shadow-lg max-md:z-10
      max-lg:max-w-56
      ${isSidebarHidden ? "w-0 px-0 me-0" : "w-72 me-4"}
    `}
    >
      <div className="flex gap-3 justify-between">
        <ButtonSidebarHide className="lg:hover:bg-gray-50 lg:dark:hover:bg-neutral-600 max-lg:px-2" />
        <ButtonNewChat className="lg:hover:bg-gray-50 lg:dark:hover:bg-neutral-600" />
      </div>
      <div className="px-2 pt-3 pb-2">
        <h2 className="font-bold text-sm line-clamp-1 break-all">Chat History</h2>
      </div>
      <ThreadList threads={threads} />
    </div>
  )
}
