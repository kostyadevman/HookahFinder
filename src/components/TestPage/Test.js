import React, { Component } from 'react';

const user = 'Bobby';

class Test extends Component {
     constructor(props) {
         super(props);
         this.state = {
             result: '',
             var1: '',
             var2: ''
         };
         this.handleVar1 = this.handleVar1.bind(this);
         this.handleVar2 = this.handleVar2.bind(this);
     }
    handleVar1 (e) {
        this.setState({ var1: e.target.value });
        this.addAction(e.target.value, this.state.var2)
    }
    handleVar2 (e) {
        this.setState({ var2: e.target.value });
        this.addAction( this.state.var1, e.target.value)
    }
    addAction (first, second) {
        const var1 = Number(first)
        const var2 = Number(second)
        let sum = '';
        if ( var1 && var2 ) {
            sum = var1 + var2;
        } else {
            sum = first + second;
        }
        this.setState({result: sum });
    }
  render() {
    return (
        <form>
            <label>
                Name:
                <input id='var1' onChange={this.handleVar1}/>
                <input  id='var2' onChange={this.handleVar2}/>
                <input  id='res' value={this.state.result} readOnly/>

            </label>

        </form>
    );
  }
}

export default Test;
