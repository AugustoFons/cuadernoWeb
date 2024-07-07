import { Playpen_Sans, Pacifico, Lobster_Two, Merienda, Sofia, Dosis, Plus_Jakarta_Sans, Oxygen } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const playpen = Playpen_Sans({ subsets: ["latin"], weight: ['400'] });
const oxygen = Oxygen({ subsets: ["latin"], weight: ['400'] });
const dosis = Dosis({ subsets: ["latin"], weight: ['400'] }); /* ver oxygen */
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ['400'] });
const pacifico = Pacifico({ subsets: ["latin"], weight: ['400'] });
const lobster = Lobster_Two({ subsets: ["latin"], weight: ['400'] });
const merienda = Merienda({ subsets: ["latin"], weight: ['400'] });
const sofia = Sofia({ subsets: ["latin"], weight: ['400'] });



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playpen.className} >
{/*       <Image 
          src='/assets/esc.png'
          width={206}
          height={120}
          alt="line"
          className="ml-1 pt-0 pb-3 h-[104px] w-[190px]"
          style={{zIndex: '100'}}
          /> */}
        {children}
      </body>
    </html>
  );
}
