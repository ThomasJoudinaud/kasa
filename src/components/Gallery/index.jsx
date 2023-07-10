import { useState } from "react"
import arrow from "../../assets/Vector.png"
import "./gallery.css"
import placeholder from "../../assets/moutain_img.png"

function Gallery(props) {
    const imageArray = props.PictureArray
    const [activeIndex, setActiveIndex] = useState(0)

    if (imageArray.length === 0) {
        imageArray.push(placeholder)
    }

    const imgShow = (index) => {
        if(index === activeIndex) {
            return "visible"
        } else {
            return ""
        }
    }

    const nextImg = () => {
        setActiveIndex((activeIndex + 1) % imageArray.length)
    }

    const prevImg = () =>  {
        const newActiveIndex = activeIndex -1
        if(newActiveIndex < 0) {
           return setActiveIndex(imageArray.length - 1)
        } else {
            return setActiveIndex(activeIndex - 1)
        }
    }

    const SingleCover = () => {
        if(imageArray.length > 1) {
                return <div className="colapse__ifSinglePicture">
                <div className="colapse__btn__next" onClick={nextImg}>
                    <img src={arrow} alt="flèche suivant" />
                </div>
                <div className="colapse__btn__prev" onClick={prevImg}>
                    <img src={arrow} alt="flèche avant" />
                </div>
                <div className="colapse__info__index">
                    {`${activeIndex + 1}/${imageArray.length}`}
                </div>
            </div>
        }
    }

    return(
        <div className="colapse__block">
            <div className="colapse__block__img">
                {(imageArray.map((pics, index) => {
                    return <img key={pics} src={pics} alt={pics} className={imgShow(index)}/>
                }))}
            </div>
            <div>
                <SingleCover />
            </div>
        </div>
    )
}

export default Gallery