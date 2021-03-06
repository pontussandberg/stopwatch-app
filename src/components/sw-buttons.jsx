import React from 'react';


function StopwatchButtons(props) {
    let { isRunning, onStart, onStop, onLap, onReset } = props;
    const btnClass = "btn-custom button-5";
    return (
        <React.Fragment>
            <div className="btn-container">
                <div className={isRunning ? "running-button " + btnClass : btnClass}
                    onClick={isRunning ? onStop : onStart} >
                    <h4 href="#">{isRunning ? "stop" : "start"}</h4>
                    <div className={isRunning ? "translated" : "translate"}></div>
                </div>

                <div className={btnClass} onClick={onLap} >
                    <h4 href="#">Lap</h4>
                    <div className="translate"></div>
                </div>

                <div className={btnClass} onClick={onReset} >
                    <h4 href="#">Reset</h4>
                    <div className="translate"></div>
                </div>
            </div >
        </React.Fragment >
    );

}
export default StopwatchButtons;