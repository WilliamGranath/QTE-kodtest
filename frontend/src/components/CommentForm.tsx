import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { IState as Props } from "./commentsList";
import { useDispatch } from "react-redux";
import * as actionTypes from "../redux/actions/actionTypes";

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}

const CommentForm: React.FC<IProps> = ({ setPeople, people }) => {
  const dispatch = useDispatch();
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
    dispatch({
      type: actionTypes.POST_COMMENT,
      payload: {
        name,
        content,
      },
    });
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
export default CommentForm;
