/**
 * Toggles the 'menu-open' class on the body element
 * @param {boolean} isOpen - Whether the menu is open
 */
export const toggleBodyScroll = (isOpen) => {
    if (isOpen) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }
  }
  