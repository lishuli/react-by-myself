import second from "";


export type CreateRootOptions = {
  unstable_strictMode?: boolean,
  unstable_concurrentUpdatesByDefault?: boolean,
  identifierPrefix?: string,
  onRecoverableError?: (error: unknown) => void,
  transitionCallbacks?: TransitionTracingCallbacks,
  [key: string]: unknown;
}