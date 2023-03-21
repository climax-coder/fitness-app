import ActionButton from "@/shared/ActionButton";
import HTtext from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import {motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "hsgfsu jahsjvhfj hjuuhasdlhcs hoiusahdcsa huaishyfafd huaudshfjdsa juhsaeoiuehyd dafawfew "
    },
     {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "hsgfsu jahsjvhfj hjuuhasdlhcs hoiusahdcsa huaishyfafd huaudshfjdsa juhsaeoiuehyd dafawfew "
    },
     {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro trainers",
        description: "hsgfsu jahsjvhfj hjuuhasdlhcs hoiusahdcsa huaishyfafd huaudshfjdsa juhsaeoiuehyd dafawfew "
    },
];

const container = {
     hidden: {},
     visible: {
        transition: { staggerChildren: 0.2}
     }
}
 

type Props = {
    setSelectedPage:( value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
<motion.div 
onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
    {/* HEADER */}
<motion.div className="md:my-5 md:w-3/5"
initial="hidden"
whileInView="visible"
viewport={{once: true, amount: 0.5}}
transition={{ duration: 0.5 }}
variants={{
    hidden: {opacity: 0, x:-50},
    visible: {opacity: 1, x: 0 },
}} >
        <HTtext> MORE THAN JUST A GYM</HTtext>
        <p className="my- 5 text-sm">
            we provide world class fitness equipment, trainers and classes to get you to your utimate fitness goals with ease. We provide true care into each and every member.
        </p>
    </motion.div>
 {/* BENEFITS */}
<motion.div className="mt-5 items-center  justify-between gap-8 md:flex"
initial = "hidden"
whileInView= "visible"
viewport={{ once: true, amount: 0.5 }}
variants = {container}
>
 {benefits.map((benefit: BenefitType) => (
    <Benefit
    key={benefit.title}
    icon={benefit.icon}
    title= {benefit.title}
    description={benefit.description}
    setSelectedPage = {setSelectedPage}
    />
 ))}
</motion.div>

{/* GRAPHICS AND DESCRIPTIONS */}

<div className="mt-26 items-center justify-between gap-20 md:mt-28 md:flex">
    {/* GRAPHICS */}

    <img 
      className="mx-auto"
      alt="benefits-page-graphic"
      src={BenefitsPageGraphic}
      />

    {/* DESCRIPTIONS */}

    <div>
{/* TITLE */}
<div className="relative">
    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"><motion.div
initial="hidden"
whileInView="visible"
viewport={{once: true, amount: 0.5}}
transition={{ duration: 0.5 }}
variants={{
    hidden: {opacity: 0, x: 50},
    visible: {opacity: 1, x: 0 },
}}
    >
        <HTtext>
            MILLIONS OF HAPPY MEMBERS GETTING{" "}
            <span className="text-primary-300">FIT</span>
        </HTtext>
        </motion.div>
    </div>
</div>

{/* DESCRIPTIONS */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{once: true, amount: 0.5}}
transition={{ delay: 0.3, duration: 0.5 }}
variants={{
    hidden: {opacity: 0, x:50},
    visible: {opacity: 1, x: 0 },
}}
> 
<p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. </p>


<p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. </p>
</motion.div>

        {/* BUTTONS */}

        <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-Spakles ">
<ActionButton setSelectedPage={setSelectedPage}> Join Now</ActionButton>
            </div>
        </div>
    </div>
</div>


</motion.div>
    </section>
  )
}

export default Benefits;