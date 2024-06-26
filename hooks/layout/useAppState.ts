import { useEffect, useRef } from "react";
import {
  AppState,
  type AppStateStatus,
  type NativeEventSubscription,
} from "react-native";
import { updateDbOnAppStateChange } from "../../helpers/updateDbOnAppStateChange";
import { useAtomValue } from "jotai";
import { allTodosAtom } from "../../context/allTodosContext";

export function useAppState() {
  const allTodos = useAtomValue(allTodosAtom);
  const appState = useRef(AppState.currentState);
  let appStateListener: NativeEventSubscription;
  useEffect(() => {
    appStateListener = AppState.addEventListener(
      "change",
      async (nextAppState: AppStateStatus) => {
        if (nextAppState == "inactive" || nextAppState == "background") {
          console.log("App has gone to the background!");
          await updateDbOnAppStateChange(appState, nextAppState, allTodos);
          appState.current = nextAppState;
        }
      },
    );

    return () => {
      appStateListener.remove();
    };
  }, [allTodos]);
}
