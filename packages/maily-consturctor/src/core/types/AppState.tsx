import { ConfigType } from "./Config"
import { UiType } from "./Ui"

export type AppState = {
  data: ConfigType,
  ui: UiType,
}