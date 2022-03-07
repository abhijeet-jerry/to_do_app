import { useMutation, useQueryClient } from "react-query";
import { removeTodo } from "../fakeApi";

export const useRemoveTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((index) => removeTodo(index), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};