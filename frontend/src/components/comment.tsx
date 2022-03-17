import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";

interface IProps {
  reply: any;
  expanded: any;
}

const Comment: React.FC<IProps> = ({ reply, expanded }) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      sx={{ marginBottom: 2 }}
      key={reply.id}
    >
      <Card sx={{ minWidth: 700, maxWidth: 700, backgroundColor: "#f8f8f8" }}>
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
      </Card>
    </Box>
  );
};

export default Comment;
