import { useQueryClient, useMutation } from "react-query";
import { addTodo } from "../fakeApi";

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((todoDescription) => addTodo(todoDescription), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};