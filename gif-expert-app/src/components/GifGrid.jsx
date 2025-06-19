import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])



    useEffect(() => {
        getGifs(category)
            .then(newImage => setImages(newImage))

    }, [])



    getGifs(category)



    return (
        <>
            <h3>{category}</h3>
            <ol>
                {
                    images.map(({id, title}) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol>
        </>
    )
}

export default GifGrid
