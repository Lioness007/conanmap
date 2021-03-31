import {Thrall} from "../../model/Thrall";
import React from "react";
import './ThrallDetails.css';

interface ThrallDetailsProps {
    focused: boolean;
    thrall?: Thrall;
    onDeSelect(): void;
}

export const ThrallDetails = (props: ThrallDetailsProps) => {
    const slideAnimationClass = props.focused ? 'thrall-details-sliding-in' : 'thrall-details-sliding-out'
    return <div className={"thrall-details-container " + slideAnimationClass}>
        <div className="thrall-wars-thrall-details">
            <div className="header" onClick={props.onDeSelect}>
                <div className="thrall-name">{props.thrall?.name}</div>
                <div className="thrall-type">
                    {props.thrall?.type}
                </div>
            </div>
            <div className="thrall-location-list">
                {props.thrall?.locations.map(value => <div>{value.lat + " " + value.lng}</div>)}
            </div>
        </div>
    </div>
}