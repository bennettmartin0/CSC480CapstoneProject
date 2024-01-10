import { Link } from "react-router-dom";
import { TurtleGauge } from "../turtle_gauge/TurtleGauge";

type PageTemplate = {
    header: string;
    headerImageURI?: string;
    showGauge?: boolean;
    children: JSX.Element | JSX.Element[] | string;
}
export const PageTemplate = (props: PageTemplate) => {
    return (
        <div className="absolute inset-0 top-[47px] w-screen overflow-x-hidden">
            <div
                className='relative w-screen h-[400px] md:h-[500px] bg-cover bg-center'
                style={{
                    backgroundImage: `url(${props.headerImageURI ?? "./src/assets/Home1.jpeg"})`
                }}
            >
            <div className="absolute w-screen h-full bg-neutral-900/50" />
            <div className="absolute w-screen h-[200px] bottom-0 opacity-50" style={{background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"}}/>
            <h1
                className={`absolute w-screen text-center text-6xl font-lotus-eden font-bold text-neutral-100 z-20 ${props.showGauge ?? true ? " top-[110px] md:top-[170px]" : " top-[170px] md:top-[230px]"}`}
                style={{textShadow: "0px 0px 20px #000000"}}
                >{props.header}</h1>
            {
                props.showGauge ?? true ? 
                <div className="absolute bottom-[50px] w-screen">
                    <TurtleGauge />
                </div>
                :
                <></>
            }
            </div>
            <div className='relative p-[50px] md:px-[20%] bg-white rounded-t-md md:rounded-none'>
                {props.children}
            </div>

            <footer className='text-center text-neutral-100 p-[5px] pt-[20px]'>
                Bennett Martin - Colorado State University Global CS480 Capstone Project
                <Link className="block text-center underline" to="/attributions">Attributions</Link>
            </footer>
        </div>
    );
}