import { ListGroupItem } from "react-bootstrap";
import * as React from "react";

class ListItem extends React.Component<any, any> {

  formatTime(time: number) {
    let formatTime = new Date(time);
    return formatTime;
  }

  render() {
    return (
      <ListGroupItem className="clearfix">
        <div className="title">
          <a href="#">{this.props.title}</a>
          <span className="pull-right">
            收藏 
            <i className="glyphicon glyphicon-star icon-star" />
          </span>
        </div>
        <div className="public-user pull-left">发布人：{this.props.user}</div>
        <div className="public-time pull-right">发布时间：{this.props.publicTime}</div>
        <formatTime />
      </ListGroupItem>
    );
  }
}

export default ListItem;
