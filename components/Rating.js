import star from "../assets/brand/star.svg";
import Image from "next/image";

export default function Rating({stars}){
    const starsImg = [];
    for (let i = 1; i <= stars; i++){
        starsImg.push(1);
    }
    return(
        <div className="flex flex-row p-4 lg:px-24">
            {starsImg.map(s => 
                <Image src={star} className="m-auto " width={20} height={10} alt="star"/>
            )}
        </div>)
}