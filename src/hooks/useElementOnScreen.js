import { useEffect, useRef, useState } from "react"

const useElementOnScreen = (options) => {
    const containerRef = useRef(null)
    const [ isVisible, setIsVisible ] = useState(false)
  
    const callbackFunction = (entries) => {
      const [ entry ] = entries
      setIsVisible(entry.isIntersecting)
    }
  
    useEffect(() => {
      
      const observer = new IntersectionObserver(callbackFunction, options)
      if (containerRef.current) observer.observe(containerRef.current)
      
      return () => {
        // eslint-disable-next-line 
        if(containerRef.current) observer.unobserve(containerRef.current)
      }

      // eslint-disable-next-line 
    }, [containerRef, options])
  
    return [containerRef, isVisible]
  }

  export default useElementOnScreen;