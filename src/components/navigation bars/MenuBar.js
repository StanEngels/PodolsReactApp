import React from 'react';
import PresetList from '../preset/PresetList';
import axios from 'axios';
import qs from 'query-string';
class MenuBar extends React.Component {
    constructor(){
        super();
        this.state={
            presets: [],
            showPresets: [],
            token: ""
        }
    }

    componentDidMount(){
        let mounted = true;
        axios({
            method: 'post',
            url: 'https://cors-anywhere.herokuapp.com/https://podols-keycloak.herokuapp.com/auth/realms/PodolsPreset/protocol/openid-connect/token',
            data: qs.stringify({
                client_id: `PodolsClient`,
                client_secret: `665a2985-a4d1-482d-9d47-f88710832867`,
                grant_type: `password`,
                username: `Podols`,
                password: `test123`
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
        axios.get(`https://cors-anywhere.herokuapp.com/https://podolsapi.herokuapp.com/api/presets`, { headers: {"Authorization" : `Bearer ${this.state.token}`} })
        .then((data) => {
            this.setState({presets: data.data})
        })
        .catch(console.log)
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