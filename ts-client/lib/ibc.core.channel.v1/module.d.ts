import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { ErrorReceipt } from "./types/ibc/core/channel/v1/upgrade";
import { QueryChannelResponse } from "./types/ibc/core/channel/v1/query";
import { QueryChannelConsensusStateRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeAck } from "./types/ibc/core/channel/v1/tx";
import { MsgPruneAcknowledgements } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelClientStateRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelCloseConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgAcknowledgement } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenAckResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeCancelResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTryResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeOpenResponse } from "./types/ibc/core/channel/v1/tx";
import { PacketSequence } from "./types/ibc/core/channel/v1/genesis";
import { QueryPacketReceiptRequest } from "./types/ibc/core/channel/v1/query";
import { Channel } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelOpenTry } from "./types/ibc/core/channel/v1/tx";
import { Params } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelOpenConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutOnClose } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeInit } from "./types/ibc/core/channel/v1/tx";
import { QueryNextSequenceReceiveRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelParamsRequest } from "./types/ibc/core/channel/v1/query";
import { Timeout } from "./types/ibc/core/channel/v1/channel";
import { PacketState } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelUpgradeCancel } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { PacketId } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelCloseInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgPruneAcknowledgementsResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryConnectionChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketReceiptResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksResponse } from "./types/ibc/core/channel/v1/query";
import { MsgRecvPacket } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenInit } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenAck } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTry } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeConfirm } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketCommitmentResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedPacketsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceReceiveResponse } from "./types/ibc/core/channel/v1/query";
import { Upgrade } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelUpgradeOpen } from "./types/ibc/core/channel/v1/tx";
import { MsgRecvPacketResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementResponse } from "./types/ibc/core/channel/v1/query";
import { QueryChannelParamsResponse } from "./types/ibc/core/channel/v1/query";
import { MsgTimeout } from "./types/ibc/core/channel/v1/tx";
import { IdentifiedChannel } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelOpenInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksRequest } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceSendResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeRequest } from "./types/ibc/core/channel/v1/query";
import { MsgUpdateParams } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelClientStateResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeErrorResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeTimeout } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenTryResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryConnectionChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryChannelConsensusStateResponse } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceSendRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeErrorRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeAckResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketCommitmentsResponse } from "./types/ibc/core/channel/v1/query";
import { Counterparty } from "./types/ibc/core/channel/v1/channel";
import { MsgTimeoutOnCloseResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgAcknowledgementResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketAcknowledgementsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementsResponse } from "./types/ibc/core/channel/v1/query";
import { UpgradeFields } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelCloseInit } from "./types/ibc/core/channel/v1/tx";
import { QueryUnreceivedPacketsResponse } from "./types/ibc/core/channel/v1/query";
import { Acknowledgement } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelUpgradeInitResponse } from "./types/ibc/core/channel/v1/tx";
import { GenesisState } from "./types/ibc/core/channel/v1/genesis";
import { Packet } from "./types/ibc/core/channel/v1/channel";
import { MsgTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
export { ErrorReceipt, QueryChannelResponse, QueryChannelConsensusStateRequest, QueryPacketAcknowledgementRequest, MsgChannelUpgradeAck, MsgPruneAcknowledgements, QueryChannelClientStateRequest, MsgChannelCloseConfirm, MsgAcknowledgement, QueryChannelsResponse, MsgChannelOpenAckResponse, MsgChannelUpgradeCancelResponse, MsgChannelUpgradeTryResponse, MsgChannelUpgradeOpenResponse, PacketSequence, QueryPacketReceiptRequest, Channel, MsgChannelOpenTry, Params, MsgChannelOpenConfirm, MsgTimeoutOnClose, MsgChannelUpgradeInit, QueryNextSequenceReceiveRequest, QueryChannelParamsRequest, Timeout, PacketState, MsgChannelUpgradeCancel, MsgChannelCloseConfirmResponse, PacketId, MsgChannelCloseInitResponse, MsgPruneAcknowledgementsResponse, QueryConnectionChannelsRequest, QueryPacketCommitmentRequest, QueryUpgradeResponse, QueryPacketReceiptResponse, QueryUnreceivedAcksResponse, MsgRecvPacket, MsgChannelUpgradeTimeoutResponse, MsgChannelOpenInit, MsgChannelOpenAck, MsgChannelUpgradeTry, MsgChannelUpgradeConfirm, QueryPacketCommitmentResponse, QueryUnreceivedPacketsRequest, QueryNextSequenceReceiveResponse, Upgrade, MsgChannelUpgradeOpen, MsgRecvPacketResponse, MsgUpdateParamsResponse, QueryChannelsRequest, QueryPacketAcknowledgementResponse, QueryChannelParamsResponse, MsgTimeout, IdentifiedChannel, MsgChannelOpenInitResponse, MsgChannelUpgradeConfirmResponse, QueryChannelRequest, QueryUnreceivedAcksRequest, QueryNextSequenceSendResponse, QueryUpgradeRequest, MsgUpdateParams, MsgChannelOpenConfirmResponse, QueryChannelClientStateResponse, QueryPacketCommitmentsRequest, QueryUpgradeErrorResponse, MsgChannelUpgradeTimeout, MsgChannelOpenTryResponse, QueryConnectionChannelsResponse, QueryChannelConsensusStateResponse, QueryNextSequenceSendRequest, QueryUpgradeErrorRequest, MsgChannelUpgradeAckResponse, QueryPacketCommitmentsResponse, Counterparty, MsgTimeoutOnCloseResponse, MsgAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, UpgradeFields, MsgChannelCloseInit, QueryUnreceivedPacketsResponse, Acknowledgement, MsgChannelUpgradeInitResponse, GenesisState, Packet, MsgTimeoutResponse };
type sendErrorReceiptParams = {
    value: ErrorReceipt;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelResponseParams = {
    value: QueryChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelConsensusStateRequestParams = {
    value: QueryChannelConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementRequestParams = {
    value: QueryPacketAcknowledgementRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeAckParams = {
    value: MsgChannelUpgradeAck;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPruneAcknowledgementsParams = {
    value: MsgPruneAcknowledgements;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelClientStateRequestParams = {
    value: QueryChannelClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseConfirmParams = {
    value: MsgChannelCloseConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAcknowledgementParams = {
    value: MsgAcknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelsResponseParams = {
    value: QueryChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenAckResponseParams = {
    value: MsgChannelOpenAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeCancelResponseParams = {
    value: MsgChannelUpgradeCancelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTryResponseParams = {
    value: MsgChannelUpgradeTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeOpenResponseParams = {
    value: MsgChannelUpgradeOpenResponse;
    fee?: StdFee;
    memo?: string;
};
type sendPacketSequenceParams = {
    value: PacketSequence;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketReceiptRequestParams = {
    value: QueryPacketReceiptRequest;
    fee?: StdFee;
    memo?: string;
};
type sendChannelParams = {
    value: Channel;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenTryParams = {
    value: MsgChannelOpenTry;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenConfirmParams = {
    value: MsgChannelOpenConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutOnCloseParams = {
    value: MsgTimeoutOnClose;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeInitParams = {
    value: MsgChannelUpgradeInit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceReceiveRequestParams = {
    value: QueryNextSequenceReceiveRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelParamsRequestParams = {
    value: QueryChannelParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendTimeoutParams = {
    value: Timeout;
    fee?: StdFee;
    memo?: string;
};
type sendPacketStateParams = {
    value: PacketState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeCancelParams = {
    value: MsgChannelUpgradeCancel;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseConfirmResponseParams = {
    value: MsgChannelCloseConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendPacketIdParams = {
    value: PacketId;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseInitResponseParams = {
    value: MsgChannelCloseInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPruneAcknowledgementsResponseParams = {
    value: MsgPruneAcknowledgementsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionChannelsRequestParams = {
    value: QueryConnectionChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentRequestParams = {
    value: QueryPacketCommitmentRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeResponseParams = {
    value: QueryUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketReceiptResponseParams = {
    value: QueryPacketReceiptResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedAcksResponseParams = {
    value: QueryUnreceivedAcksResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecvPacketParams = {
    value: MsgRecvPacket;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTimeoutResponseParams = {
    value: MsgChannelUpgradeTimeoutResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenInitParams = {
    value: MsgChannelOpenInit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenAckParams = {
    value: MsgChannelOpenAck;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTryParams = {
    value: MsgChannelUpgradeTry;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeConfirmParams = {
    value: MsgChannelUpgradeConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentResponseParams = {
    value: QueryPacketCommitmentResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedPacketsRequestParams = {
    value: QueryUnreceivedPacketsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceReceiveResponseParams = {
    value: QueryNextSequenceReceiveResponse;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeParams = {
    value: Upgrade;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeOpenParams = {
    value: MsgChannelUpgradeOpen;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecvPacketResponseParams = {
    value: MsgRecvPacketResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelsRequestParams = {
    value: QueryChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementResponseParams = {
    value: QueryPacketAcknowledgementResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelParamsResponseParams = {
    value: QueryChannelParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutParams = {
    value: MsgTimeout;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedChannelParams = {
    value: IdentifiedChannel;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenInitResponseParams = {
    value: MsgChannelOpenInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeConfirmResponseParams = {
    value: MsgChannelUpgradeConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelRequestParams = {
    value: QueryChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedAcksRequestParams = {
    value: QueryUnreceivedAcksRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceSendResponseParams = {
    value: QueryNextSequenceSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeRequestParams = {
    value: QueryUpgradeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenConfirmResponseParams = {
    value: MsgChannelOpenConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelClientStateResponseParams = {
    value: QueryChannelClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentsRequestParams = {
    value: QueryPacketCommitmentsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeErrorResponseParams = {
    value: QueryUpgradeErrorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTimeoutParams = {
    value: MsgChannelUpgradeTimeout;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenTryResponseParams = {
    value: MsgChannelOpenTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionChannelsResponseParams = {
    value: QueryConnectionChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelConsensusStateResponseParams = {
    value: QueryChannelConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceSendRequestParams = {
    value: QueryNextSequenceSendRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeErrorRequestParams = {
    value: QueryUpgradeErrorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeAckResponseParams = {
    value: MsgChannelUpgradeAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentsResponseParams = {
    value: QueryPacketCommitmentsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCounterpartyParams = {
    value: Counterparty;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutOnCloseResponseParams = {
    value: MsgTimeoutOnCloseResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAcknowledgementResponseParams = {
    value: MsgAcknowledgementResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementsRequestParams = {
    value: QueryPacketAcknowledgementsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementsResponseParams = {
    value: QueryPacketAcknowledgementsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeFieldsParams = {
    value: UpgradeFields;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseInitParams = {
    value: MsgChannelCloseInit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedPacketsResponseParams = {
    value: QueryUnreceivedPacketsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendAcknowledgementParams = {
    value: Acknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeInitResponseParams = {
    value: MsgChannelUpgradeInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendPacketParams = {
    value: Packet;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutResponseParams = {
    value: MsgTimeoutResponse;
    fee?: StdFee;
    memo?: string;
};
type errorReceiptParams = {
    value: ErrorReceipt;
};
type queryChannelResponseParams = {
    value: QueryChannelResponse;
};
type queryChannelConsensusStateRequestParams = {
    value: QueryChannelConsensusStateRequest;
};
type queryPacketAcknowledgementRequestParams = {
    value: QueryPacketAcknowledgementRequest;
};
type msgChannelUpgradeAckParams = {
    value: MsgChannelUpgradeAck;
};
type msgPruneAcknowledgementsParams = {
    value: MsgPruneAcknowledgements;
};
type queryChannelClientStateRequestParams = {
    value: QueryChannelClientStateRequest;
};
type msgChannelCloseConfirmParams = {
    value: MsgChannelCloseConfirm;
};
type msgAcknowledgementParams = {
    value: MsgAcknowledgement;
};
type queryChannelsResponseParams = {
    value: QueryChannelsResponse;
};
type msgChannelOpenAckResponseParams = {
    value: MsgChannelOpenAckResponse;
};
type msgChannelUpgradeCancelResponseParams = {
    value: MsgChannelUpgradeCancelResponse;
};
type msgChannelUpgradeTryResponseParams = {
    value: MsgChannelUpgradeTryResponse;
};
type msgChannelUpgradeOpenResponseParams = {
    value: MsgChannelUpgradeOpenResponse;
};
type packetSequenceParams = {
    value: PacketSequence;
};
type queryPacketReceiptRequestParams = {
    value: QueryPacketReceiptRequest;
};
type channelParams = {
    value: Channel;
};
type msgChannelOpenTryParams = {
    value: MsgChannelOpenTry;
};
type paramsParams = {
    value: Params;
};
type msgChannelOpenConfirmParams = {
    value: MsgChannelOpenConfirm;
};
type msgTimeoutOnCloseParams = {
    value: MsgTimeoutOnClose;
};
type msgChannelUpgradeInitParams = {
    value: MsgChannelUpgradeInit;
};
type queryNextSequenceReceiveRequestParams = {
    value: QueryNextSequenceReceiveRequest;
};
type queryChannelParamsRequestParams = {
    value: QueryChannelParamsRequest;
};
type timeoutParams = {
    value: Timeout;
};
type packetStateParams = {
    value: PacketState;
};
type msgChannelUpgradeCancelParams = {
    value: MsgChannelUpgradeCancel;
};
type msgChannelCloseConfirmResponseParams = {
    value: MsgChannelCloseConfirmResponse;
};
type packetIdParams = {
    value: PacketId;
};
type msgChannelCloseInitResponseParams = {
    value: MsgChannelCloseInitResponse;
};
type msgPruneAcknowledgementsResponseParams = {
    value: MsgPruneAcknowledgementsResponse;
};
type queryConnectionChannelsRequestParams = {
    value: QueryConnectionChannelsRequest;
};
type queryPacketCommitmentRequestParams = {
    value: QueryPacketCommitmentRequest;
};
type queryUpgradeResponseParams = {
    value: QueryUpgradeResponse;
};
type queryPacketReceiptResponseParams = {
    value: QueryPacketReceiptResponse;
};
type queryUnreceivedAcksResponseParams = {
    value: QueryUnreceivedAcksResponse;
};
type msgRecvPacketParams = {
    value: MsgRecvPacket;
};
type msgChannelUpgradeTimeoutResponseParams = {
    value: MsgChannelUpgradeTimeoutResponse;
};
type msgChannelOpenInitParams = {
    value: MsgChannelOpenInit;
};
type msgChannelOpenAckParams = {
    value: MsgChannelOpenAck;
};
type msgChannelUpgradeTryParams = {
    value: MsgChannelUpgradeTry;
};
type msgChannelUpgradeConfirmParams = {
    value: MsgChannelUpgradeConfirm;
};
type queryPacketCommitmentResponseParams = {
    value: QueryPacketCommitmentResponse;
};
type queryUnreceivedPacketsRequestParams = {
    value: QueryUnreceivedPacketsRequest;
};
type queryNextSequenceReceiveResponseParams = {
    value: QueryNextSequenceReceiveResponse;
};
type upgradeParams = {
    value: Upgrade;
};
type msgChannelUpgradeOpenParams = {
    value: MsgChannelUpgradeOpen;
};
type msgRecvPacketResponseParams = {
    value: MsgRecvPacketResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryChannelsRequestParams = {
    value: QueryChannelsRequest;
};
type queryPacketAcknowledgementResponseParams = {
    value: QueryPacketAcknowledgementResponse;
};
type queryChannelParamsResponseParams = {
    value: QueryChannelParamsResponse;
};
type msgTimeoutParams = {
    value: MsgTimeout;
};
type identifiedChannelParams = {
    value: IdentifiedChannel;
};
type msgChannelOpenInitResponseParams = {
    value: MsgChannelOpenInitResponse;
};
type msgChannelUpgradeConfirmResponseParams = {
    value: MsgChannelUpgradeConfirmResponse;
};
type queryChannelRequestParams = {
    value: QueryChannelRequest;
};
type queryUnreceivedAcksRequestParams = {
    value: QueryUnreceivedAcksRequest;
};
type queryNextSequenceSendResponseParams = {
    value: QueryNextSequenceSendResponse;
};
type queryUpgradeRequestParams = {
    value: QueryUpgradeRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgChannelOpenConfirmResponseParams = {
    value: MsgChannelOpenConfirmResponse;
};
type queryChannelClientStateResponseParams = {
    value: QueryChannelClientStateResponse;
};
type queryPacketCommitmentsRequestParams = {
    value: QueryPacketCommitmentsRequest;
};
type queryUpgradeErrorResponseParams = {
    value: QueryUpgradeErrorResponse;
};
type msgChannelUpgradeTimeoutParams = {
    value: MsgChannelUpgradeTimeout;
};
type msgChannelOpenTryResponseParams = {
    value: MsgChannelOpenTryResponse;
};
type queryConnectionChannelsResponseParams = {
    value: QueryConnectionChannelsResponse;
};
type queryChannelConsensusStateResponseParams = {
    value: QueryChannelConsensusStateResponse;
};
type queryNextSequenceSendRequestParams = {
    value: QueryNextSequenceSendRequest;
};
type queryUpgradeErrorRequestParams = {
    value: QueryUpgradeErrorRequest;
};
type msgChannelUpgradeAckResponseParams = {
    value: MsgChannelUpgradeAckResponse;
};
type queryPacketCommitmentsResponseParams = {
    value: QueryPacketCommitmentsResponse;
};
type counterpartyParams = {
    value: Counterparty;
};
type msgTimeoutOnCloseResponseParams = {
    value: MsgTimeoutOnCloseResponse;
};
type msgAcknowledgementResponseParams = {
    value: MsgAcknowledgementResponse;
};
type queryPacketAcknowledgementsRequestParams = {
    value: QueryPacketAcknowledgementsRequest;
};
type queryPacketAcknowledgementsResponseParams = {
    value: QueryPacketAcknowledgementsResponse;
};
type upgradeFieldsParams = {
    value: UpgradeFields;
};
type msgChannelCloseInitParams = {
    value: MsgChannelCloseInit;
};
type queryUnreceivedPacketsResponseParams = {
    value: QueryUnreceivedPacketsResponse;
};
type acknowledgementParams = {
    value: Acknowledgement;
};
type msgChannelUpgradeInitResponseParams = {
    value: MsgChannelUpgradeInitResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type packetParams = {
    value: Packet;
};
type msgTimeoutResponseParams = {
    value: MsgTimeoutResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendErrorReceipt({ value, fee, memo }: sendErrorReceiptParams): Promise<DeliverTxResponse>;
    sendQueryChannelResponse({ value, fee, memo }: sendQueryChannelResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelConsensusStateRequest({ value, fee, memo }: sendQueryChannelConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementRequest({ value, fee, memo }: sendQueryPacketAcknowledgementRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeAck({ value, fee, memo }: sendMsgChannelUpgradeAckParams): Promise<DeliverTxResponse>;
    sendMsgPruneAcknowledgements({ value, fee, memo }: sendMsgPruneAcknowledgementsParams): Promise<DeliverTxResponse>;
    sendQueryChannelClientStateRequest({ value, fee, memo }: sendQueryChannelClientStateRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseConfirm({ value, fee, memo }: sendMsgChannelCloseConfirmParams): Promise<DeliverTxResponse>;
    sendMsgAcknowledgement({ value, fee, memo }: sendMsgAcknowledgementParams): Promise<DeliverTxResponse>;
    sendQueryChannelsResponse({ value, fee, memo }: sendQueryChannelsResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenAckResponse({ value, fee, memo }: sendMsgChannelOpenAckResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeCancelResponse({ value, fee, memo }: sendMsgChannelUpgradeCancelResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTryResponse({ value, fee, memo }: sendMsgChannelUpgradeTryResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeOpenResponse({ value, fee, memo }: sendMsgChannelUpgradeOpenResponseParams): Promise<DeliverTxResponse>;
    sendPacketSequence({ value, fee, memo }: sendPacketSequenceParams): Promise<DeliverTxResponse>;
    sendQueryPacketReceiptRequest({ value, fee, memo }: sendQueryPacketReceiptRequestParams): Promise<DeliverTxResponse>;
    sendChannel({ value, fee, memo }: sendChannelParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenTry({ value, fee, memo }: sendMsgChannelOpenTryParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenConfirm({ value, fee, memo }: sendMsgChannelOpenConfirmParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutOnClose({ value, fee, memo }: sendMsgTimeoutOnCloseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeInit({ value, fee, memo }: sendMsgChannelUpgradeInitParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceReceiveRequest({ value, fee, memo }: sendQueryNextSequenceReceiveRequestParams): Promise<DeliverTxResponse>;
    sendQueryChannelParamsRequest({ value, fee, memo }: sendQueryChannelParamsRequestParams): Promise<DeliverTxResponse>;
    sendTimeout({ value, fee, memo }: sendTimeoutParams): Promise<DeliverTxResponse>;
    sendPacketState({ value, fee, memo }: sendPacketStateParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeCancel({ value, fee, memo }: sendMsgChannelUpgradeCancelParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseConfirmResponse({ value, fee, memo }: sendMsgChannelCloseConfirmResponseParams): Promise<DeliverTxResponse>;
    sendPacketId({ value, fee, memo }: sendPacketIdParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseInitResponse({ value, fee, memo }: sendMsgChannelCloseInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgPruneAcknowledgementsResponse({ value, fee, memo }: sendMsgPruneAcknowledgementsResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionChannelsRequest({ value, fee, memo }: sendQueryConnectionChannelsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentRequest({ value, fee, memo }: sendQueryPacketCommitmentRequestParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeResponse({ value, fee, memo }: sendQueryUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketReceiptResponse({ value, fee, memo }: sendQueryPacketReceiptResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedAcksResponse({ value, fee, memo }: sendQueryUnreceivedAcksResponseParams): Promise<DeliverTxResponse>;
    sendMsgRecvPacket({ value, fee, memo }: sendMsgRecvPacketParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTimeoutResponse({ value, fee, memo }: sendMsgChannelUpgradeTimeoutResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenInit({ value, fee, memo }: sendMsgChannelOpenInitParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenAck({ value, fee, memo }: sendMsgChannelOpenAckParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTry({ value, fee, memo }: sendMsgChannelUpgradeTryParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeConfirm({ value, fee, memo }: sendMsgChannelUpgradeConfirmParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentResponse({ value, fee, memo }: sendQueryPacketCommitmentResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedPacketsRequest({ value, fee, memo }: sendQueryUnreceivedPacketsRequestParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceReceiveResponse({ value, fee, memo }: sendQueryNextSequenceReceiveResponseParams): Promise<DeliverTxResponse>;
    sendUpgrade({ value, fee, memo }: sendUpgradeParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeOpen({ value, fee, memo }: sendMsgChannelUpgradeOpenParams): Promise<DeliverTxResponse>;
    sendMsgRecvPacketResponse({ value, fee, memo }: sendMsgRecvPacketResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelsRequest({ value, fee, memo }: sendQueryChannelsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementResponse({ value, fee, memo }: sendQueryPacketAcknowledgementResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelParamsResponse({ value, fee, memo }: sendQueryChannelParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgTimeout({ value, fee, memo }: sendMsgTimeoutParams): Promise<DeliverTxResponse>;
    sendIdentifiedChannel({ value, fee, memo }: sendIdentifiedChannelParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenInitResponse({ value, fee, memo }: sendMsgChannelOpenInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeConfirmResponse({ value, fee, memo }: sendMsgChannelUpgradeConfirmResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelRequest({ value, fee, memo }: sendQueryChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedAcksRequest({ value, fee, memo }: sendQueryUnreceivedAcksRequestParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceSendResponse({ value, fee, memo }: sendQueryNextSequenceSendResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeRequest({ value, fee, memo }: sendQueryUpgradeRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenConfirmResponse({ value, fee, memo }: sendMsgChannelOpenConfirmResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelClientStateResponse({ value, fee, memo }: sendQueryChannelClientStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentsRequest({ value, fee, memo }: sendQueryPacketCommitmentsRequestParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeErrorResponse({ value, fee, memo }: sendQueryUpgradeErrorResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTimeout({ value, fee, memo }: sendMsgChannelUpgradeTimeoutParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenTryResponse({ value, fee, memo }: sendMsgChannelOpenTryResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionChannelsResponse({ value, fee, memo }: sendQueryConnectionChannelsResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelConsensusStateResponse({ value, fee, memo }: sendQueryChannelConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceSendRequest({ value, fee, memo }: sendQueryNextSequenceSendRequestParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeErrorRequest({ value, fee, memo }: sendQueryUpgradeErrorRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeAckResponse({ value, fee, memo }: sendMsgChannelUpgradeAckResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentsResponse({ value, fee, memo }: sendQueryPacketCommitmentsResponseParams): Promise<DeliverTxResponse>;
    sendCounterparty({ value, fee, memo }: sendCounterpartyParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutOnCloseResponse({ value, fee, memo }: sendMsgTimeoutOnCloseResponseParams): Promise<DeliverTxResponse>;
    sendMsgAcknowledgementResponse({ value, fee, memo }: sendMsgAcknowledgementResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementsRequest({ value, fee, memo }: sendQueryPacketAcknowledgementsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementsResponse({ value, fee, memo }: sendQueryPacketAcknowledgementsResponseParams): Promise<DeliverTxResponse>;
    sendUpgradeFields({ value, fee, memo }: sendUpgradeFieldsParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseInit({ value, fee, memo }: sendMsgChannelCloseInitParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedPacketsResponse({ value, fee, memo }: sendQueryUnreceivedPacketsResponseParams): Promise<DeliverTxResponse>;
    sendAcknowledgement({ value, fee, memo }: sendAcknowledgementParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeInitResponse({ value, fee, memo }: sendMsgChannelUpgradeInitResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendPacket({ value, fee, memo }: sendPacketParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutResponse({ value, fee, memo }: sendMsgTimeoutResponseParams): Promise<DeliverTxResponse>;
    errorReceipt({ value }: errorReceiptParams): EncodeObject;
    queryChannelResponse({ value }: queryChannelResponseParams): EncodeObject;
    queryChannelConsensusStateRequest({ value }: queryChannelConsensusStateRequestParams): EncodeObject;
    queryPacketAcknowledgementRequest({ value }: queryPacketAcknowledgementRequestParams): EncodeObject;
    msgChannelUpgradeAck({ value }: msgChannelUpgradeAckParams): EncodeObject;
    msgPruneAcknowledgements({ value }: msgPruneAcknowledgementsParams): EncodeObject;
    queryChannelClientStateRequest({ value }: queryChannelClientStateRequestParams): EncodeObject;
    msgChannelCloseConfirm({ value }: msgChannelCloseConfirmParams): EncodeObject;
    msgAcknowledgement({ value }: msgAcknowledgementParams): EncodeObject;
    queryChannelsResponse({ value }: queryChannelsResponseParams): EncodeObject;
    msgChannelOpenAckResponse({ value }: msgChannelOpenAckResponseParams): EncodeObject;
    msgChannelUpgradeCancelResponse({ value }: msgChannelUpgradeCancelResponseParams): EncodeObject;
    msgChannelUpgradeTryResponse({ value }: msgChannelUpgradeTryResponseParams): EncodeObject;
    msgChannelUpgradeOpenResponse({ value }: msgChannelUpgradeOpenResponseParams): EncodeObject;
    packetSequence({ value }: packetSequenceParams): EncodeObject;
    queryPacketReceiptRequest({ value }: queryPacketReceiptRequestParams): EncodeObject;
    channel({ value }: channelParams): EncodeObject;
    msgChannelOpenTry({ value }: msgChannelOpenTryParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgChannelOpenConfirm({ value }: msgChannelOpenConfirmParams): EncodeObject;
    msgTimeoutOnClose({ value }: msgTimeoutOnCloseParams): EncodeObject;
    msgChannelUpgradeInit({ value }: msgChannelUpgradeInitParams): EncodeObject;
    queryNextSequenceReceiveRequest({ value }: queryNextSequenceReceiveRequestParams): EncodeObject;
    queryChannelParamsRequest({ value }: queryChannelParamsRequestParams): EncodeObject;
    timeout({ value }: timeoutParams): EncodeObject;
    packetState({ value }: packetStateParams): EncodeObject;
    msgChannelUpgradeCancel({ value }: msgChannelUpgradeCancelParams): EncodeObject;
    msgChannelCloseConfirmResponse({ value }: msgChannelCloseConfirmResponseParams): EncodeObject;
    packetId({ value }: packetIdParams): EncodeObject;
    msgChannelCloseInitResponse({ value }: msgChannelCloseInitResponseParams): EncodeObject;
    msgPruneAcknowledgementsResponse({ value }: msgPruneAcknowledgementsResponseParams): EncodeObject;
    queryConnectionChannelsRequest({ value }: queryConnectionChannelsRequestParams): EncodeObject;
    queryPacketCommitmentRequest({ value }: queryPacketCommitmentRequestParams): EncodeObject;
    queryUpgradeResponse({ value }: queryUpgradeResponseParams): EncodeObject;
    queryPacketReceiptResponse({ value }: queryPacketReceiptResponseParams): EncodeObject;
    queryUnreceivedAcksResponse({ value }: queryUnreceivedAcksResponseParams): EncodeObject;
    msgRecvPacket({ value }: msgRecvPacketParams): EncodeObject;
    msgChannelUpgradeTimeoutResponse({ value }: msgChannelUpgradeTimeoutResponseParams): EncodeObject;
    msgChannelOpenInit({ value }: msgChannelOpenInitParams): EncodeObject;
    msgChannelOpenAck({ value }: msgChannelOpenAckParams): EncodeObject;
    msgChannelUpgradeTry({ value }: msgChannelUpgradeTryParams): EncodeObject;
    msgChannelUpgradeConfirm({ value }: msgChannelUpgradeConfirmParams): EncodeObject;
    queryPacketCommitmentResponse({ value }: queryPacketCommitmentResponseParams): EncodeObject;
    queryUnreceivedPacketsRequest({ value }: queryUnreceivedPacketsRequestParams): EncodeObject;
    queryNextSequenceReceiveResponse({ value }: queryNextSequenceReceiveResponseParams): EncodeObject;
    upgrade({ value }: upgradeParams): EncodeObject;
    msgChannelUpgradeOpen({ value }: msgChannelUpgradeOpenParams): EncodeObject;
    msgRecvPacketResponse({ value }: msgRecvPacketResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryChannelsRequest({ value }: queryChannelsRequestParams): EncodeObject;
    queryPacketAcknowledgementResponse({ value }: queryPacketAcknowledgementResponseParams): EncodeObject;
    queryChannelParamsResponse({ value }: queryChannelParamsResponseParams): EncodeObject;
    msgTimeout({ value }: msgTimeoutParams): EncodeObject;
    identifiedChannel({ value }: identifiedChannelParams): EncodeObject;
    msgChannelOpenInitResponse({ value }: msgChannelOpenInitResponseParams): EncodeObject;
    msgChannelUpgradeConfirmResponse({ value }: msgChannelUpgradeConfirmResponseParams): EncodeObject;
    queryChannelRequest({ value }: queryChannelRequestParams): EncodeObject;
    queryUnreceivedAcksRequest({ value }: queryUnreceivedAcksRequestParams): EncodeObject;
    queryNextSequenceSendResponse({ value }: queryNextSequenceSendResponseParams): EncodeObject;
    queryUpgradeRequest({ value }: queryUpgradeRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgChannelOpenConfirmResponse({ value }: msgChannelOpenConfirmResponseParams): EncodeObject;
    queryChannelClientStateResponse({ value }: queryChannelClientStateResponseParams): EncodeObject;
    queryPacketCommitmentsRequest({ value }: queryPacketCommitmentsRequestParams): EncodeObject;
    queryUpgradeErrorResponse({ value }: queryUpgradeErrorResponseParams): EncodeObject;
    msgChannelUpgradeTimeout({ value }: msgChannelUpgradeTimeoutParams): EncodeObject;
    msgChannelOpenTryResponse({ value }: msgChannelOpenTryResponseParams): EncodeObject;
    queryConnectionChannelsResponse({ value }: queryConnectionChannelsResponseParams): EncodeObject;
    queryChannelConsensusStateResponse({ value }: queryChannelConsensusStateResponseParams): EncodeObject;
    queryNextSequenceSendRequest({ value }: queryNextSequenceSendRequestParams): EncodeObject;
    queryUpgradeErrorRequest({ value }: queryUpgradeErrorRequestParams): EncodeObject;
    msgChannelUpgradeAckResponse({ value }: msgChannelUpgradeAckResponseParams): EncodeObject;
    queryPacketCommitmentsResponse({ value }: queryPacketCommitmentsResponseParams): EncodeObject;
    counterparty({ value }: counterpartyParams): EncodeObject;
    msgTimeoutOnCloseResponse({ value }: msgTimeoutOnCloseResponseParams): EncodeObject;
    msgAcknowledgementResponse({ value }: msgAcknowledgementResponseParams): EncodeObject;
    queryPacketAcknowledgementsRequest({ value }: queryPacketAcknowledgementsRequestParams): EncodeObject;
    queryPacketAcknowledgementsResponse({ value }: queryPacketAcknowledgementsResponseParams): EncodeObject;
    upgradeFields({ value }: upgradeFieldsParams): EncodeObject;
    msgChannelCloseInit({ value }: msgChannelCloseInitParams): EncodeObject;
    queryUnreceivedPacketsResponse({ value }: queryUnreceivedPacketsResponseParams): EncodeObject;
    acknowledgement({ value }: acknowledgementParams): EncodeObject;
    msgChannelUpgradeInitResponse({ value }: msgChannelUpgradeInitResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    packet({ value }: packetParams): EncodeObject;
    msgTimeoutResponse({ value }: msgTimeoutResponseParams): EncodeObject;
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
        IbcCoreChannelV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
