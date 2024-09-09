import React, {Component} from 'react';

//this is a class compo using a props
class A extends Component {

    name =this.props.name
    render() {
        return (
            <div>
              <h1>  hello  {this.name}</h1>
            </div>
        );
    }
}

export default A;
