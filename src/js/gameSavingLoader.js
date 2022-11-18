import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const response = await read();
    const jsonResponse = await json(response);
    return jsonResponse;
  }
}
