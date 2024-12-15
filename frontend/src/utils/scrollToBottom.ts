interface scrollToBottomProps {
  targetElement: React.RefObject<HTMLDivElement | null>
  smooth?: boolean
}

export default function scrollToBottom({ targetElement, smooth = true }: scrollToBottomProps) {
  setTimeout(() => {
    targetElement.current?.scrollTo({
      top: targetElement.current?.scrollHeight,
      behavior: smooth ? 'smooth' : 'auto',
    })
  }, 10)
}
