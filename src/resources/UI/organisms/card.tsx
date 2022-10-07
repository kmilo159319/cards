import { imgtype } from "../../../types/cardstypes"
import { CardButton } from "../atoms/cardbutton"
import { TextContainer } from "../molecules/cardcontainer"
import { CardImgContent } from "../molecules/cardimgcontent"


export const CardBody = (props: imgtype) => {
  return (
    <div className="p-4 col-lg-3 col-sm-6">
      <div className='rounded-4 card2' style={{ height: '23rem' }}>
          <CardImgContent url={props.url} />
          <TextContainer />
          <CardButton />
      </div>
    </div>  
  )
}
