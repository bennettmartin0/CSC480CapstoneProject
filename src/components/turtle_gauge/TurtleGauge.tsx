import { useState } from "react";

export type ActivityLevel = {
    stub: string;
    title: string;
    stylingClasses: string;
    description: string;
};

export const ActivityLevels = {
    LOW: {
        stub: "Low",
        title: "Low Activity",
        stylingClasses: "bg-gradient-to-br from-emerald-100 to-sky-500",
        description: "In the winter months from November through February, most sea turtle species live in warm southern tropical waters."
    } as ActivityLevel,
    MEDIUM: {
        stub: "Medium",
        title: "Medium Activity",
        stylingClasses: "bg-gradient-to-br from-cyan-100 to-green-400",
        description: "During the two months before and two months after peak nesting season (March, April, September, and October), some sea turtle activity may occur although it is very unlikely to see a sea turtle."
    } as ActivityLevel,
    HIGH: {
        stub: "High",
        title: "High Activity",
        stylingClasses: "bg-gradient-to-br from-yellow-200 to-red-600",
        description: "Peak sea turtle nesting season occurs from May through August. Keep an eye out for sea turtles and nests, but do not disturb them!"
    } as ActivityLevel,
    NO_DATA: {
        stub: "NO DATA",
        title: "No Data",
        stylingClasses: "bg-neutral-900/50",
        description: ""
    } as ActivityLevel
}

const useActivityLevel = () => {
    const today = new Date().getMonth();
    switch(today) {
        case Months.NOVEMBER:
        case Months.DECEMBER:
        case Months.JANUARY:
        case Months.FEBRUARY:
            return ActivityLevels.LOW;
        case Months.SEPTEMBER:
        case Months.OCTOBER:
        case Months.MARCH:
        case Months.APRIL:
            return ActivityLevels.MEDIUM;
        case Months.MAY:
        case Months.JUNE:
        case Months.JULY:
        case Months.AUGUST:
            return ActivityLevels.HIGH;
    }
    return ActivityLevels.NO_DATA;
}

const levelsToRender = [ ActivityLevels.LOW, ActivityLevels.MEDIUM, ActivityLevels.HIGH ];

type TurtleGauge = {
    forceLevel?: ActivityLevel;
}
export const TurtleGauge = (props: TurtleGauge) => {
    const [ initialLevel ] = useState(props.forceLevel ?? useActivityLevel());
    const [ activeLevel, setActiveLevel ] = useState(initialLevel);

    const [ showDescription, setShowDescription ] = useState(false);

    const viewOtherLevel = (otherLevel: ActivityLevel) => {
        if(otherLevel == activeLevel)
            if(showDescription)
                return close();
            else 
                return setShowDescription(true);

        setShowDescription(true);
        setActiveLevel(otherLevel);
    }

    const close = () => {
        setActiveLevel(initialLevel)
        setShowDescription(false);
    }

    return (
        <div className="relative w-full z-30">
            <div
                className={`fixed inset-0 w-screen h-screen bg-neutral-900/70 frosted-glass cursor-pointer duration-500 ${showDescription ? "opacity-1" : "pointer-events-none opacity-0"}`}
                onClick={close}
            />
            <span className={`absolute -top-[40px] block w-screen font-bold text-center text-xl duration-500 text-neutral-100`}>
                { activeLevel == initialLevel ? "Current Sea Turtle Activity Level" : "Other Sea Turtle Activity Levels"}
            </span>
            <div className="relative h-[47px] overflow-hidden mx-[20px] md:mx-[25%] shadow-2xl z-10 rounded-2xl">
                <div className="flex">
                    {
                        levelsToRender.map((entry, key) => (
                            <Segment key={key} activity={entry} isSelected={activeLevel == entry} isTheCurrentLevel={entry == initialLevel} changeActive={(newActive: ActivityLevel) => viewOtherLevel(newActive)} />
                        ))
                    }
                    { initialLevel == ActivityLevels.NO_DATA ?
                        <Segment activity={ActivityLevels.NO_DATA} isSelected={true} overlay={true} isTheCurrentLevel={false} changeActive={()=>{}} />
                    : <></>}
                </div>
            </div>
            <span className="absolute -bottom-[18px] block w-screen text-center text-sm text-neutral-200">Click for more</span>
            <div className={`absolute top-[47px] w-screen md:w-[50%] md:left-[25%] overflow-hidden duration-500 ${showDescription ? "h-content opacity-100" : "h-0 opacity-0"}`}>
                <div className={`relative bg-neutral-100 h-content overflow-hidden mx-[40px] rounded-b-lg shadow-2xl`}>
                    <span className="block p-[10px]">
                        {activeLevel.description}
                    </span>
                </div>
            </div>
        </div>
    );
}

type Segment = {
    overlay?: boolean;
    activity: ActivityLevel;
    isSelected: boolean;
    isTheCurrentLevel: boolean;
    changeActive: Function;
}
const Segment = (props: Segment) => {
    const overlay = props.overlay ?? false;

    return overlay ? (
        <div
            className={`absolute inset-0 w-full h-[47px] overflow-hidden flex-initial ${props.isTheCurrentLevel ? props.activity.stylingClasses : "bg-neutral-100/30 frosted-glass-lite"}`}
            title={props.activity.title}
            >
            <span className={'block w-full text-center pt-[5px] font-bold text-2xl select-none text-neutral-100'}>
                {props.activity.stub}
            </span>
        </div>
    ) : (
        <div
            className={`inline-block h-[47px] overflow-hidden flex-initial duration-200
                        ${props.isTheCurrentLevel ? props.activity.stylingClasses : "bg-neutral-100/30 frosted-glass-lite"}
                        ${!props.isTheCurrentLevel ? props.isSelected ? "text-neutral-100" : "text-neutral-300" : ""}
                        ${props.isSelected ? "z-30 w-2/3" : "brightness-50 hover:brightness-100 cursor-pointer z-0 w-1/3"}
                        `}
            title={"Click to read more about "+props.activity.title}
            onClick={() => props.changeActive(props.activity)}
                        >
            <span className={`block w-full text-center duration-200 select-none cursor-pointer font-lotus-eden
                              ${props.isSelected ? "font-bold text-2xl pt-[10px]" : "text-md pt-[13px]"}
                              `}>
                {props.activity.stub}
            </span>
        </div>
    );
}

const Months = {
    JANUARY: 0,
    FEBRUARY: 1,
    MARCH: 2,
    APRIL: 3,
    MAY: 4,
    JUNE: 5,
    JULY: 6,
    AUGUST: 7,
    SEPTEMBER: 8,
    OCTOBER: 9,
    NOVEMBER: 10,
    DECEMBER: 11
}