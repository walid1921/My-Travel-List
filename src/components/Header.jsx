import { PiTreePalmFill } from 'react-icons/pi';
import { MdKitesurfing } from 'react-icons/md';


function Logo({text}) {
  return (
    <div>
      <h1>
        <PiTreePalmFill size={60} color='#ffebb3' /> {text} <MdKitesurfing color='#ffebb3' size={60} />
      </h1>
    </div>
  )
}

export default Logo
