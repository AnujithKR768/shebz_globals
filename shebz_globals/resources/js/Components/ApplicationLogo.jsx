import { assets } from "@/assets/assets";

export default function ApplicationLogo(props) {
    return (
       <div className="flex justify-center">
            <img
                src={assets.logo}
                alt="Logo"
                className="w-40 h-auto rounded-full"   // 👈 control size here
            />
        </div>
    );
}
