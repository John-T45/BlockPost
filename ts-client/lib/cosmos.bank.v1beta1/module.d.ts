import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { SendEnabled } from "./types/cosmos/bank/v1beta1/bank";
import { QueryDenomMetadataByQueryStringRequest } from "./types/cosmos/bank/v1beta1/query";
import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";
import { Output } from "./types/cosmos/bank/v1beta1/bank";
import { DenomUnit } from "./types/cosmos/bank/v1beta1/bank";
import { SendAuthorization } from "./types/cosmos/bank/v1beta1/authz";
import { QuerySpendableBalanceByDenomRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersByQueryRequest } from "./types/cosmos/bank/v1beta1/query";
import { GenesisState } from "./types/cosmos/bank/v1beta1/genesis";
import { QueryParamsRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryParamsResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomsMetadataRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomsMetadataResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomMetadataRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySendEnabledResponse } from "./types/cosmos/bank/v1beta1/query";
import { Metadata } from "./types/cosmos/bank/v1beta1/bank";
import { QueryTotalSupplyRequest } from "./types/cosmos/bank/v1beta1/query";
import { Input } from "./types/cosmos/bank/v1beta1/bank";
import { QueryDenomMetadataByQueryStringResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgSendResponse } from "./types/cosmos/bank/v1beta1/tx";
import { Balance } from "./types/cosmos/bank/v1beta1/genesis";
import { QueryBalanceResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryAllBalancesResponse } from "./types/cosmos/bank/v1beta1/query";
import { QuerySendEnabledRequest } from "./types/cosmos/bank/v1beta1/query";
import { MsgMultiSendResponse } from "./types/cosmos/bank/v1beta1/tx";
import { QuerySupplyOfRequest } from "./types/cosmos/bank/v1beta1/query";
import { MsgSetSendEnabledResponse } from "./types/cosmos/bank/v1beta1/tx";
import { QueryBalanceRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalancesResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomMetadataResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";
import { MsgUpdateParams } from "./types/cosmos/bank/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/cosmos/bank/v1beta1/tx";
import { QuerySupplyOfResponse } from "./types/cosmos/bank/v1beta1/query";
import { DenomOwner } from "./types/cosmos/bank/v1beta1/query";
import { QueryAllBalancesRequest } from "./types/cosmos/bank/v1beta1/query";
import { Params } from "./types/cosmos/bank/v1beta1/bank";
import { Supply } from "./types/cosmos/bank/v1beta1/bank";
import { QuerySpendableBalancesRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalanceByDenomResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryTotalSupplyResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgSetSendEnabled } from "./types/cosmos/bank/v1beta1/tx";
import { QueryDenomOwnersByQueryResponse } from "./types/cosmos/bank/v1beta1/query";
export { SendEnabled, QueryDenomMetadataByQueryStringRequest, MsgSend, Output, DenomUnit, SendAuthorization, QuerySpendableBalanceByDenomRequest, QueryDenomOwnersByQueryRequest, GenesisState, QueryParamsRequest, QueryParamsResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomMetadataRequest, QuerySendEnabledResponse, Metadata, QueryTotalSupplyRequest, Input, QueryDenomMetadataByQueryStringResponse, MsgSendResponse, Balance, QueryBalanceResponse, QueryAllBalancesResponse, QuerySendEnabledRequest, MsgMultiSendResponse, QuerySupplyOfRequest, MsgSetSendEnabledResponse, QueryBalanceRequest, QuerySpendableBalancesResponse, QueryDenomMetadataResponse, MsgMultiSend, MsgUpdateParams, MsgUpdateParamsResponse, QuerySupplyOfResponse, DenomOwner, QueryAllBalancesRequest, Params, Supply, QuerySpendableBalancesRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, MsgSetSendEnabled, QueryDenomOwnersByQueryResponse };
type sendSendEnabledParams = {
    value: SendEnabled;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataByQueryStringRequestParams = {
    value: QueryDenomMetadataByQueryStringRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendParams = {
    value: MsgSend;
    fee?: StdFee;
    memo?: string;
};
type sendOutputParams = {
    value: Output;
    fee?: StdFee;
    memo?: string;
};
type sendDenomUnitParams = {
    value: DenomUnit;
    fee?: StdFee;
    memo?: string;
};
type sendSendAuthorizationParams = {
    value: SendAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalanceByDenomRequestParams = {
    value: QuerySpendableBalanceByDenomRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersByQueryRequestParams = {
    value: QueryDenomOwnersByQueryRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
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
type sendQueryDenomsMetadataRequestParams = {
    value: QueryDenomsMetadataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomsMetadataResponseParams = {
    value: QueryDenomsMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataRequestParams = {
    value: QueryDenomMetadataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySendEnabledResponseParams = {
    value: QuerySendEnabledResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMetadataParams = {
    value: Metadata;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalSupplyRequestParams = {
    value: QueryTotalSupplyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendInputParams = {
    value: Input;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataByQueryStringResponseParams = {
    value: QueryDenomMetadataByQueryStringResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendResponseParams = {
    value: MsgSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendBalanceParams = {
    value: Balance;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceResponseParams = {
    value: QueryBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllBalancesResponseParams = {
    value: QueryAllBalancesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySendEnabledRequestParams = {
    value: QuerySendEnabledRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgMultiSendResponseParams = {
    value: MsgMultiSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyOfRequestParams = {
    value: QuerySupplyOfRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetSendEnabledResponseParams = {
    value: MsgSetSendEnabledResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceRequestParams = {
    value: QueryBalanceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalancesResponseParams = {
    value: QuerySpendableBalancesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataResponseParams = {
    value: QueryDenomMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgMultiSendParams = {
    value: MsgMultiSend;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyOfResponseParams = {
    value: QuerySupplyOfResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDenomOwnerParams = {
    value: DenomOwner;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllBalancesRequestParams = {
    value: QueryAllBalancesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendSupplyParams = {
    value: Supply;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalancesRequestParams = {
    value: QuerySpendableBalancesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalanceByDenomResponseParams = {
    value: QuerySpendableBalanceByDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalSupplyResponseParams = {
    value: QueryTotalSupplyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersRequestParams = {
    value: QueryDenomOwnersRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersResponseParams = {
    value: QueryDenomOwnersResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetSendEnabledParams = {
    value: MsgSetSendEnabled;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersByQueryResponseParams = {
    value: QueryDenomOwnersByQueryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEnabledParams = {
    value: SendEnabled;
};
type queryDenomMetadataByQueryStringRequestParams = {
    value: QueryDenomMetadataByQueryStringRequest;
};
type msgSendParams = {
    value: MsgSend;
};
type outputParams = {
    value: Output;
};
type denomUnitParams = {
    value: DenomUnit;
};
type sendAuthorizationParams = {
    value: SendAuthorization;
};
type querySpendableBalanceByDenomRequestParams = {
    value: QuerySpendableBalanceByDenomRequest;
};
type queryDenomOwnersByQueryRequestParams = {
    value: QueryDenomOwnersByQueryRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryDenomsMetadataRequestParams = {
    value: QueryDenomsMetadataRequest;
};
type queryDenomsMetadataResponseParams = {
    value: QueryDenomsMetadataResponse;
};
type queryDenomMetadataRequestParams = {
    value: QueryDenomMetadataRequest;
};
type querySendEnabledResponseParams = {
    value: QuerySendEnabledResponse;
};
type metadataParams = {
    value: Metadata;
};
type queryTotalSupplyRequestParams = {
    value: QueryTotalSupplyRequest;
};
type inputParams = {
    value: Input;
};
type queryDenomMetadataByQueryStringResponseParams = {
    value: QueryDenomMetadataByQueryStringResponse;
};
type msgSendResponseParams = {
    value: MsgSendResponse;
};
type balanceParams = {
    value: Balance;
};
type queryBalanceResponseParams = {
    value: QueryBalanceResponse;
};
type queryAllBalancesResponseParams = {
    value: QueryAllBalancesResponse;
};
type querySendEnabledRequestParams = {
    value: QuerySendEnabledRequest;
};
type msgMultiSendResponseParams = {
    value: MsgMultiSendResponse;
};
type querySupplyOfRequestParams = {
    value: QuerySupplyOfRequest;
};
type msgSetSendEnabledResponseParams = {
    value: MsgSetSendEnabledResponse;
};
type queryBalanceRequestParams = {
    value: QueryBalanceRequest;
};
type querySpendableBalancesResponseParams = {
    value: QuerySpendableBalancesResponse;
};
type queryDenomMetadataResponseParams = {
    value: QueryDenomMetadataResponse;
};
type msgMultiSendParams = {
    value: MsgMultiSend;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type querySupplyOfResponseParams = {
    value: QuerySupplyOfResponse;
};
type denomOwnerParams = {
    value: DenomOwner;
};
type queryAllBalancesRequestParams = {
    value: QueryAllBalancesRequest;
};
type paramsParams = {
    value: Params;
};
type supplyParams = {
    value: Supply;
};
type querySpendableBalancesRequestParams = {
    value: QuerySpendableBalancesRequest;
};
type querySpendableBalanceByDenomResponseParams = {
    value: QuerySpendableBalanceByDenomResponse;
};
type queryTotalSupplyResponseParams = {
    value: QueryTotalSupplyResponse;
};
type queryDenomOwnersRequestParams = {
    value: QueryDenomOwnersRequest;
};
type queryDenomOwnersResponseParams = {
    value: QueryDenomOwnersResponse;
};
type msgSetSendEnabledParams = {
    value: MsgSetSendEnabled;
};
type queryDenomOwnersByQueryResponseParams = {
    value: QueryDenomOwnersByQueryResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendSendEnabled({ value, fee, memo }: sendSendEnabledParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataByQueryStringRequest({ value, fee, memo }: sendQueryDenomMetadataByQueryStringRequestParams): Promise<DeliverTxResponse>;
    sendMsgSend({ value, fee, memo }: sendMsgSendParams): Promise<DeliverTxResponse>;
    sendOutput({ value, fee, memo }: sendOutputParams): Promise<DeliverTxResponse>;
    sendDenomUnit({ value, fee, memo }: sendDenomUnitParams): Promise<DeliverTxResponse>;
    sendSendAuthorization({ value, fee, memo }: sendSendAuthorizationParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalanceByDenomRequest({ value, fee, memo }: sendQuerySpendableBalanceByDenomRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersByQueryRequest({ value, fee, memo }: sendQueryDenomOwnersByQueryRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomsMetadataRequest({ value, fee, memo }: sendQueryDenomsMetadataRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomsMetadataResponse({ value, fee, memo }: sendQueryDenomsMetadataResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataRequest({ value, fee, memo }: sendQueryDenomMetadataRequestParams): Promise<DeliverTxResponse>;
    sendQuerySendEnabledResponse({ value, fee, memo }: sendQuerySendEnabledResponseParams): Promise<DeliverTxResponse>;
    sendMetadata({ value, fee, memo }: sendMetadataParams): Promise<DeliverTxResponse>;
    sendQueryTotalSupplyRequest({ value, fee, memo }: sendQueryTotalSupplyRequestParams): Promise<DeliverTxResponse>;
    sendInput({ value, fee, memo }: sendInputParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataByQueryStringResponse({ value, fee, memo }: sendQueryDenomMetadataByQueryStringResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendResponse({ value, fee, memo }: sendMsgSendResponseParams): Promise<DeliverTxResponse>;
    sendBalance({ value, fee, memo }: sendBalanceParams): Promise<DeliverTxResponse>;
    sendQueryBalanceResponse({ value, fee, memo }: sendQueryBalanceResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllBalancesResponse({ value, fee, memo }: sendQueryAllBalancesResponseParams): Promise<DeliverTxResponse>;
    sendQuerySendEnabledRequest({ value, fee, memo }: sendQuerySendEnabledRequestParams): Promise<DeliverTxResponse>;
    sendMsgMultiSendResponse({ value, fee, memo }: sendMsgMultiSendResponseParams): Promise<DeliverTxResponse>;
    sendQuerySupplyOfRequest({ value, fee, memo }: sendQuerySupplyOfRequestParams): Promise<DeliverTxResponse>;
    sendMsgSetSendEnabledResponse({ value, fee, memo }: sendMsgSetSendEnabledResponseParams): Promise<DeliverTxResponse>;
    sendQueryBalanceRequest({ value, fee, memo }: sendQueryBalanceRequestParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalancesResponse({ value, fee, memo }: sendQuerySpendableBalancesResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataResponse({ value, fee, memo }: sendQueryDenomMetadataResponseParams): Promise<DeliverTxResponse>;
    sendMsgMultiSend({ value, fee, memo }: sendMsgMultiSendParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQuerySupplyOfResponse({ value, fee, memo }: sendQuerySupplyOfResponseParams): Promise<DeliverTxResponse>;
    sendDenomOwner({ value, fee, memo }: sendDenomOwnerParams): Promise<DeliverTxResponse>;
    sendQueryAllBalancesRequest({ value, fee, memo }: sendQueryAllBalancesRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendSupply({ value, fee, memo }: sendSupplyParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalancesRequest({ value, fee, memo }: sendQuerySpendableBalancesRequestParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalanceByDenomResponse({ value, fee, memo }: sendQuerySpendableBalanceByDenomResponseParams): Promise<DeliverTxResponse>;
    sendQueryTotalSupplyResponse({ value, fee, memo }: sendQueryTotalSupplyResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersRequest({ value, fee, memo }: sendQueryDenomOwnersRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersResponse({ value, fee, memo }: sendQueryDenomOwnersResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetSendEnabled({ value, fee, memo }: sendMsgSetSendEnabledParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersByQueryResponse({ value, fee, memo }: sendQueryDenomOwnersByQueryResponseParams): Promise<DeliverTxResponse>;
    sendEnabled({ value }: sendEnabledParams): EncodeObject;
    queryDenomMetadataByQueryStringRequest({ value }: queryDenomMetadataByQueryStringRequestParams): EncodeObject;
    msgSend({ value }: msgSendParams): EncodeObject;
    output({ value }: outputParams): EncodeObject;
    denomUnit({ value }: denomUnitParams): EncodeObject;
    sendAuthorization({ value }: sendAuthorizationParams): EncodeObject;
    querySpendableBalanceByDenomRequest({ value }: querySpendableBalanceByDenomRequestParams): EncodeObject;
    queryDenomOwnersByQueryRequest({ value }: queryDenomOwnersByQueryRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryDenomsMetadataRequest({ value }: queryDenomsMetadataRequestParams): EncodeObject;
    queryDenomsMetadataResponse({ value }: queryDenomsMetadataResponseParams): EncodeObject;
    queryDenomMetadataRequest({ value }: queryDenomMetadataRequestParams): EncodeObject;
    querySendEnabledResponse({ value }: querySendEnabledResponseParams): EncodeObject;
    metadata({ value }: metadataParams): EncodeObject;
    queryTotalSupplyRequest({ value }: queryTotalSupplyRequestParams): EncodeObject;
    input({ value }: inputParams): EncodeObject;
    queryDenomMetadataByQueryStringResponse({ value }: queryDenomMetadataByQueryStringResponseParams): EncodeObject;
    msgSendResponse({ value }: msgSendResponseParams): EncodeObject;
    balance({ value }: balanceParams): EncodeObject;
    queryBalanceResponse({ value }: queryBalanceResponseParams): EncodeObject;
    queryAllBalancesResponse({ value }: queryAllBalancesResponseParams): EncodeObject;
    querySendEnabledRequest({ value }: querySendEnabledRequestParams): EncodeObject;
    msgMultiSendResponse({ value }: msgMultiSendResponseParams): EncodeObject;
    querySupplyOfRequest({ value }: querySupplyOfRequestParams): EncodeObject;
    msgSetSendEnabledResponse({ value }: msgSetSendEnabledResponseParams): EncodeObject;
    queryBalanceRequest({ value }: queryBalanceRequestParams): EncodeObject;
    querySpendableBalancesResponse({ value }: querySpendableBalancesResponseParams): EncodeObject;
    queryDenomMetadataResponse({ value }: queryDenomMetadataResponseParams): EncodeObject;
    msgMultiSend({ value }: msgMultiSendParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    querySupplyOfResponse({ value }: querySupplyOfResponseParams): EncodeObject;
    denomOwner({ value }: denomOwnerParams): EncodeObject;
    queryAllBalancesRequest({ value }: queryAllBalancesRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    supply({ value }: supplyParams): EncodeObject;
    querySpendableBalancesRequest({ value }: querySpendableBalancesRequestParams): EncodeObject;
    querySpendableBalanceByDenomResponse({ value }: querySpendableBalanceByDenomResponseParams): EncodeObject;
    queryTotalSupplyResponse({ value }: queryTotalSupplyResponseParams): EncodeObject;
    queryDenomOwnersRequest({ value }: queryDenomOwnersRequestParams): EncodeObject;
    queryDenomOwnersResponse({ value }: queryDenomOwnersResponseParams): EncodeObject;
    msgSetSendEnabled({ value }: msgSetSendEnabledParams): EncodeObject;
    queryDenomOwnersByQueryResponse({ value }: queryDenomOwnersByQueryResponseParams): EncodeObject;
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
        CosmosBankV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
