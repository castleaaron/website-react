"use client"

import { useEffect, useRef } from "react"
import "../App.css"

const Stars = () => {
  const starContainerRef = useRef(null)

  useEffect(() => {
    if (!starContainerRef.current) return

    const starContainer = starContainerRef.current
    // Clear any existing stars
    starContainer.innerHTML = ""

    const starCount = Math.min(500, window.innerWidth * 0.25) // Adjust based on screen width

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.className = "star"
      star.style.top = `${Math.random() * 200}vh`
      star.style.left = `${Math.random() * 100}vw`
      star.style.animationDelay = `${Math.random() * 4}s`
      starContainer.appendChild(star)
    }

    // Cleanup function
    return () => {
      if (starContainer) {
        starContainer.innerHTML = ""
      }
    }
  }, [])

  return <div className="stars" ref={starContainerRef}></div>
}

export default Stars
