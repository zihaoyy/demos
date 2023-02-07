import {
  DefaultOptons,
  TrackerConfig,
  Options,
  reportTrackerData,
} from "../types/index";
import { createHistoryEvent } from "../utils/pv";

const MouseEventList: string[] = [
  "click",
  "dblclick",
  "contextmenu",
  "mousedown",
  "mouseup",
  "mouseenter",
  "mouseout",
  "mouseover",
];

export default class Tracker {
  public data: Options;

  constructor(options: Options) {
    this.data = Object.assign(this.initDef(), options);
    this.installTracker();
  }

  private initDef(): DefaultOptons {
    window.history["pushState"] = createHistoryEvent("pushState");
    window.history["replaceState"] = createHistoryEvent("replaceState");
    return <DefaultOptons>{
      sdkVersion: TrackerConfig.version,
      historyTracker: false,
      hashTracker: false,
      domTracker: false,
      jsError: false,
    };
  }

  public setUserId<T extends DefaultOptons["uuid"]>(uuid: T) {
    this.data.uuid = uuid;
  }

  public setExtra<T extends DefaultOptons["extra"]>(extra: T) {
    this.data.extra = extra;
  }

  // dom 点击上报
  public targetKeyReport() {
    MouseEventList.forEach((event) => {
      window.addEventListener(event, (e) => {
        const target = e.target as HTMLElement;
        const targetKey = target.getAttribute("target-key");
        if (targetKey) {
          this.reportTracker({
            event,
            targetKey,
          });
        }
      });
    });
  }

  // 手动上报
  public sendTracker<T extends reportTrackerData>(data: T) {
    this.reportTracker(data);
  }

  // 自动上报
  private captureEvents<T>(
    mouseEventList: string[],
    targetKey: string,
    data?: T
  ) {
    mouseEventList.forEach((event) => {
      window.addEventListener(event, () => {
        this.reportTracker({
          event,
          targetKey,
          data,
        });
      });
    });
  }

  private installTracker() {
    if (this.data.historyTracker) {
      this.captureEvents(
        ["pushState", "replaceState", "popstate"],
        "history-pv"
      );
    }
    if (this.data.hashTracker) {
      this.captureEvents(["hashchange"], "hash-pv");
    }
    if (this.data.domTracker) {
      this.targetKeyReport();
    }
    if (this.data.jsError) {
      this.jsError();
    }
  }

  // 上报
  private reportTracker<T>(data: T) {
    const params = Object.assign(this.data, data, {
      time: new Date().getTime(),
    });
    let headers = {
      type: "application/x-www-form-urlencoded",
    };
    let blob = new Blob([JSON.stringify(params)], headers);
    navigator.sendBeacon(this.data.requestUrl, blob);
  }

  // 捕获js报错
  private errorEvent() {
    window.addEventListener("error", (e) => {
      this.reportTracker({
        targetKey: "message",
        event: "js error",
        message: e.message,
      });
    });
  }

  // 捕获promise错误
  private promiseEvent() {
    window.addEventListener("unhandledrejection", (event) => {
      event.promise.catch((error) => {
        this.reportTracker({
          targetKey: "reject",
          event: "promise error",
          message: error,
        });
      });
    });
  }

  // 收集js错误和promise错误
  private jsError() {
    this.errorEvent();
    this.promiseEvent();
  }
}
