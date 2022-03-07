import { useQuery } from "react-query";
import { getTodos } from "../fakeApi";

export const useGetTodos = () => useQuery("todos", getTodos);