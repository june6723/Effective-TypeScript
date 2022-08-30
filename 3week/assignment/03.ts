/**
 * 문제3
 * 스탑워치 구현을 보고 ui 상태 interface 설계를 개선해주세요.
 * https://online-stopwatch.ko.downloadastro.com/tools/
 * */

// 예시 인터페이스이고, 본인이 생각하는 더 나은 인터페이스로 바꾸셔도 됩니다.
interface TimeInfo {
  lappedTimeList?: string[];
  timeFormStart: string;
  timeFormLastLap: string;
}
interface ButtonStyle {
  color: string;
  icon: string
}

interface Initalized extends TimeInfo {
  type: 'initialized';
  startButton: ButtonStyle;
}
interface Running extends TimeInfo {
  type: 'running';
  pauseButton: ButtonStyle;
  addLapButton: ButtonStyle;
}
interface Paused extends TimeInfo {
  type: 'paused';
  startButton: ButtonStyle;
  resetButton: ButtonStyle;
}
type StopWatchState = Initalized | Running | Paused;

const initialState: StopWatchState = {
  type: 'initialized',
  startButton: { color: 'awf', icon: 'waef' },
  timeFormStart: '0:00',
  timeFormLastLap: '0:00',
  lappedTimeList: []
}
