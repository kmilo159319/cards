import { Card, Col } from "react-bootstrap"
import { cardcontenttype } from "../../../types/cardstypes"


export const CardText = (props: cardcontenttype) => {
  return (
    <div className='col-11 d-flex justify-content-start pb-lg-4 me-3 mt-2 mt-lg-2  mb-3' >
      <p style={{ fontSize:'14px' }}>este es un texto de prueba para tarjeta</p>
    </div>
  )
}
