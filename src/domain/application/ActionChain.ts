import Action from "../IAction";
import CreatePostAction from "../usecases/CreatePostAction";
import DeletePostAction from "../usecases/DeletePostAction";
import UpdateProfileAction from "../usecases/UpdateProfileAction";

export default class ActionChain {
    actions: Action[] = [
      new CreatePostAction(),
      new DeletePostAction(),
      new UpdateProfileAction(),
    ];
    
    executeActions() {
      this.actions.forEach(action => action.execute());
    }
  }
  