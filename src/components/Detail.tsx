import * as React from "react";

class Detail extends React.Component<any, any>{
    render(){
        return(
            <div className="container" >
                <div>
                    <h4>title</h4>
                </div>
                <div>content {this.props.match.params.id}</div>
            </div>
        )
    }
}

export default Detail;