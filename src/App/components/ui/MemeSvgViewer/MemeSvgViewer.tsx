import React from 'react'
import { connect } from 'react-redux'
import { MemeSVGViewer, ImageInterface } from 'orsys-tjs-meme'
import { BASE_MEME_IMG } from '../../../config/config'

function mapDispatchToProps(dispatch:Function) {
    return {
    }

}
function mapStateToProps(stateStore: any, propsParent: any) {
    return {
        ...propsParent,
        meme: stateStore.current,
        image: stateStore.listes.images.find((i: ImageInterface) => i.id === stateStore.current.imageId),
        basePath:BASE_MEME_IMG
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MemeSVGViewer)
