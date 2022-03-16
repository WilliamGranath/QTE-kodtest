import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import Replys from "./replys";
import ReplyInput from "./replyInput";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../redux/actions/actionTypes";
import { connect } from "react-redux";
import { fetchComments } from "../redux/actions/index";
interface IProps {
  people: {
    name: string;
    note?: string;
  }[];
  items: any;
}

const ExpandMore = styled((props: { [x: string]: any; expand: any }) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Comments: React.FC<IProps> = ({ items }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [renderComments, setRenderComments] = React.useState([]);
  const [visible, setVisible] = React.useState(0);
  const [input, setInput] = React.useState({
    name: "",
    content: "",
  });

  const onClickReply = (itemId: number) => {
    setVisible(itemId);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderList = (): JSX.Element[] => {
    // Loop through items and find all replies
    // [C,C,C,C,R,C,R,C,R ...]
    const replies = items.filter((item: any) => item.replyingTo);
    const comments = items.filter((item: any) => !item.replyingTo);

    return comments
      ? comments.map((item: any, i: any) => {
          const repliesForThisComment = replies.filter(
            (reply: any) => reply.replyingTo === item.id
          );

          return (
            <Box
              display="flex"
              justifyContent="center"
              sx={{ marginBottom: 2 }}
              key={item.id}
            >
              <Card
                sx={{ minWidth: 1000, maxWidth: 1000, paddingBottom: "100px" }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {item.name.charAt(0)}
                    </Avatar>
                  }
                  title={item.name}
                  subheader={item.createdAt.replace(".000Z", " ")}
                />
                <CardContent>
                  <Typography
                    sx={{ marginBottom: "2em" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.content}
                  </Typography>
                </CardContent>
                <Collapse in={true} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Replys
                      people={renderComments}
                      replies={repliesForThisComment}
                    />
                    {visible === item.id ? (
                      <ReplyInput replyingTo={item.id} />
                    ) : (
                      <span></span>
                    )}
                  </CardContent>
                </Collapse>
                <CardActions disableSpacing>
                  {visible !== item.id ? (
                    <Button onClick={() => onClickReply(item.id)}>Reply</Button>
                  ) : (
                    <span></span>
                  )}
                  <ExpandMore
                    expand={true}
                    onClick={handleExpandClick}
                    aria-expanded={true}
                    aria-label="show more"
                  ></ExpandMore>
                </CardActions>
              </Card>
            </Box>
          );
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
