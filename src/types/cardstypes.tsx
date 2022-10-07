import { StaticImageData } from "next/image"

export type cardcontenttype = {
    cardtitle?: string
    btntittle?: string
    btncolor?: string | {}
    url?: string
    cardtitle2?: string
    cardtext?: string
}

export type imgtype = {
    url: StaticImageData
}