import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryParamsRequest } from "./types/blockpost/blockpost/query";
import { QueryParamsResponse } from "./types/blockpost/blockpost/query";
import { QueryListPostRequest } from "./types/blockpost/blockpost/query";
import { QueryListPostResponse } from "./types/blockpost/blockpost/query";
import { MsgUpdateParamsResponse } from "./types/blockpost/blockpost/tx";
import { MsgUpdatePostResponse } from "./types/blockpost/blockpost/tx";
import { Post } from "./types/blockpost/blockpost/post";
import { MsgDeletePost } from "./types/blockpost/blockpost/tx";
import { QueryShowPostResponse } from "./types/blockpost/blockpost/query";
import { Params } from "./types/blockpost/blockpost/params";
import { GenesisState } from "./types/blockpost/blockpost/genesis";
import { MsgUpdatePost } from "./types/blockpost/blockpost/tx";
import { MsgCreatePostResponse } from "./types/blockpost/blockpost/tx";
import { MsgDeletePostResponse } from "./types/blockpost/blockpost/tx";
import { QueryShowPostRequest } from "./types/blockpost/blockpost/query";
import { MsgUpdateParams } from "./types/blockpost/blockpost/tx";
import { MsgCreatePost } from "./types/blockpost/blockpost/tx";
export { QueryParamsRequest, QueryParamsResponse, QueryListPostRequest, QueryListPostResponse, MsgUpdateParamsResponse, MsgUpdatePostResponse, Post, MsgDeletePost, QueryShowPostResponse, Params, GenesisState, MsgUpdatePost, MsgCreatePostResponse, MsgDeletePostResponse, QueryShowPostRequest, MsgUpdateParams, MsgCreatePost };
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryListPostRequestParams = {
    value: QueryListPostRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryListPostResponseParams = {
    value: QueryListPostResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdatePostResponseParams = {
    value: MsgUpdatePostResponse;
    fee?: StdFee;
    memo?: string;
};
type sendPostParams = {
    value: Post;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeletePostParams = {
    value: MsgDeletePost;
    fee?: StdFee;
    memo?: string;
};
type sendQueryShowPostResponseParams = {
    value: QueryShowPostResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdatePostParams = {
    value: MsgUpdatePost;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePostResponseParams = {
    value: MsgCreatePostResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDeletePostResponseParams = {
    value: MsgDeletePostResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryShowPostRequestParams = {
    value: QueryShowPostRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreatePostParams = {
    value: MsgCreatePost;
    fee?: StdFee;
    memo?: string;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryListPostRequestParams = {
    value: QueryListPostRequest;
};
type queryListPostResponseParams = {
    value: QueryListPostResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgUpdatePostResponseParams = {
    value: MsgUpdatePostResponse;
};
type postParams = {
    value: Post;
};
type msgDeletePostParams = {
    value: MsgDeletePost;
};
type queryShowPostResponseParams = {
    value: QueryShowPostResponse;
};
type paramsParams = {
    value: Params;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgUpdatePostParams = {
    value: MsgUpdatePost;
};
type msgCreatePostResponseParams = {
    value: MsgCreatePostResponse;
};
type msgDeletePostResponseParams = {
    value: MsgDeletePostResponse;
};
type queryShowPostRequestParams = {
    value: QueryShowPostRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgCreatePostParams = {
    value: MsgCreatePost;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryListPostRequest({ value, fee, memo }: sendQueryListPostRequestParams): Promise<DeliverTxResponse>;
    sendQueryListPostResponse({ value, fee, memo }: sendQueryListPostResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdatePostResponse({ value, fee, memo }: sendMsgUpdatePostResponseParams): Promise<DeliverTxResponse>;
    sendPost({ value, fee, memo }: sendPostParams): Promise<DeliverTxResponse>;
    sendMsgDeletePost({ value, fee, memo }: sendMsgDeletePostParams): Promise<DeliverTxResponse>;
    sendQueryShowPostResponse({ value, fee, memo }: sendQueryShowPostResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgUpdatePost({ value, fee, memo }: sendMsgUpdatePostParams): Promise<DeliverTxResponse>;
    sendMsgCreatePostResponse({ value, fee, memo }: sendMsgCreatePostResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeletePostResponse({ value, fee, memo }: sendMsgDeletePostResponseParams): Promise<DeliverTxResponse>;
    sendQueryShowPostRequest({ value, fee, memo }: sendQueryShowPostRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgCreatePost({ value, fee, memo }: sendMsgCreatePostParams): Promise<DeliverTxResponse>;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryListPostRequest({ value }: queryListPostRequestParams): EncodeObject;
    queryListPostResponse({ value }: queryListPostResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgUpdatePostResponse({ value }: msgUpdatePostResponseParams): EncodeObject;
    post({ value }: postParams): EncodeObject;
    msgDeletePost({ value }: msgDeletePostParams): EncodeObject;
    queryShowPostResponse({ value }: queryShowPostResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgUpdatePost({ value }: msgUpdatePostParams): EncodeObject;
    msgCreatePostResponse({ value }: msgCreatePostResponseParams): EncodeObject;
    msgDeletePostResponse({ value }: msgDeletePostResponseParams): EncodeObject;
    queryShowPostRequest({ value }: queryShowPostRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgCreatePost({ value }: msgCreatePostParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        BlockpostBlockpost: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
