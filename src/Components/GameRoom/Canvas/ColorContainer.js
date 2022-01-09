import React from 'react';
import ColorCard from './ColorCard'

function ColorContainer({handleUtensil, utensil}) {

    const colorList = ["#ffffff", "#c1c1c1", "#ef130b", "#ff7100", "#ffe400", "#00cc00", "#00b2ff", "#231fd3", "#a300ba", "#d37caa", "#a0522d",
    //Row 2
    "black", "dimgray", "maroon", "orangered", "goldenrod","darkgreen", "dodgerblue", "navy", "indigo", "indianred", "saddlebrown"];
    const colorGrid = colorList.map((color) => <ColorCard handleUtensil={handleUtensil} key={color} color={color}/>)

    return (
        <div>
            <div
                className="selected-color"
                style={{backgroundColor:`${utensil.color}`}}
                title="Color preview"
            >
            </div>

            <div id="color-grid" title="Select a color">
                {colorGrid}
            </div>
        </div>
    );
}

export default ColorContainer;
