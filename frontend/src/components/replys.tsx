import React from "react";
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

interface IProps {
  people: {
    name: string;
    note?: string;
  }[];
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

const Reply: React.FC<IProps> = ({ people }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <Box display="flex" justifyContent="center" sx={{ marginBottom: 2 }}>
          <Card sx={{ minWidth: 1000 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {person.name.charAt(0)}
                </Avatar>
              }
              title={person.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {person.note}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button>Reply</Button>
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
    });
  };
  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default Reply;
