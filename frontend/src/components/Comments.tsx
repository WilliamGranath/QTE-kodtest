import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { connect } from "react-redux";
import { fetchComments } from "../redux/actions/index";
import Comment from "./Comment";

interface IProps {
  replies: any;
}

const Comments: React.FC<IProps> = ({ replies }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderList = (): JSX.Element[] => {
    return replies
      ? replies.map((reply: any, i: any) => {
          return <Comment expanded={expanded} reply={reply} />;
        })
      : null;
  };

  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};
const mapState = (state: any) => {
  return {
    ...state.comments,
  };
};
const mapDispatch = (dispatch: any) => {
  return {
    fetchComments: () => dispatch(fetchComments()),
  };
};

export default connect(mapState, mapDispatch)(Comments);
