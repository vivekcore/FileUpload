
import { BsGithub, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs"

const links = [
    {
        href: "https://x.com/home",
        label: "Twitter",
        icon: <BsTwitterX className="h-6 w-6"/>
    },
    {
        href: "https://instagram.com",
        label: "Instagram",
        icon: <BsInstagram className="h-6 w-6"/>
    },
    {
        href: "https://youtube.com",
        label: "YouTube",
        icon: <BsYoutube className="h-6 w-6"/>
    },
    {
        href: "https://github.com",
        label: "GitHub",
        icon: <BsGithub className="h-6 w-6"/>
    }

]
export const Contact = () => {
    
  return (
    <div>
        <div className="flex w-[100vw] justify-center">
            {
                links.map((li) => (
                    <div key={li.label} className="p-5">
                       <a href={li.href} target="blank" >
                        <div className="flex gap-2 ">
                            <p>{li.icon}</p>
                            <p>{li.label}</p>
                        </div>
                       </a>
                    </div>
                ) )
            }
        </div>
    </div>
  )
}
