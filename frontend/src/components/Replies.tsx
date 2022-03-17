import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";


import { connect } from "react-redux";
import { fetchComments } from "../redux/actions/index";
interface IProps {
  people: {
    name: string;
    note?: string;
  }[];
  replies: any;
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

const Reply: React.FC<IProps> = ({ replies }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [renderComments, setRenderComments] = React.useState([]);
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
          return (
            <Box
              display="flex"
              justifyContent="flex-start"
              sx={{ marginBottom: 2 }}
              key={reply.id}
            >
              <Card sx={{ minWidth: 700, maxWidth: 700 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {reply.name.charAt(0)}
                    </Avatar>
                  }
                  title={reply.name}
                  subheader={reply.createdAt.replace(".000Z", " ")}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {reply.content}
                  </Typography>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
                <CardActions disableSpacing>
                  {/* <Button onClick={() => setVisible(!visible)}>
                    {visible ? <ReplyInput /> : "reply"}
                  </Button> */}
                  {/* <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore> */}
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

export default connect(mapState, mapDispatch)(Reply);
