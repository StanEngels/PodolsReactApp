import React from 'react';
import Preset from './Preset';

const PresetList = (props) => {
    return(
        <div>
            { props.presets.map(currentPreset => (
                <div id={currentPreset.id}>
                    <Preset key={currentPreset.id} preset={currentPreset} getPresetInfo={props.getPresetInfo}/>
                </div>
            ))}
        </div>
    )
}
export default PresetList