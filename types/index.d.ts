export interface WheelOption {
  selectedIndex: number;
  rotate: number;
  adjustTime: number;
  wheelWrapperClass: string;
  wheelItemClass: string;
}

export interface PageOption {
  x: number;
  y: number;
  pageX: number;
  pageY: number;
}

export interface SlideOption {
  loop: boolean;
  el: Element;
  threshold: number;
  stepX: number;
  stepY: number;
  speed: number;
  listenFlick: boolean;
}

export interface ScrollBarOption {
  fade: boolean;
  interactive: boolean;
}

export interface PullDownOption {
  threshold: number;
  stop: number;
}

export interface PullUpOption {
  threshold: number;
}

export interface MouseWheelOption {
  speed: number,
  invert: boolean
}

export interface BounceObjectOption {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

export interface BsOption {
  startX: number;
  startY: number;
  scrollX: boolean;
  scrollY: boolean;
  freeScroll: boolean;
  directionLockThreshold: number;
  eventPassthrough: string | boolean;
  click: boolean;
  tap: boolean;
  bounce: boolean | BounceObjectOption;
  bounceTime: number;
  momentum: boolean;
  momentumLimitTime: number;
  momentumLimitDistance: number;
  swipeTime: number;
  swipeBounceTime: number;
  deceleration: number;
  flickLimitTime: number;
  flickLimitDistance: number;
  resizePolling: number;
  probeType: number;
  preventDefault: boolean;
  preventDefaultException: object;
  HWCompositing: boolean;
  useTransition: boolean;
  useTransform: boolean;
  bindToWrapper: boolean;
  disableMouse: boolean;
  disableTouch: boolean;
  observeDOM: boolean;
  autoBlur: boolean;
  stopPropagation: boolean;
  /**
   * for picker
   * wheel: {
 *   selectedIndex: 0,
 *   rotate: 25,
 *   adjustTime: 400
 * }
   */
  wheel: Partial<WheelOption> | boolean;
  /**
   * for slide
   * snap: {
 *   loop: boolean,
 *   el: domEl,
 *   threshold: 0.1,
 *   stepX: 100,
 *   stepY: 100,
 *   listenFlick: true
 * }
   */
  snap: Partial<SlideOption> | boolean;
  /**
   * for scrollbar
   * scrollbar: {
 *   fade: true
 *   interactive: true
 * }
   */
  scrollbar: Partial<ScrollBarOption> | boolean;
  /**
   * for pull down and refresh
   * pullDownRefresh: {
 *   threshold: 50,
 *   stop: 20
 * }
   */
  pullDownRefresh: Partial<PullDownOption> | boolean;
  /**
   * for pull up and load
   * pullUpLoad: {
 *   threshold: 50
 * }
   */
  pullUpLoad: Partial<PullUpOption> | boolean;
  /**
    * for mouseWheel
    * mouseWheel: {
   *   fade: true,
   *   interactive: false;
   * }
    */
  mouseWheel: Partial<MouseWheelOption> | boolean;
}

export interface Position {
  x: number;
  y: number;
}

export class BScroll {
  constructor(element: Element | string, options?: Partial<BsOption>);
  // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
  x: number;
  y: number;
  maxScrollX: number;
  maxScrollY: number;
  movingDirectionX: number;
  movingDirectionY: number;
  directionX: number;
  directionY: number;
  enabled: boolean;
  isInTransition: boolean;
  isAnimating: boolean;
  options: BsOption;

  refresh(): void;
  // 启用 better-scroll, 默认 开启
  enable(): void;
  // 禁用 better-scroll，DOM 事件（如 touchstart、touchmove、touchend）的回调函数不再响应
  disable(): void;
  // 相对于当前位置偏移滚动 x,y 的距离
  scrollBy(x: number, y: number, time?: number, easing?: object): void;
  // 滚动到指定的位置
  scrollTo(x: number, y: number, time?: number, easing?: object): void;
  // 滚动到指定的目标元素
  scrollToElement(el: HTMLElement | string, time?: number, offsetX?: number | boolean, offsetY?: number | boolean, easing?: object): void;
  // 立即停止当前运行的滚动动画
  stop(): void;
  // 销毁 better-scroll，解绑事件
  destroy(): void;

  // 当我们做 slide 组件的时候，slide 通常会分成多个页面。调用此方法可以滚动到指定的页面。
  goToPage(x: number, y: number, time?: number, easing?: object): void;
  // 滚动到下一个页面
  next(time?: number, easing?: object): void;
  // 滚动到上一个页面
  prev(time?: number, easing?: object): void;
  // 获取当前页面的信息
  getCurrentPage(): PageOption;
  // 当我们做 picker 组件的时候，调用该方法可以滚动到索引对应的位置
  wheelTo(index: number): void;
  // 获取当前选中的索引值
  getSelectedIndex(): number;
  // 当下拉刷新数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
  finishPullDown(): void;
  // 当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
  finishPullUp(): void;

  // 监听事件
  on(type: 'beforeScrollStart', fn: () => any): void;
  on(type: 'scrollStart', fn: () => any): void;
  on(type: 'scroll', fn: (pos: Position) => any): void;
  on(type: 'scrollCancel', fn: () => any): void;
  on(type: 'beforeScrollStart', fn: () => any): void;
  on(type: 'scrollEnd', fn: (pos: Position) => any): void;
  on(type: 'touchEnd', fn: (pos: Position) => any): void;
  on(type: 'flick', fn: () => any): void;
  on(type: 'refresh', fn: () => any): void;
  on(type: 'destroy', fn: () => any): void;
  on(type: 'pullingDown', fn: () => any): void;
  on(type: 'pullingUp', fn: () => any): void;
  off(type: 'beforeScrollStart' | 'scrollStart' | 'scroll' | 'scrollCancel' | 'beforeScrollStart' | 'scrollEnd' | 'touchEnd' | 'flick' | 'refresh' | 'destroy' | 'pullingDown' | 'pullingUp', fn: (...args: any[]) => void): void;
  trigger(type: string): void;
}

export default BScroll;
