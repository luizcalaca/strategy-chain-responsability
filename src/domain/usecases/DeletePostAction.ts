import Action from "../IAction";

export default class DeletePostAction implements Action {
    execute() {
      console.log("Deleting post...");
    }
  }