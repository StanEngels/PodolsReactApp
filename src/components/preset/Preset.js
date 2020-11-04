import React from 'react';

const preset = (props) => {
    return(
        <div>
            { props.preset ? (
                <div>
                    <button onClick={props.getPresetInfo}>
                        {props.preset.presetName}
                    </button>
                </div>
            ) : null}
        </div>
    )
}
export default preset