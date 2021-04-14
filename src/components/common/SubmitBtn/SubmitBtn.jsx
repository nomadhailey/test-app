import React from 'react'
import { StyledBtn } from './SubmitBtnStyles.js'

const SubmitBtn = ({ text }) => {
  return <StyledBtn type="submit">{text}</StyledBtn>
}

export default React.memo(SubmitBtn)
