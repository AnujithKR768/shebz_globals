export default function FooterView() {
    return (
        <footer className="bg-[#0025cc] text-white">
            <div className="max-w-[1400px] mx-auto px-6 py-10">

                {/* TOP CONTENT */}
                <div className="flex flex-col items-center text-center gap-3">
                    <h3 className="text-lg md:text-xl font-semibold transition-colors hover:text-[#fdda2d]">
                        Shebz Global Safety Solutions
                    </h3>

                    <p className="max-w-2xl text-sm md:text-base transition-colors hover:text-[#fdda2d]">
                        Empowering safer workplaces through innovation, expertise, and global compliance.
                    </p>
                </div>

                {/* LINKS */}
                <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm md:text-base">
                    <a href="/Terms" className="hover:text-[#fdda2d] transition-colors">Terms & Conditions</a>
                    <span className="opacity-60">|</span>
                    <a href="/PrivacyPolicy" className="hover:text-[#fdda2d] transition-colors">Privacy Policy</a>
                </div>

                {/* COPYRIGHT */}
            <div className="mt-6 text-center text-xs md:text-sm opacity-90">
                © {new Date().getFullYear()} Shebz Global Safety Solutions. All Rights Reserved.
            </div>


            </div>
        </footer>
    );
}
