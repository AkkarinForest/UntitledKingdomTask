import { observable, autorun } from "mobx";

class CounterStore {
  @observable clickCount = 0;

  increaseCounter = () => {
    this.clickCount += 1;
  };
}

const store = new CounterStore();

export default store;

autorun(() => {
  console.warn(store.clickCount);
});
