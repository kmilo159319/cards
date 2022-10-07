import { CardText } from "../atoms/cardtext1"
import { CardTittle } from "../atoms/cardtittle"
import { CardTittle2 } from "../atoms/cardtittle2"

export const TextContainer = () => {
  return (
    <>
       <div className='row d-flex justify-content-end mt-ms-3'>
          <CardTittle />
          <CardTittle2 />
          <CardText />
        </div>
    </>
  )
}
