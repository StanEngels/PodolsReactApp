import React from 'react';
import { Button } from '@material-ui/core';

const preset = (props) => {
    return(
        <div>
            { props.preset ? (
                <div>
                    <Button size="small" target="_blank"  onClick={props.getPresetInfo}>
                        {props.preset.presetName}
                    </Button>
                </div>
            ) : null}
        </div>
    )
}
export default preset