import { SelectedPage } from '@/shared/types'
import Logo from "@/assets/logo.png";

type Props = {
    setSelectedPage : (value: SelectedPage) => void
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
<div className='mt-16 basis-1/2 md:mt-0'>
  <img alt='logo' src={Logo} />
  <p className='my-5'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga.
  </p>
  <p>@ Evogym All Right Reserved.</p>
</div>
<div className='mt-16 basis -1/4 md:mt-0'>
  <h4 className='font-bold'>Links</h4>
  <p className='my-5'> Coddy nfoirc senticus</p>
  <p className='my-5'> Dt ndjhf makdhn et elum</p>
  <p>Bobo at el fcojsan</p>
</div>

<div className='mt-16 basis -1/4 md:mt-0'>
    <h4 className='font-bold'>Conatct Us</h4>
    <p className='my-5'> Coddy nfoirc senticus</p>
    <p className='my-5'> Dt ndjhf makdhn et elum</p>
    <p>(445)345-7562</p>
   </div>

  </div>
</footer>
  )
}

export default Footer;