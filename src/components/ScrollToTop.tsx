import React from 'react'
import {BsArrowUpCircleFill} from 'react-icons/bs'

export default function ScrollToTop() {

  const [isVisible, setIsVisible] = React.useState(false)

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
  }, [])



  return (
      <>
      {isVisible && (
        <div className="scroll-to-top cursor-pointer text-center" onClick={scrollToTop}>
          <BsArrowUpCircleFill className="text-5xl text-white/20 hover:text-white/50 duration-500" />
        </div>
      )}
    </>
      
  )
}
