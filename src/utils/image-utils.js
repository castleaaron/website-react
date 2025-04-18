/**
 * Safely loads an image with a fallback
 * @param {string} imagePath - The path to the image
 * @param {string} fallbackUrl - The fallback URL if the image fails to load
 * @returns {Promise<string>} - The image URL
 */
export const loadImage = async (imagePath, fallbackUrl) => {
    try {
      const image = await import(`../../images/${imagePath}`)
      return image.default
    } catch (error) {
      console.warn(`Failed to load image: ${imagePath}`, error)
      return fallbackUrl
    }
  }
  
  /**
   * Creates an image loader with a specific fallback
   * @param {string} fallbackUrl - The fallback URL if the image fails to load
   * @returns {Function} - A function that loads an image with the specified fallback
   */
  export const createImageLoader = (fallbackUrl) => {
    return (imagePath) => loadImage(imagePath, fallbackUrl)
  }
  