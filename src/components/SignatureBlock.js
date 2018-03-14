import { GoCSignature } from '@cdssnc/gcui'
import styled from 'react-emotion'

const SignatureBlock = styled(GoCSignature)`
  @media (min-width: 1200px) {
    width: 61%;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
`
export default SignatureBlock
