import { Service } from "./common";

export interface FloorCardProps {
  service: Service;
  width?: string;
  height?: string;
}

export interface Messages {
  FloorPage?: {
    services?: {
      [key: number]: {
        sectionOne?: {
          title: string;
          text: string[];
        };
        sectionTwo?: {
          title: string;
          text: string[];
        };
        sectionThree?: {
          title: string;
          text: string[];
        };
      };
    };
  };
}
