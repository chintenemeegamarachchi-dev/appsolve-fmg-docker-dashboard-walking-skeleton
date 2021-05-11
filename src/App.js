import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
    terminal: {
      margin: theme.spacing(1),
      backgroundColor: "#000",
      border: "1px solid #000",
      color: "#00ff00",
      padding: "8px",
      fontFamily: "courier new",
    },
  })
);

function App() {
  const [input, setInput] = React.useState("https://swapi.dev/api/people/1");
  const [url, setUrl] = React.useState("https://swapi.dev/api/people/1");
  const [content, setContent] = React.useState("");

  const handleClick = () => setUrl(input);

  const classes = useStyles();

  React.useEffect(() => {
    if (url.length === 0) return;

    const getData = async () => {
      const res = await await axios.get(url);
      setContent(res);
    };

    getData();
  }, [url]);

  console.log(url);
  return (
    <Container maxWidth="md">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label="gateway to heaven"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={handleClick}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
      <div className={classes.terminal}><pre>{JSON.stringify(content, null, 2)}</pre></div>
    </Container>
  );
}

export default App;
