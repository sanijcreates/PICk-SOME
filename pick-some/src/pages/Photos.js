import React, {useContext} from "react"
import Image from '../components/Image'
import {CustomContext} from '../components/customContext'
import {getClass} from '../utils/getClass'

function Photos() {
    const {photos} = useContext(CustomContext)
    const mappedImages = photos.map((photo, i ) => (
        <Image key = {photo.id} img = {photo.url} className = {getClass(i)} id = {photo.id} photo = {photo}/>
    ))
    return (
        <main className="photos">
            {mappedImages}
        </main>
    )
}

export default Photos