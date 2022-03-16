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
  const [visible, setVisible] = React.useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderList = (): JSX.Element[] => {
    return items
      ? items.map((items: any, i: any) => {
          return (
            <Box
              display="flex"
              justifyContent="center"
              sx={{ marginBottom: 2 }}
              key={items.id}
            >
              <Card sx={{ minWidth: 1000 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {items.name.charAt(0)}
                    </Avatar>
                  }
                  title={items.name}
                />
                <CardContent>
                  <Typography
                    sx={{ marginBottom: "2em" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {items.content}
                  </Typography>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Replys people={renderComments} />
                  </CardContent>
                </Collapse>
                <CardActions disableSpacing>
                  <Button onClick={() => setVisible(!visible)}>
                    {visible ? <ReplyInput /> : "reply"}
                  </Button>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
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
