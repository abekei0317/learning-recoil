import { TodoList } from "./../types/index";
import { atom } from "recoil";

export const todoListState = atom<TodoList[]>({
  key: "todoListState",
  default: [],
});
