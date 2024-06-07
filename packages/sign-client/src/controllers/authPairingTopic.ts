import { Store } from "@bxq2011hust/walletconnect-core";
import { Logger } from "@walletconnect/logger";
import { ICore } from "@bxq2011hust/walletconnect-types";

import { AUTH_PAIRING_TOPIC_CONTEXT, AUTH_STORAGE_PREFIX } from "../constants";

export class AuthPairingTopic extends Store<string, { topic: string; pairingTopic: string }> {
  constructor(public core: ICore, public logger: Logger) {
    super(core, logger, AUTH_PAIRING_TOPIC_CONTEXT, AUTH_STORAGE_PREFIX);
  }
}
