
import Image from 'next/image'
import {imgtype} from '../../../types/cardstypes'

export const CardImgContent = (props: imgtype ) => {
  return (
        <div>
          <Image
            className='overflow-hidden rounded-bottom rounded-4 card'
            src={props.url}
            alt="Picture of the author"
            width={500}
            height={200}
           />
        </div>
  )
}
