import React from 'react'
import fileAsBase64Src from '!base64-image-loader!./../resources/spinner.svg'

const Loader = () => <img src={fileAsBase64Src} width="50px" height="50px" className="img-responsive center-block"/>;

export default Loader