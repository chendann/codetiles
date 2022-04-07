import React from "react";
import { ArrowRepeat, Box, Diagram2, PlayBtn, StopBtn } from "react-bootstrap-icons";
import { Conditional } from "../../Model/Conditional";
import { EntryPoint } from "../../Model/EntryPoint";
import { ExitPoint } from "../../Model/ExitPoint";
import { InitVariable } from "../../Model/InitVariable";
import { Loop } from "../../Model/Loop";
import { ProgramObject } from "../../Model/ProgramObject";

const iconSize = 24;

export type TileManifestType = {
  icon: JSX.Element,
  displayName: string,
  itemType: string,
  model: (new () => ProgramObject),
  attributes?: {
    fill?: string,
    stroke?: string,
    strokeWidth?: number
  }
}

export const BasicTiles: TileManifestType[] = [
  {
    icon: <Box size={iconSize} />,
    displayName: "Create variable",
    itemType: "variable_init",
    model: InitVariable,
    attributes: {
      fill: "#ffffa6",
      stroke: "#000000",
      strokeWidth: 1
    }
  }
];

export const ControlTiles: TileManifestType[] = [
  {
    icon: <Diagram2 size={iconSize} />,
    displayName: "Conditional",
    itemType: "conditional",
    model: Conditional,
    attributes: {
      fill: "#d1f4ff",
      stroke: "#000000",
      strokeWidth: 1
    }
  },
  {
    icon: <ArrowRepeat size={iconSize} />,
    displayName: "Loop",
    itemType: "loop",
    model: Loop,
    attributes: {
      fill: "#abffa1",
      stroke: "#000000",
      strokeWidth: 1
    }
  },
  {
    icon: <StopBtn size={iconSize} />,
    displayName: "Exit",
    itemType: "exit",
    model: ExitPoint,
    attributes: {
      fill: "#ff9e8c",
      stroke: "#000000",
      strokeWidth: 1
    }
  }
];

const EntryPointTile: TileManifestType = {
  icon: <PlayBtn size={iconSize} />,
  displayName: "Start",
  itemType: "entry",
  model: EntryPoint,
  attributes: {
    fill: "#ffffff",
    stroke: "#000000",
    strokeWidth: 1
  }
};

export function getTileTemplate(type: string): TileManifestType {
  if (type == "entry") {
    return EntryPointTile;
  }
  for (const t of ControlTiles) {
    if (t.itemType == type) {
      return t;
    }
  }
  for (const t of BasicTiles) {
    if (t.itemType == type) {
      return t;
    }
  }
  console.error("Unknown tile displayName: " + name);
  throw 1;
}