import { useState } from "react";
import { QueryMode, useHookOntoScreen, useScreen, useView } from "react-ui-breakpoints";
import { Link } from "react-router-dom";
import { geotag_filled, menu, turtleLogo, x } from "./NavIcons";

export const NavBar = () => {
    useHookOntoScreen(); // Allows the component to dynamically change itself as the screen resizes.
    const [ menuOpened, setMenuOpened ] = useState(false); // State always has to be stored in the root component. It can't be moved to "MobileView".

    // New buttons can be created by adding them below.
    const buttonMappings = [
        {title: "Home", uri: "/"},
        {title: "Facts", uri: "/facts"},
        {title: "Laws", uri: "/laws"},
        {title: "Report", uri: "/report"},
        {title: "FAQ", uri: "/faq"},
    ];

    const DesktopView = () => (
        <div className="fixed overflow-hidden top-0 left-0 w-screen h-[47px] bg-neutral-100/70 frosted-glass z-40 ">
            <div>
                <Link
                    className="inline-block h-[47px] aspect-square overflow-hidden align-bottom duration-200 brightness-0 saturate-0 hover:brightness-100 hover:saturate-100"
                    to={"/"}
                    >
                    <div
                        className="w-[35px] m-[6px] aspect-square bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${turtleLogo})`
                        }}
                    />
                </Link>
                {
                    buttonMappings.map((entry, index) => (
                        <NavButton
                            key={index}
                            close={()=>{}} // No close method is needed because the desktop version doesn't have a hamburger menu.
                            title={entry.title}
                            uri={entry.uri}
                            />
                    ))
                }
            </div>
            <div className="fixed top-0 right-0">
                <a className="relative block w-[200px] h-[47px]" href="https://maps.app.goo.gl/L4ZQDXJKUWBsod319">
                    <span className="absolute top-[13px] left-0 block w-[170px] border-b border-neutral-900">Jekyll Island, Georgia</span>
                    <div
                        className="absolute right-[20px] top-[5px] w-[24px] m-[6px] aspect-square bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${geotag_filled})`
                        }}
                    />
                </a>
            </div>
        </div>
    );
    const MobileView = () => {
        // Some convenience methods for setting state
        const open = () => setMenuOpened(true);
        const close = () => setMenuOpened(false);

        return (
            <>
                <div
                    className={`fixed inset-0 w-screen h-screen bg-neutral-900/20 frosted-glass-lite duration-500 z-40 ${menuOpened ? "opacity-1" : "pointer-events-none opacity-0"}`}
                    onClick={close}
                    />
                <div className="fixed text-center top-0 left-0 w-screen h-min-[47px] bg-neutral-100/70 frosted-glass z-40">
                    {
                        menuOpened ? (
                        <div className="h-[47px]">
                            <div
                                onClick={close}
                                className={`bg-cover bg-no-repeat bg-center mt-[3px] ml-[5px] h-[40px] aspect-square duration-200 ${menuOpened ? "opacity-1" : "opacity-0"}`}
                                style={{
                                    backgroundImage: `url(${x})`
                            }}
                                />
                        </div>
                    ) : (
                        <div className="h-[47px]">
                            <div
                                onClick={open}
                                className={`bg-cover bg-no-repeat bg-center mt-[3px] ml-[5px] h-[40px] aspect-square duration-200 ${menuOpened ? "opacity-0" : "opacity-1"}`}
                                style={{
                                    backgroundImage: `url(${menu})`
                                }}
                                />
                        </div>
                    ) }
                    <div
                        className={`overflow-hidden duration-200`}
                        style={{height: `${menuOpened ? buttonMappings.length * 47 : 0}px`}}
                        >
                        {
                            buttonMappings.map((entry, index) => (
                                <NavButton key={index} close={close} title={entry.title} uri={entry.uri} />
                            ))
                        }
                    </div>
                    <div className="fixed block top-0 w-screen h-[47px] pointer-events-none">
                        <Link
                            className="inline-block text-center h-[47px] aspect-square pointer-events-auto mx-auto duration-200 brightness-0 saturate-0 hover:brightness-100 hover:saturate-100"
                            to={"/"}
                            >
                            <div
                                className="w-[35px] m-[6px] aspect-square bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${turtleLogo})`
                                }}
                            />
                        </Link>
                    </div>
                    <div className="fixed top-0 -right-[21px]">
                        <a className="relative block w-[138px] h-[47px]" href="https://maps.app.goo.gl/L4ZQDXJKUWBsod319">
                            <span className="absolute text-left top-[13px] left-0 block w-[110px] border-b border-neutral-900">Jekyll Isl, GA</span>
                            <div
                                className="absolute right-[20px] top-[5px] w-[24px] m-[6px] aspect-square bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${geotag_filled})`
                                }}
                            />
                        </a>
                    </div>
                </div>
            </>
        );
    }

    return useScreen(
        QueryMode.MOBILE_FIRST,
        useView('1000px', DesktopView()),
        useView('default', MobileView())
    );
}

type NavButton = {
    title: string;
    uri: string;
    close: Function;
}
const NavButton = (props: NavButton) => (
    <Link
        className="block md:inline-block py-[11.5px] px-[14px] hover:bg-neutral-100 duration-200"
        to={props.uri}
        onClick={() => props.close()}
        >
        {props.title}
    </Link>
);