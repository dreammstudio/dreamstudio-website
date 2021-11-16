import React from 'react'

export default function ProgressBar({percent}) {
    let color = "#6063ff"

    // Writed by Github Copilot
    if(percent > 80) color = "#6063ff"
    else if(percent > 60) color = "#ffd700"
    else if(percent > 40) color = "#ffa500"
    else if(percent > 20) color = "#ff0000"
    else if(percent > 0) color = "#ff0000"
    //


    return (
        <div className="progress-bar">
            <div className={`per${percent}`}></div>
        <style jsx>{`
            .progress-bar {
                width: 75%;
                height: 10px;
                background-color:#282f4c;
                border-radius: 5px;

            }
            .progress-bar .per${percent} {
                width: ${percent}%;
                height: 10px;
                background-color: ${color};
                border-radius: 5px;
            }
            `}
            
            </style>
        </div>
    )
}
