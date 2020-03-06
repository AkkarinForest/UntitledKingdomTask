import { observable, computed } from "mobx";
import Bite1 from "../../images/bite1.jpg";
import Bite2 from "../../images/bite2.jpg";
import Bite3 from "../../images/bite3.jpg";
import Party1 from "../../images/party1.jpg";
import Party2 from "../../images/party2.jpg";
import Party3 from "../../images/party3.jpg";
import Raspberry1 from "../../images/raspberry1.jpg";
import Raspberry2 from "../../images/raspberry2.jpg";
import Raspberry3 from "../../images/raspberry3.jpg";

class CounterStore {
  @observable clickCount = 0;

  @observable clicksTimes = [];

  @observable maxClickBreak = 0;

  @observable maxClickSpeed = 0;

  @computed get experienceLevel() {
    if (this.clickCount < 10) return 1;

    const levelBase = this.clickCount / 10;
    const levelGained = Math.floor(Math.log2(levelBase));
    return levelGained + 2;
  }

  @computed get achievementsData() {
    const countAchievement1 = this.clickCount >= 1;
    const countAchievement2 = this.clickCount >= 15;
    const countAchievement3 = this.clickCount >= 1000;

    const clickSpeed = this.maxClickSpeed;
    const speedAchievement1 = clickSpeed >= 3;
    const speedAchievement2 = clickSpeed >= 30;
    const speedAchievement3 = clickSpeed >= 100;

    const clickBreak = this.maxClickBreak;
    const breakAchievement1 = clickBreak >= 3;
    const breakAchievement2 = clickBreak >= 60;
    const breakAchievement3 = clickBreak >= 600;

    return [
      {
        title: "Clicking Enthusiast",
        achieved: countAchievement1,
        icon: Bite1
      },
      {
        title: "Clicking Junior",
        achieved: countAchievement2,
        icon: Bite2
      },
      {
        title: "Clicking Expert",
        achieved: countAchievement3,
        icon: Bite3
      },
      {
        title: "Clicking Sloth",
        achieved: speedAchievement1,
        icon: Raspberry1
      },
      {
        title: "Clicking Turtle",
        achieved: speedAchievement2,
        icon: Raspberry2
      },
      {
        title: "Clicking Cheetah",
        achieved: speedAchievement3,
        icon: Raspberry3
      },
      {
        title: "Clicking Nap",
        achieved: breakAchievement1,
        icon: Party1
      },
      {
        title: "Clicking Hibernation",
        achieved: breakAchievement2,
        icon: Party2
      },
      {
        title: "Clicking Coma",
        achieved: breakAchievement3,
        icon: Party3
      }
    ];
  }

  increaseCounter = () => {
    this.clickCount += 1;
  };

  saveClickTime = () => {
    const clickTime = new Date();
    this.clicksTimes.push(clickTime);
    this.reCalculateMaxClickBreak();
    this.reCalculateMaxClickSpeed();
  };

  reCalculateMaxClickBreak = () => {
    this.maxClickBreak = Math.max(this.lastClickBreak(), this.maxClickBreak);
  };

  reCalculateMaxClickSpeed = () => {
    this.maxClickSpeed = Math.max(this.currentClickSpeed(), this.maxClickSpeed);
  };

  lastClickBreak = () => {
    const lastClicks = this.clicksTimes.slice(-2);
    if (lastClicks.length < 2) {
      return 0;
    }

    return this.toDiffInSeconds(lastClicks[0], lastClicks[1]);
  };

  currentClickSpeed = () => {
    const currentTime = new Date();
    const clicksInLastMinute = this.clicksTimes.filter(
      clickTime => this.toDiffInSeconds(clickTime, currentTime) <= 60
    );

    return clicksInLastMinute.length;
  };

  toDiffInSeconds = (time1, time2) => {
    return Math.round((time2 - time1) / 1000);
  };
}

const store = new CounterStore();

export default store;
