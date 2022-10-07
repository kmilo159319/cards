import { Button } from "react-bootstrap"
import { cardcontenttype } from "../../../types/cardstypes"



export const CardButton = (props: cardcontenttype) => {
  return (
    <div className='col-12 d-flex justify-content-center align-items-end pb-3' style={{ height: '7em' }}>
      <h5 className='btn cbtn m-sm-4 m-lg-3 m-lg-2'>4 xp</h5>
    </div>
  )
}