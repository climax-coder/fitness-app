import {useForm} from "react-hook-form";
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import ContactUSPageGraphic from "@/assets/ContactUSPageGraphic.png";
import HTtext from "@/shared/HText";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

const inputStyles = `mb-5 w-full rounded-lg bg-gray-300 px-5 py-3 placeholder-black`

const {
register, 
trigger,
formState: { errors }
} = useForm()


const onSubmit = async (e: any) => {
const isValid = await trigger();
if(!isValid) {
    e.preventDefault();
}
}



  return (
    <section id="contactus"
    className="mx-auto w-5/6 pt-24 pb-32"> 
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
    {/* HEADER */}
<motion.div 
className="md:w-3/5"
initial="hidden"
whileInView="visible"
viewport={{once: true, amount: 0.5}}
transition={{ duration: 0.5 }}
variants={{
    hidden: {opacity: 0, x:-50},
    visible: {opacity: 1, x: 0 },
}} 
>
<HTtext >
    <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
</HTtext>
<p className="my-5">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga.
</p>
</motion.div>
{/* FORM AND IMAGE  */}

<div className="mt-10 justify-between gap-8 md:flex">
<motion.div
className="mt-10 basis-3/5 md:mt-0"
initial="hidden"
whileInView="visible"
viewport={{once: true, amount: 0.5}}
transition={{ duration: 0.5 }}
variants={{
    hidden: {opacity: 0, y:50},
    visible: {opacity: 1, y: 0 },
}} 
>
<form
target="_blank"
onSubmit={onSubmit}
action= "https://formsubmit.co/f56450a5dbbf5633b17883e4a97eabdb"
method = "POST"
>
<input className={inputStyles}
type="text"
placeholder="Name"
{...register("name", {
    required: true,
    maxLength: 100,
})}/>
{errors.name && (
    <p className="mt-1 text-gray-300">
{errors.name.type === "required" && "This field is required"}
{errors.name.type === "maxLength" && "Max length is a 100 character"}
    </p>
)} 


<input className={inputStyles}
type="text"
placeholder="EMAIL"
{...register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
})}/>
{errors.email && (
    <p className="mt-1 text-gray-300">
{errors.email.type === "required" && "This field is required"}
{errors.email.type === "pattern" && "invalid email address"}
    </p>
)}




<textarea className={inputStyles}
rows={4}
cols = {50}
placeholder="MESSAGE"
{...register("message", {
    required: true,
    maxLength: 2000,
})}/>
{errors.message && (
    <p className="mt-1 text-gray-300">
{errors.message.type === "required" && "This field is required"}
{errors.message.type === "maxLength" && "Max length is a 2000 character"}
    </p>
)}

<button
type="submit"
className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-black "
>SUBMIT</button>
</form>
</motion.div>


<motion.div 
 className="relative mt-16 basis-2/5 md:mt-0"
 initial="hidden"
whileInView="visible"
viewport={{once: true, amount: 0.5}}
transition={{ delay: 0.2, duration: 0.5 }}
variants={{
    hidden: {opacity: 0, y:50},
    visible: {opacity: 1, y: 0 },
}} 
 >
<div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] ">
    <img 
    className="w-full"
    alt="contact-us-page-graphic"
    src={ContactUSPageGraphic}
    />
</div>
</motion.div>

</div>
    </motion.div>
    </section>
  )
}

export default ContactUs;