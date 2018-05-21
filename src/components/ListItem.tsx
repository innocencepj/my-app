import { ListGroupItem } from "react-bootstrap";
import * as moment from "moment";
import * as React from "react";
import { Link } from "react-router-dom";

class ListItem extends React.Component<any, any> {

  render() {
    return (
      <ListGroupItem className="clearfix">
        <div className="title">
          <Link to="/detail/${this.props.key}">{this.props.title}</Link>
          <span className="pull-right">
            收藏
            <i className="glyphicon glyphicon-star icon-star" />
          </span>
          <div dangerouslySetInnerHTML={{__html:this.props.text}}></div>
        </div>
        <div className="public-user pull-left">发布人：{this.props.user}</div>
        <div className="public-time pull-right">
          发布时间：{moment(this.props.publicTime).format("YYYY-MM-DD hh:mm:ss")}
        </div>
      </ListGroupItem>
    );
  }
}

export default ListItem;
