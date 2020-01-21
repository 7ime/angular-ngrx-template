import {configuration} from "../config";

const base = (rest: string) => `${configuration.remoteApi}/${rest}`;

export default class Paths {
  static Post = class {
    static GetPosts = () => base(`posts`);
    static GetPost = (id: number) => base(`posts/${id}`);
  };
}
