//export uma constante que é um objeto.

import { NotificationActionButton } from "./notificationActionButton";
import { NotificationActions } from "./notificationActions";
import { NotificationContent } from "./notificationContent";
import { NotificationIcon } from "./notificationIcon";
import { NotificationRoot } from "./notificatonRoot";


export const Notification = {
  Root: NotificationRoot,
  Icon: NotificationIcon,
  Content: NotificationContent,
  Actions: NotificationActions,
  ActionButton: NotificationActionButton
}