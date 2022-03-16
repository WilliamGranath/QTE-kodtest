import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { IState as Props } from "./commentsList";
import { connect, useDispatch } from "react-redux";
import { postComment } from "../redux/actions/index";
import * as actionTypes from "../redux/actions/actionTypes";

interface IProps {
  replyingTo: any;
  postComment: any;
}

const ReplyInput: React.FC<IProps> = ({ postComment, replyingTo }) => {
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
    console.log({ input, replyingTo });
    const { name, content } = input;
    if (!name) return;
    postComment(name, content, replyingTo);
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        marginTop: "2em",
        marginBottom: "2em",
        position: "absolute",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: 200 }}>
          <input
            style={{ marginBottom: "10px" }}
            type="text"
            onChange={handleChange}
            className="Post-input"
            name="name"
            value={input.name}
            placeholder="Name"
          />
          <textarea
            style={{}}
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

export default connect(null, mapDispatch)(ReplyInput);
