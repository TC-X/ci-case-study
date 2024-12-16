import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../constants/breakpoint"

export interface getUserDeviceProps {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

/*
 * Get user device type based on request headers or window width. (Server or client)
 * if request is passed-in, then get user agent from headers.
 */
export function getUserDevice(request?: Request): getUserDeviceProps {
  // Server-side: Request passed-in, then get user agent from headers.
  // Client-side: No request, then get user agent from navigator.
  const userAgent = request
    ? request.headers.get("User-Agent") || ""
    : typeof navigator !== "undefined"
    ? navigator.userAgent || ""
    : ""

  const uaIsMobile = /Mobile|Android|iP(hone|od)/i.test(userAgent)
  const uaIsTablet = /Tablet|iPad/i.test(userAgent)
  const uaIsDesktop = !uaIsMobile && !uaIsTablet

  // If on server, just return UA-based detection.
  if (request) {
    return { isMobile: uaIsMobile, isTablet: uaIsTablet, isDesktop: uaIsDesktop }
  }

  // If on client, further check window width for more accurate detection.
  const width = typeof window !== "undefined" ? window.innerWidth : TABLET_BREAKPOINT + 1
  const widthIsMobile = width <= MOBILE_BREAKPOINT
  const widthIsTablet = width > MOBILE_BREAKPOINT && width <= TABLET_BREAKPOINT

  // Return the most accurate device type, prioritizing mobile and tablet over desktop
  const isMobile = uaIsMobile || widthIsMobile
  const isTablet = !isMobile && (uaIsTablet || widthIsTablet)
  const isDesktop = !isMobile && !isTablet

  return { isMobile, isTablet, isDesktop }
}
