import React from "react"
import { Thread } from "../../types/chat"
import { IconEllipsisVertical, IconSettings } from "../../utils/icons"
import IconButton from "../UI/IconButton"
import ButtonSidebarHide from "../Buttons/ButtonSidebarHide"
import { useSidebarContext } from "../../context/SidebarContext"
import ButtonNewChat from "../Buttons/ButtonNewChat"

interface ChatHeaderProps {
  thread: Thread | null
}

export default function ChatHeader({ thread }: ChatHeaderProps) {
  /* States */
  const { isSidebarHidden } = useSidebarContext()

  return (
    <>
      <div
        className={`flex max-lg:gap-3
          ${isSidebarHidden ? "visible" : "md:hidden"}
        `}
      >
        <ButtonSidebarHide />
        <ButtonNewChat />
      </div>
      <div>
        <h1 className="font-bold text-xl line-clamp-1 break-all">{thread?.threadTitle || "New Chat"}</h1>
      </div>
      <div className="ms-auto flex max-lg:gap-3">
        <IconButton handleOnClick={() => alert("Coming soon!")}>
          <IconSettings className="dark:[&>path]:stroke-neutral-200" size={24} />
        </IconButton>
        <IconButton handleOnClick={() => alert("Coming soon!")}>
          <IconEllipsisVertical className="dark:[&>path]:stroke-neutral-200" size={24} />
        </IconButton>
      </div>
    </>
  )
}
