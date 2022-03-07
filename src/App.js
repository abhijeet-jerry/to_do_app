import { useState } from "react";
import {
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { useAddTodo } from "./hooks/useAddTodo";
import { useGetTodos } from "./hooks/useGetTodos";
import { useRemoveTodo } from "./hooks/useRemoveTodo";

function App() {
  //React State
  const [todoInputText, setTodoInputText] = useState("");

  // React-Query Custom Hooks
  const { data, isLoading, isFetching } = useGetTodos();
  const removeMutation = useRemoveTodo();
  const addMutation = useAddTodo();

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <Container maxWidth="xs">
        <List>
          {isFetching && (
            <Typography variant="h5">Fetching New Data...</Typography>
          )}
          {data.map((todoDescription, index) => (
            <ListItem key={index}>
              <ListItemText>{todoDescription}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => {
                    removeMutation.mutate(index);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <TextField
          label="Todo Description"
          fullWidth
          variant="outlined"
          value={todoInputText}
          onChange={(e) => setTodoInputText(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            if (todoInputText.length > 1) {
              addMutation.mutate(todoInputText);
              setTodoInputText("");
            }
          }}
        >
          Add Todo
        </Button>
      </Container>
    );
  }
}

export default App;
