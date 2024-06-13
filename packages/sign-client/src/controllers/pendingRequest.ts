import { Store } from "@bxq2011hust/walletconnect-core";
import { Logger } from "@walletconnect/logger";
import { ICore, PendingRequestTypes } from "@bxq2011hust/walletconnect-types";
import { REQUEST_CONTEXT, SIGN_CLIENT_STORAGE_PREFIX } from "../constants";

export class PendingRequest extends Store<number, PendingRequestTypes.Struct> {
  constructor(public core: ICore, public logger: Logger) {
    super(
      core,
      logger,
      REQUEST_CONTEXT,
      SIGN_CLIENT_STORAGE_PREFIX,
      (val: PendingRequestTypes.Struct) => val.id,
    );
  }
}
