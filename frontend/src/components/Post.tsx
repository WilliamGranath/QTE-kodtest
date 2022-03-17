import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Comments from "./Comments";
import ReplyInput from "./replyInput";

interface IProps {
  item: any;
  renderComments: any;
  repliesForThisComment: any;
  handleExpandClick: any;
  visible: any;
  onClickReply: any;
  ExpandMore: any;
}

const Post: React.FC<IProps> = ({
  item,
  repliesForThisComment,
  handleExpandClick,
  visible,
  onClickReply,
  ExpandMore,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ marginBottom: 2 }}
      key={item.id}
    >
      <Card sx={{ minWidth: 2, paddingBottom: "60px" }}>
        <Card
          sx={{
            minWidth: 900,
            paddingBottom: "60px",
            backgroundColor: "#f8f8f8",
          }}
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
              sx={{ marginBottom: "2em", fontWeight: 500 }}
              variant="body2"
              color="text.secondary"
            >
              {item.content}
            </Typography>
          </CardContent>
        </Card>
        <Typography
          sx={{
            paddingRight: "10px",
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 500,
            textDecoration: "underline",
          }}
          variant="body2"
          color="text.secondary"
        >
          Replies
        </Typography>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <CardContent>
            <Comments replies={repliesForThisComment} />
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
};
export default Post;
