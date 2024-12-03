import React from "react";
type HomeSectionProps = {
    children: React.ReactNode;
 }

const HomeSection = (props: HomeSectionProps) => {
    const { children } = props;
    return (
        <div className="flex flex-row flex-wrap">
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default HomeSection;