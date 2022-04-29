import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 4,
      task: "Submit final paper online",
      completed: true,
      colorCode: "green",
    },
    {
      id: 7,
      task: "Review proposed budget",
      completed: false,
      colorCode: "purple",
    },
    {
      id: 9,
      task: "Email Olayide about walkthroughs",
      completed: true,
      colorCode: "green",
    },
    {
      id: 2,
      task: "Write on blog: Ambition and patience",
      completed: false,
      colorCode: "purple",
    },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date(),
        task: action.payload.task,
        colorCode: action.payload.colorCode,
      };
      return [...state, newTask];
    },

    setCompleted(state, action) {
      const { event, index } = action.payload;
      const isCompleted = event.target.checked;

      const items = [...state];
      items[index] = { ...items[index], completed: isCompleted };

      return [...items];
    },
  },
});

export const { addTask, setCompleted } = todoSlice.actions;
export default todoSlice.reducer;
