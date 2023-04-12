import Action from "../IAction";

export default class UpdateProfileAction implements Action {
    execute() {
      console.log("Updating profile...");
    }
  }