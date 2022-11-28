import Image from 'next/image'
import pic from '../public/images/4600x4600.jpg'

export default function Home() {
  return (
    <>
      <h1>Image Optimization</h1>
      <Image id="pic" src={pic} width={100} height={100}/>
      <p>Original dimension: 4600 x 4600</p>
      <p>Check dimension by opening the image in a new tab. Should be smaller than 4600 x 4600</p>
    </>
  )
}