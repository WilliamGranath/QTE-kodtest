import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { IState as Props } from "./Feed";
import { connect } from "react-redux";
import { postComment } from "../redux/actions/index";

interface IProps {
  postComment: any;
}

const CommentForm: React.FC<IProps> = ({ postComment }) => {
  const [input, setInput] = useState({
    name: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = async () => {
    const { name, content } = input;
    if (!name) return;
    postComment(name, content, null);
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: { lg: "flex", md: "none" },
        justifyContent: "flex-start",
        marginTop: "2em",
        marginBottom: "2em",
        position: "absolute",
        top: 23,
        paddingLeft: "45px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: 200 }}>
          <Typography>New Post</Typography>
          <input
            style={{
              marginBottom: "10px",
              backgroundColor: "#f8f8f8",
              border: "2px solid rgb(96 125 139 / 30%)",
            }}
            type="text"
            onChange={handleChange}
            className="Post-input"
            name="name"
            value={input.name}
            placeholder="Name"
          />
          <textarea
            style={{
              height: "10em",
              resize: "none",
              backgroundColor: "#f8f8f8",
              border: "2px solid rgb(96 125 139 / 30%)",
            }}
            onChange={handleChange}
            className="Post-input"
            name="content"
            maxLength={255}
            value={input.content}
            placeholder="Comment"
          />
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            POST
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
const mapDispatch = (dispatch: any) => {
  return {
    postComment: (name: any, content: string, replyingTo: any) =>
      dispatch(postComment(name, content, replyingTo)),
  };
};

export default connect(null, mapDispatch)(CommentForm);
