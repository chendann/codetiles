import { createContext } from "react";
import { ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import { ProgramObject } from "../../Model/ProgramObject";

/*
  This context tracks the current selection and user's actions on the screen.
*/

const contextState = {
  interactionCtx: {
    menu: {
      selectedTile: null
    },
    canvas: {
      ref: null,
      selectedTile: null,
      isDraggingTile: false
    }
  },
  setInteractionCtx: (_: InteractionType) => { _ == _; }
};

export const InteractionContext = createContext<InteractionCtxType>(contextState);

export type InteractionCtxType = {
  interactionCtx: InteractionType,
  setInteractionCtx: (_: InteractionType) => void
}

export type InteractionType = {
  menu: {
    selectedTile: string | null
  },
  canvas: {
    ref: ReactZoomPanPinchRef | null,
    selectedTile: ProgramObject | null,
    isDraggingTile: boolean
  }
}