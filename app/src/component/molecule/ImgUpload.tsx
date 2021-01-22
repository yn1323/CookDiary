import React, { useState } from 'react'

import { Button, makeStyles } from '@material-ui/core'
import { CameraAlt as Camera } from '@material-ui/icons'
import { useCommonStyles } from 'src/constant'

interface Props {
  defaultImage?: string
}

const useStyles = makeStyles({
  photo: {
    outline: '1px solid #ccc',
    height: 200,
    background: '#ddd',
    cursor: 'pointer',
  },
  cameraIcon: {
    fontSize: 60,
  },
  input: {
    display: 'none',
  },
  imgWrap: {
    width: '100%',
    height: 200,
    cursor: 'pointer',
  },
  img: {
    objectFit: 'contain',
    width: '100%',
    height: 200,
  },
})

export const ImgUpload = ({ defaultImage = '' }: Props) => {
  const classes = useStyles()
  const commonCl = useCommonStyles()

  const [tempImage, setTempImage]: any = useState(defaultImage)

  const handleUploadClick = (event: any) => {
    const reader = new FileReader()
    reader.onload = _ => {
      setTempImage(reader.result)
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
    }
  }
  return (
    <React.Fragment>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        // multiple
        type="file"
        onChange={e => handleUploadClick(e)}
      />
      <label htmlFor="contained-button-file">
        {!tempImage && (
          <Button component="span" className={classes.photo} fullWidth>
            <Camera className={classes.cameraIcon} color="disabled" />
          </Button>
        )}
        {tempImage && (
          <div className={`${classes.imgWrap} ${commonCl.centerVH}`}>
            <img src={tempImage} className={classes.img} />
          </div>
        )}
      </label>
    </React.Fragment>
  )
}

export default ImgUpload
