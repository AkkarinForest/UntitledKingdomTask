import { CounterStore } from "../src/stores/CounterStore.js";
var MockDate = require("mockdate");

describe("CounterStore", () => {
  describe("experience level", () => {
    it("is 1 if no clicks", () => {
      const store = new CounterStore();
      expect(store.experienceLevel).toBe(1);
    });

    it("is 1 if 9 clicks", () => {
      const store = new CounterStore();
      repeat(store.increaseCounter, 9);
      expect(store.experienceLevel).toBe(1);
    });

    it("is 2 if 10 clicks", () => {
      const store = new CounterStore();
      repeat(store.increaseCounter, 10);
      expect(store.experienceLevel).toBe(2);
    });

    it("is 3 if 20 clicks", () => {
      const store = new CounterStore();
      repeat(store.increaseCounter, 20);
      expect(store.experienceLevel).toBe(3);
    });

    it("is 4 if 40 clicks", () => {
      const store = new CounterStore();
      repeat(store.increaseCounter, 40);
      expect(store.experienceLevel).toBe(4);
    });
  });

  describe("maxClickBreak", () => {
    it("is 0 if less than two clicks", () => {
      const store = new CounterStore();
      store.saveClickTime();

      expect(store.maxClickBreak).toBe(0);
    });

    it("is equal to diff between two clicks", () => {
      const store = new CounterStore();

      MockDate.set("2020-03-08 10:20:00");
      store.saveClickTime();
      MockDate.set("2020-03-08 10:20:05");
      store.saveClickTime();

      expect(store.maxClickBreak).toBe(5);
    });

    it("is equal to the biggest diff between adjecent clicks", () => {
      const store = new CounterStore();

      MockDate.set("2020-03-08 10:20:00");
      store.saveClickTime();
      MockDate.set("2020-03-08 10:20:05");
      store.saveClickTime();
      MockDate.set("2020-03-08 10:20:013");
      store.saveClickTime();
      MockDate.set("2020-03-08 10:20:015");
      store.saveClickTime();

      expect(store.maxClickBreak).toBe(8);
    });

    afterEach(() => {
      MockDate.reset();
    });
  });

  describe("maxClickSpeed", () => {
    it("is 0 if no clicks", () => {
      const store = new CounterStore();

      expect(store.maxClickSpeed).toBe(0);
    });

    it("is the sum of clicks if all click within one minute", () => {
      const store = new CounterStore();

      MockDate.set("2020-03-08 10:20:00");
      store.saveClickTime();
      MockDate.set("2020-03-08 10:20:05");
      store.saveClickTime();

      expect(store.maxClickSpeed).toBe(2);
    });

    it("is the biggest number of clicks in any minute", () => {
      const store = new CounterStore();

      repeat(() => {
        MockDate.set("2020-03-08 10:20:00");
        store.saveClickTime();
      }, 2);
      repeat(() => {
        MockDate.set("2020-03-08 10:21:01");
        store.saveClickTime();
      }, 4);
      repeat(() => {
        MockDate.set("2020-03-08 10:22:02");
        store.saveClickTime();
      }, 1);

      expect(store.maxClickSpeed).toBe(4);
    });

    afterEach(() => {
      MockDate.reset();
    });
  });
});

const repeat = (func, n) => {
  func();
  if (n === 1) return;
  repeat(func, n - 1);
};
