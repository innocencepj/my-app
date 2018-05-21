import * as React from "react";
import { ListGroup } from "react-bootstrap";
import ListItem from "./ListItem";

class List extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
    this.state = {
      topicList: [
        {
          id: "1",
          title: "各位行好帮穷人选台二手车吧！",
          user: "john",
          publicTime: 1520995750350,
          lastReplyTime: 1520995750350,
          topic: "全部",
          text: "aaaaaa&nbsp;aaaa<br/>aaaaa"
        },
        {
          id: "2",
          title: "各位行好帮穷人选台二手车吧！",
          user: "john",
          publicTime: 1520995750350,
          lastReplyTime: 1520995750350,
          topic: "全部",
          text: "aaaaaa&nbsp;aaaa\naaaaa"
        }
      ]
    };
  }

  render() {
    console.log(this.state.topicList);
    const topicList = this.state.topicList;
    const listContent = topicList.map(function(item: any) {
      return (
        <ListItem
          key={item.id}
          title={item.title}
          user={item.user}
          publicTime={item.publicTime}
          text={item.text}
        />
      );
    });
    return (
      <div className="container">
        <div className="content-container">
          <ListGroup>{listContent}</ListGroup>
        </div>
      </div>
    );
  }
}

export default List;
