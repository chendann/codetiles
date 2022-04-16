import { ProgramObject } from "../ProgramObject";


export class PrintConsole extends ProgramObject {

  constructor(title?: string) {
    super("print_console", title ?? "");
    this.addConnector("next");
    this.setAttribute("value", "");
  }

}
