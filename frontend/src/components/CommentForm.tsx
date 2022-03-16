import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { IState as Props } from "./commentsList";
import { connect, useDispatch } from "react-redux";
import { postComment } from "../redux/actions/index";
import * as actionTypes from "../redux/actions/actionTypes";

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
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
        display: "flex",
        justifyContent: "flex-start",
        marginTop: "2em",
        marginBottom: "2em",
        position: "absolute",
        top: 23,
        paddingLeft: "45px"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: 200 }}>
          <Typography>New Post</Typography>
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
            style={{ height: "10em" }}
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
