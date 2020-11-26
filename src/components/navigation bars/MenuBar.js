import React from 'react';
import PresetList from '../preset/PresetList';
class MenuBar extends React.Component {
    constructor(){
        super();
        this.state={
            presets: [],
            showPresets: [],
        }
    }

    componentDidMount(){
        let mounted = true;
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://podolsapi.herokuapp.com/api/presets'
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then((data) => {
        if(mounted){
        this.setState({presets: data})
        }
        })
        .catch(console.log)

        return () => mounted = false;
    }

    getPresetinfo = (e) => {
        e.preventDefault();
        this.setState({showPresets: this.state.presets});
    }

    render(){
        return(
            <div className="menubar">
                Presets
                {this.state.presets.length ? (
                    <PresetList presets={this.state.presets} getPresetInfo={this.getPresetinfo}/>
                ) : (
                    <p>You have no presets at the moment</p>
                )}
            </div>
        )}
      }
export default MenuBar