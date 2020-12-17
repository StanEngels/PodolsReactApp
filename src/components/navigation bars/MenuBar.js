import React from 'react';
import PresetList from '../preset/PresetList';
import axios from 'axios';
import qs from 'query-string';
import { Collapse, Button, SvgIcon} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class MenuBar extends React.Component {
    constructor(){
        super();
        this.state={
            presets: [],
            showPresets: [],
            token: "",
            openPreset: [true, ExpandMoreIcon],
        }
    }

    componentDidMount(){
        let mounted = true;
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_KEYCLOAK_URL}`,
            data: qs.stringify({
                client_id: `${process.env.REACT_APP_AUTH_CLIENT_ID}`,
                client_secret: `${process.env.REACT_APP_AUTH_CLIENT_SECRET}`,
                grant_type: `${process.env.REACT_APP_AUTH_GRANT_TYPE}`,
                username: `${process.env.REACT_APP_AUTH_USERNAME}`,
                password: `${process.env.REACT_APP_AUTH_PASSWORD}`
            }),
            headers: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          })
        .then((data) => {
            if(mounted){
                this.setState({token: data.data.access_token});
                this.getPresets();
            }
        })
        .catch(console.log)

        return () => mounted = false;
    }

    getPresets(){
        axios.get(`${process.env.REACT_APP_API_URL}/api/presets`, { headers: {"Authorization" : `Bearer ${this.state.token}`} })
        .then((data) => {
            this.setState({presets: data.data})
        })
        .catch(console.log)
    }

    getPresetinfo = (e) => {
        e.preventDefault();
        this.setState({showPresets: this.state.presets});
    }

    togglePresetMenu = (e) => {
        e.preventDefault();
        if(this.state.openPreset[0]){
            this.setState({openPreset: [false, ExpandLessIcon]});
        }
        else{
            this.setState({openPreset: [true, ExpandMoreIcon]});
        }
    }

    render(){
        return(
            <div className="menubar">
                <Button size="large" target="_blank" onClick={this.togglePresetMenu} >Presets <SvgIcon component={this.state.openPreset[1]} viewBox={'-5 0 25 25'}/>
                </Button>
                <Collapse
                    in={this.state.openPreset[0]}
                    timeout="auto" 
                    unmountOnExit
                >
                    {this.state.presets.length ? (
                        <PresetList presets={this.state.presets} getPresetInfo={this.getPresetinfo}/>
                    ) : (
                        <p>You have no presets at the moment</p>
                    )}
                </Collapse>
            </div>
        )}
      }
export default MenuBar