import Action from "../IAction";

export default class CreatePostAction implements Action {
    execute() {
      console.log("Creating post...");
    }
  }