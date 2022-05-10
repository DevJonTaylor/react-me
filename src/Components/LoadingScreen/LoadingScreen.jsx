import { RingLoader } from 'react-spinners'
import { Fade } from '../Helpers'



export default function({ loading }) {
  return (
    <Fade useChildren={loading}>
      { (typeof loading === 'undefined' ? true : loading) ?

        <main loading-screen="">
          <RingLoader size={ 250 } color="white" />
        </main>

        : null
      }
    </Fade>
  )
}