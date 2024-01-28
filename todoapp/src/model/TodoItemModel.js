let todoIndex = 0;
export class TodoItemModel {
  //ToDoアイテムのID
  id;
  //todo アイテムのタイトル
  TodoItemModel;
  //Todoアイテムの状態（タスクの完了・未完了）
  completed;

  constructor({ title, completed }) {
    this.id = todoIndex++;
    this.title = title;
    this.completed = completed;
  }
}
