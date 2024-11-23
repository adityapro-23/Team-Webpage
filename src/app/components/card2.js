import Image from "next/image";
import profPic from "../../../public/pfp.png"
import facebook from "../../../public/facebook-app-symbol.png"
import twitter from "../../../public/twitter.png"
import instagram from "../../../public/instagram.png"


export default function Card() {
  return (
    <div>
        <div className="card ease-in-out duration-500 hover:shadow-black bg-white h-[30rem] w-[16rem] flex flex-col rounded-lg border border-black shadow-lg m-2">
            <div className="card-head mt-[2rem] flex flex-col justify-center items-center h-[45%]">
                <div className="photo w-[8rem] h-[8rem] rounded-full border-2 border-burlywood">
                    <Image 
                        src={profPic} 
                        alt="Profile Picture"
                        height={16}
                        width={16}
                        className="w-[8rem] rounded-full border-2 border-[#deb887]">
                    </Image>
                </div>
                <h3 className="font-bold">Robert Deir</h3>
            </div>
            <div className="card-body m-[.5rem] h-[35%] text-center">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo officia quaerat voluptatibus earum, voluptas iste id fuga?</p>
            </div>
            <div className="card-feet h-[20%] flex flex-col text-center items-center">
                <h5>UI/UX Designer</h5>
                <div className="logos flex">
                    <Image 
                        src={facebook}
                        alt="Facebook Logo"
                        width={16}
                        height={16}
                        className="w-[1rem] m-1">
                    </Image>
                    <Image 
                        src={twitter}
                        alt="Twitter Logo"
                        width={16}
                        height={16}
                        className="w-[1rem] m-1">
                    </Image>
                    <Image 
                        src={instagram}
                        alt="Instagram Logo"
                        width={16}
                        height={16}
                        className="w-[1rem] m-1">
                    </Image>
                    
                </div>
            </div>
        </div>
   </div>
  );
}
