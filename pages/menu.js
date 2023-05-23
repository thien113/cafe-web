import Image from "next/image";
import menu from "../assets/brand/menu.svg"

export default function Menu(){
    return(
        <section className="my-4 lg:bg-right-top lg:ml-12 lg:p-32 flex justify-center">
            <Image src={menu}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="menu"/>
        </section>
    )
}