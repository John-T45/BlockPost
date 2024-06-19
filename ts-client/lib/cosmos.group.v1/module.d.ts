import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateGroupMetadataResponse } from "./types/cosmos/group/v1/tx";
import { EventUpdateGroup } from "./types/cosmos/group/v1/events";
import { QueryGroupInfoResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupPoliciesByAdminRequest } from "./types/cosmos/group/v1/query";
import { QueryVoteByProposalVoterResponse } from "./types/cosmos/group/v1/query";
import { QueryTallyResultRequest } from "./types/cosmos/group/v1/query";
import { GroupInfo } from "./types/cosmos/group/v1/types";
import { TallyResult } from "./types/cosmos/group/v1/types";
import { QueryGroupInfoRequest } from "./types/cosmos/group/v1/query";
import { QueryGroupsByMemberResponse } from "./types/cosmos/group/v1/query";
import { MsgExecResponse } from "./types/cosmos/group/v1/tx";
import { MsgVote } from "./types/cosmos/group/v1/tx";
import { QueryGroupsByAdminResponse } from "./types/cosmos/group/v1/query";
import { QueryProposalsByGroupPolicyRequest } from "./types/cosmos/group/v1/query";
import { Vote } from "./types/cosmos/group/v1/types";
import { GenesisState } from "./types/cosmos/group/v1/genesis";
import { MsgExec } from "./types/cosmos/group/v1/tx";
import { EventVote } from "./types/cosmos/group/v1/events";
import { MsgUpdateGroupAdminResponse } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyMetadataResponse } from "./types/cosmos/group/v1/tx";
import { QueryGroupPolicyInfoResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupPoliciesByAdminResponse } from "./types/cosmos/group/v1/query";
import { QueryVotesByProposalResponse } from "./types/cosmos/group/v1/query";
import { ThresholdDecisionPolicy } from "./types/cosmos/group/v1/types";
import { MsgUpdateGroupPolicyMetadata } from "./types/cosmos/group/v1/tx";
import { EventProposalPruned } from "./types/cosmos/group/v1/events";
import { EventExec } from "./types/cosmos/group/v1/events";
import { QueryGroupMembersResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupsByAdminRequest } from "./types/cosmos/group/v1/query";
import { QueryProposalRequest } from "./types/cosmos/group/v1/query";
import { PercentageDecisionPolicy } from "./types/cosmos/group/v1/types";
import { GroupMember } from "./types/cosmos/group/v1/types";
import { MsgCreateGroupWithPolicyResponse } from "./types/cosmos/group/v1/tx";
import { MsgVoteResponse } from "./types/cosmos/group/v1/tx";
import { QueryProposalResponse } from "./types/cosmos/group/v1/query";
import { QueryProposalsByGroupPolicyResponse } from "./types/cosmos/group/v1/query";
import { GroupPolicyInfo } from "./types/cosmos/group/v1/types";
import { MsgCreateGroupWithPolicy } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyDecisionPolicyResponse } from "./types/cosmos/group/v1/tx";
import { MsgSubmitProposal } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyAdmin } from "./types/cosmos/group/v1/tx";
import { EventSubmitProposal } from "./types/cosmos/group/v1/events";
import { QueryGroupsResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupAdmin } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupResponse } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupMembersResponse } from "./types/cosmos/group/v1/tx";
import { EventWithdrawProposal } from "./types/cosmos/group/v1/events";
import { EventLeaveGroup } from "./types/cosmos/group/v1/events";
import { QueryGroupPolicyInfoRequest } from "./types/cosmos/group/v1/query";
import { MemberRequest } from "./types/cosmos/group/v1/types";
import { MsgCreateGroup } from "./types/cosmos/group/v1/tx";
import { EventCreateGroup } from "./types/cosmos/group/v1/events";
import { QueryVoteByProposalVoterRequest } from "./types/cosmos/group/v1/query";
import { QueryVotesByVoterRequest } from "./types/cosmos/group/v1/query";
import { QueryGroupsRequest } from "./types/cosmos/group/v1/query";
import { MsgCreateGroupPolicy } from "./types/cosmos/group/v1/tx";
import { QueryVotesByProposalRequest } from "./types/cosmos/group/v1/query";
import { QueryTallyResultResponse } from "./types/cosmos/group/v1/query";
import { DecisionPolicyWindows } from "./types/cosmos/group/v1/types";
import { MsgUpdateGroupPolicyDecisionPolicy } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupPolicyResponse } from "./types/cosmos/group/v1/tx";
import { MsgWithdrawProposal } from "./types/cosmos/group/v1/tx";
import { EventUpdateGroupPolicy } from "./types/cosmos/group/v1/events";
import { QueryGroupPoliciesByGroupResponse } from "./types/cosmos/group/v1/query";
import { QueryVotesByVoterResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupMetadata } from "./types/cosmos/group/v1/tx";
import { MsgSubmitProposalResponse } from "./types/cosmos/group/v1/tx";
import { EventCreateGroupPolicy } from "./types/cosmos/group/v1/events";
import { QueryGroupPoliciesByGroupRequest } from "./types/cosmos/group/v1/query";
import { QueryGroupsByMemberRequest } from "./types/cosmos/group/v1/query";
import { Member } from "./types/cosmos/group/v1/types";
import { MsgUpdateGroupMembers } from "./types/cosmos/group/v1/tx";
import { MsgWithdrawProposalResponse } from "./types/cosmos/group/v1/tx";
import { MsgLeaveGroup } from "./types/cosmos/group/v1/tx";
import { MsgLeaveGroupResponse } from "./types/cosmos/group/v1/tx";
import { QueryGroupMembersRequest } from "./types/cosmos/group/v1/query";
import { Proposal } from "./types/cosmos/group/v1/types";
import { MsgUpdateGroupPolicyAdminResponse } from "./types/cosmos/group/v1/tx";
export { MsgUpdateGroupMetadataResponse, EventUpdateGroup, QueryGroupInfoResponse, QueryGroupPoliciesByAdminRequest, QueryVoteByProposalVoterResponse, QueryTallyResultRequest, GroupInfo, TallyResult, QueryGroupInfoRequest, QueryGroupsByMemberResponse, MsgExecResponse, MsgVote, QueryGroupsByAdminResponse, QueryProposalsByGroupPolicyRequest, Vote, GenesisState, MsgExec, EventVote, MsgUpdateGroupAdminResponse, MsgUpdateGroupPolicyMetadataResponse, QueryGroupPolicyInfoResponse, QueryGroupPoliciesByAdminResponse, QueryVotesByProposalResponse, ThresholdDecisionPolicy, MsgUpdateGroupPolicyMetadata, EventProposalPruned, EventExec, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryProposalRequest, PercentageDecisionPolicy, GroupMember, MsgCreateGroupWithPolicyResponse, MsgVoteResponse, QueryProposalResponse, QueryProposalsByGroupPolicyResponse, GroupPolicyInfo, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgSubmitProposal, MsgUpdateGroupPolicyAdmin, EventSubmitProposal, QueryGroupsResponse, MsgUpdateGroupAdmin, MsgCreateGroupResponse, MsgUpdateGroupMembersResponse, EventWithdrawProposal, EventLeaveGroup, QueryGroupPolicyInfoRequest, MemberRequest, MsgCreateGroup, EventCreateGroup, QueryVoteByProposalVoterRequest, QueryVotesByVoterRequest, QueryGroupsRequest, MsgCreateGroupPolicy, QueryVotesByProposalRequest, QueryTallyResultResponse, DecisionPolicyWindows, MsgUpdateGroupPolicyDecisionPolicy, MsgCreateGroupPolicyResponse, MsgWithdrawProposal, EventUpdateGroupPolicy, QueryGroupPoliciesByGroupResponse, QueryVotesByVoterResponse, MsgUpdateGroupMetadata, MsgSubmitProposalResponse, EventCreateGroupPolicy, QueryGroupPoliciesByGroupRequest, QueryGroupsByMemberRequest, Member, MsgUpdateGroupMembers, MsgWithdrawProposalResponse, MsgLeaveGroup, MsgLeaveGroupResponse, QueryGroupMembersRequest, Proposal, MsgUpdateGroupPolicyAdminResponse };
type sendMsgUpdateGroupMetadataResponseParams = {
    value: MsgUpdateGroupMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEventUpdateGroupParams = {
    value: EventUpdateGroup;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupInfoResponseParams = {
    value: QueryGroupInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByAdminRequestParams = {
    value: QueryGroupPoliciesByAdminRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteByProposalVoterResponseParams = {
    value: QueryVoteByProposalVoterResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGroupInfoParams = {
    value: GroupInfo;
    fee?: StdFee;
    memo?: string;
};
type sendTallyResultParams = {
    value: TallyResult;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupInfoRequestParams = {
    value: QueryGroupInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByMemberResponseParams = {
    value: QueryGroupsByMemberResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecResponseParams = {
    value: MsgExecResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteParams = {
    value: MsgVote;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByAdminResponseParams = {
    value: QueryGroupsByAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsByGroupPolicyRequestParams = {
    value: QueryProposalsByGroupPolicyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendVoteParams = {
    value: Vote;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecParams = {
    value: MsgExec;
    fee?: StdFee;
    memo?: string;
};
type sendEventVoteParams = {
    value: EventVote;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupAdminResponseParams = {
    value: MsgUpdateGroupAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyMetadataResponseParams = {
    value: MsgUpdateGroupPolicyMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPolicyInfoResponseParams = {
    value: QueryGroupPolicyInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByAdminResponseParams = {
    value: QueryGroupPoliciesByAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByProposalResponseParams = {
    value: QueryVotesByProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendThresholdDecisionPolicyParams = {
    value: ThresholdDecisionPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyMetadataParams = {
    value: MsgUpdateGroupPolicyMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendEventProposalPrunedParams = {
    value: EventProposalPruned;
    fee?: StdFee;
    memo?: string;
};
type sendEventExecParams = {
    value: EventExec;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupMembersResponseParams = {
    value: QueryGroupMembersResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByAdminRequestParams = {
    value: QueryGroupsByAdminRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalRequestParams = {
    value: QueryProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendPercentageDecisionPolicyParams = {
    value: PercentageDecisionPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendGroupMemberParams = {
    value: GroupMember;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupWithPolicyResponseParams = {
    value: MsgCreateGroupWithPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteResponseParams = {
    value: MsgVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalResponseParams = {
    value: QueryProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsByGroupPolicyResponseParams = {
    value: QueryProposalsByGroupPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGroupPolicyInfoParams = {
    value: GroupPolicyInfo;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupWithPolicyParams = {
    value: MsgCreateGroupWithPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyDecisionPolicyResponseParams = {
    value: MsgUpdateGroupPolicyDecisionPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalParams = {
    value: MsgSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyAdminParams = {
    value: MsgUpdateGroupPolicyAdmin;
    fee?: StdFee;
    memo?: string;
};
type sendEventSubmitProposalParams = {
    value: EventSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsResponseParams = {
    value: QueryGroupsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupAdminParams = {
    value: MsgUpdateGroupAdmin;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupResponseParams = {
    value: MsgCreateGroupResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMembersResponseParams = {
    value: MsgUpdateGroupMembersResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEventWithdrawProposalParams = {
    value: EventWithdrawProposal;
    fee?: StdFee;
    memo?: string;
};
type sendEventLeaveGroupParams = {
    value: EventLeaveGroup;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPolicyInfoRequestParams = {
    value: QueryGroupPolicyInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMemberRequestParams = {
    value: MemberRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupParams = {
    value: MsgCreateGroup;
    fee?: StdFee;
    memo?: string;
};
type sendEventCreateGroupParams = {
    value: EventCreateGroup;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteByProposalVoterRequestParams = {
    value: QueryVoteByProposalVoterRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByVoterRequestParams = {
    value: QueryVotesByVoterRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsRequestParams = {
    value: QueryGroupsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupPolicyParams = {
    value: MsgCreateGroupPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByProposalRequestParams = {
    value: QueryVotesByProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDecisionPolicyWindowsParams = {
    value: DecisionPolicyWindows;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyDecisionPolicyParams = {
    value: MsgUpdateGroupPolicyDecisionPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupPolicyResponseParams = {
    value: MsgCreateGroupPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawProposalParams = {
    value: MsgWithdrawProposal;
    fee?: StdFee;
    memo?: string;
};
type sendEventUpdateGroupPolicyParams = {
    value: EventUpdateGroupPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByGroupResponseParams = {
    value: QueryGroupPoliciesByGroupResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByVoterResponseParams = {
    value: QueryVotesByVoterResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMetadataParams = {
    value: MsgUpdateGroupMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEventCreateGroupPolicyParams = {
    value: EventCreateGroupPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByGroupRequestParams = {
    value: QueryGroupPoliciesByGroupRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByMemberRequestParams = {
    value: QueryGroupsByMemberRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMemberParams = {
    value: Member;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMembersParams = {
    value: MsgUpdateGroupMembers;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawProposalResponseParams = {
    value: MsgWithdrawProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgLeaveGroupParams = {
    value: MsgLeaveGroup;
    fee?: StdFee;
    memo?: string;
};
type sendMsgLeaveGroupResponseParams = {
    value: MsgLeaveGroupResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupMembersRequestParams = {
    value: QueryGroupMembersRequest;
    fee?: StdFee;
    memo?: string;
};
type sendProposalParams = {
    value: Proposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyAdminResponseParams = {
    value: MsgUpdateGroupPolicyAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type msgUpdateGroupMetadataResponseParams = {
    value: MsgUpdateGroupMetadataResponse;
};
type eventUpdateGroupParams = {
    value: EventUpdateGroup;
};
type queryGroupInfoResponseParams = {
    value: QueryGroupInfoResponse;
};
type queryGroupPoliciesByAdminRequestParams = {
    value: QueryGroupPoliciesByAdminRequest;
};
type queryVoteByProposalVoterResponseParams = {
    value: QueryVoteByProposalVoterResponse;
};
type queryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
};
type groupInfoParams = {
    value: GroupInfo;
};
type tallyResultParams = {
    value: TallyResult;
};
type queryGroupInfoRequestParams = {
    value: QueryGroupInfoRequest;
};
type queryGroupsByMemberResponseParams = {
    value: QueryGroupsByMemberResponse;
};
type msgExecResponseParams = {
    value: MsgExecResponse;
};
type msgVoteParams = {
    value: MsgVote;
};
type queryGroupsByAdminResponseParams = {
    value: QueryGroupsByAdminResponse;
};
type queryProposalsByGroupPolicyRequestParams = {
    value: QueryProposalsByGroupPolicyRequest;
};
type voteParams = {
    value: Vote;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgExecParams = {
    value: MsgExec;
};
type eventVoteParams = {
    value: EventVote;
};
type msgUpdateGroupAdminResponseParams = {
    value: MsgUpdateGroupAdminResponse;
};
type msgUpdateGroupPolicyMetadataResponseParams = {
    value: MsgUpdateGroupPolicyMetadataResponse;
};
type queryGroupPolicyInfoResponseParams = {
    value: QueryGroupPolicyInfoResponse;
};
type queryGroupPoliciesByAdminResponseParams = {
    value: QueryGroupPoliciesByAdminResponse;
};
type queryVotesByProposalResponseParams = {
    value: QueryVotesByProposalResponse;
};
type thresholdDecisionPolicyParams = {
    value: ThresholdDecisionPolicy;
};
type msgUpdateGroupPolicyMetadataParams = {
    value: MsgUpdateGroupPolicyMetadata;
};
type eventProposalPrunedParams = {
    value: EventProposalPruned;
};
type eventExecParams = {
    value: EventExec;
};
type queryGroupMembersResponseParams = {
    value: QueryGroupMembersResponse;
};
type queryGroupsByAdminRequestParams = {
    value: QueryGroupsByAdminRequest;
};
type queryProposalRequestParams = {
    value: QueryProposalRequest;
};
type percentageDecisionPolicyParams = {
    value: PercentageDecisionPolicy;
};
type groupMemberParams = {
    value: GroupMember;
};
type msgCreateGroupWithPolicyResponseParams = {
    value: MsgCreateGroupWithPolicyResponse;
};
type msgVoteResponseParams = {
    value: MsgVoteResponse;
};
type queryProposalResponseParams = {
    value: QueryProposalResponse;
};
type queryProposalsByGroupPolicyResponseParams = {
    value: QueryProposalsByGroupPolicyResponse;
};
type groupPolicyInfoParams = {
    value: GroupPolicyInfo;
};
type msgCreateGroupWithPolicyParams = {
    value: MsgCreateGroupWithPolicy;
};
type msgUpdateGroupPolicyDecisionPolicyResponseParams = {
    value: MsgUpdateGroupPolicyDecisionPolicyResponse;
};
type msgSubmitProposalParams = {
    value: MsgSubmitProposal;
};
type msgUpdateGroupPolicyAdminParams = {
    value: MsgUpdateGroupPolicyAdmin;
};
type eventSubmitProposalParams = {
    value: EventSubmitProposal;
};
type queryGroupsResponseParams = {
    value: QueryGroupsResponse;
};
type msgUpdateGroupAdminParams = {
    value: MsgUpdateGroupAdmin;
};
type msgCreateGroupResponseParams = {
    value: MsgCreateGroupResponse;
};
type msgUpdateGroupMembersResponseParams = {
    value: MsgUpdateGroupMembersResponse;
};
type eventWithdrawProposalParams = {
    value: EventWithdrawProposal;
};
type eventLeaveGroupParams = {
    value: EventLeaveGroup;
};
type queryGroupPolicyInfoRequestParams = {
    value: QueryGroupPolicyInfoRequest;
};
type memberRequestParams = {
    value: MemberRequest;
};
type msgCreateGroupParams = {
    value: MsgCreateGroup;
};
type eventCreateGroupParams = {
    value: EventCreateGroup;
};
type queryVoteByProposalVoterRequestParams = {
    value: QueryVoteByProposalVoterRequest;
};
type queryVotesByVoterRequestParams = {
    value: QueryVotesByVoterRequest;
};
type queryGroupsRequestParams = {
    value: QueryGroupsRequest;
};
type msgCreateGroupPolicyParams = {
    value: MsgCreateGroupPolicy;
};
type queryVotesByProposalRequestParams = {
    value: QueryVotesByProposalRequest;
};
type queryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
};
type decisionPolicyWindowsParams = {
    value: DecisionPolicyWindows;
};
type msgUpdateGroupPolicyDecisionPolicyParams = {
    value: MsgUpdateGroupPolicyDecisionPolicy;
};
type msgCreateGroupPolicyResponseParams = {
    value: MsgCreateGroupPolicyResponse;
};
type msgWithdrawProposalParams = {
    value: MsgWithdrawProposal;
};
type eventUpdateGroupPolicyParams = {
    value: EventUpdateGroupPolicy;
};
type queryGroupPoliciesByGroupResponseParams = {
    value: QueryGroupPoliciesByGroupResponse;
};
type queryVotesByVoterResponseParams = {
    value: QueryVotesByVoterResponse;
};
type msgUpdateGroupMetadataParams = {
    value: MsgUpdateGroupMetadata;
};
type msgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
};
type eventCreateGroupPolicyParams = {
    value: EventCreateGroupPolicy;
};
type queryGroupPoliciesByGroupRequestParams = {
    value: QueryGroupPoliciesByGroupRequest;
};
type queryGroupsByMemberRequestParams = {
    value: QueryGroupsByMemberRequest;
};
type memberParams = {
    value: Member;
};
type msgUpdateGroupMembersParams = {
    value: MsgUpdateGroupMembers;
};
type msgWithdrawProposalResponseParams = {
    value: MsgWithdrawProposalResponse;
};
type msgLeaveGroupParams = {
    value: MsgLeaveGroup;
};
type msgLeaveGroupResponseParams = {
    value: MsgLeaveGroupResponse;
};
type queryGroupMembersRequestParams = {
    value: QueryGroupMembersRequest;
};
type proposalParams = {
    value: Proposal;
};
type msgUpdateGroupPolicyAdminResponseParams = {
    value: MsgUpdateGroupPolicyAdminResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateGroupMetadataResponse({ value, fee, memo }: sendMsgUpdateGroupMetadataResponseParams): Promise<DeliverTxResponse>;
    sendEventUpdateGroup({ value, fee, memo }: sendEventUpdateGroupParams): Promise<DeliverTxResponse>;
    sendQueryGroupInfoResponse({ value, fee, memo }: sendQueryGroupInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByAdminRequest({ value, fee, memo }: sendQueryGroupPoliciesByAdminRequestParams): Promise<DeliverTxResponse>;
    sendQueryVoteByProposalVoterResponse({ value, fee, memo }: sendQueryVoteByProposalVoterResponseParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultRequest({ value, fee, memo }: sendQueryTallyResultRequestParams): Promise<DeliverTxResponse>;
    sendGroupInfo({ value, fee, memo }: sendGroupInfoParams): Promise<DeliverTxResponse>;
    sendTallyResult({ value, fee, memo }: sendTallyResultParams): Promise<DeliverTxResponse>;
    sendQueryGroupInfoRequest({ value, fee, memo }: sendQueryGroupInfoRequestParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByMemberResponse({ value, fee, memo }: sendQueryGroupsByMemberResponseParams): Promise<DeliverTxResponse>;
    sendMsgExecResponse({ value, fee, memo }: sendMsgExecResponseParams): Promise<DeliverTxResponse>;
    sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByAdminResponse({ value, fee, memo }: sendQueryGroupsByAdminResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalsByGroupPolicyRequest({ value, fee, memo }: sendQueryProposalsByGroupPolicyRequestParams): Promise<DeliverTxResponse>;
    sendVote({ value, fee, memo }: sendVoteParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgExec({ value, fee, memo }: sendMsgExecParams): Promise<DeliverTxResponse>;
    sendEventVote({ value, fee, memo }: sendEventVoteParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupAdminResponse({ value, fee, memo }: sendMsgUpdateGroupAdminResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyMetadataResponse({ value, fee, memo }: sendMsgUpdateGroupPolicyMetadataResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupPolicyInfoResponse({ value, fee, memo }: sendQueryGroupPolicyInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByAdminResponse({ value, fee, memo }: sendQueryGroupPoliciesByAdminResponseParams): Promise<DeliverTxResponse>;
    sendQueryVotesByProposalResponse({ value, fee, memo }: sendQueryVotesByProposalResponseParams): Promise<DeliverTxResponse>;
    sendThresholdDecisionPolicy({ value, fee, memo }: sendThresholdDecisionPolicyParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyMetadata({ value, fee, memo }: sendMsgUpdateGroupPolicyMetadataParams): Promise<DeliverTxResponse>;
    sendEventProposalPruned({ value, fee, memo }: sendEventProposalPrunedParams): Promise<DeliverTxResponse>;
    sendEventExec({ value, fee, memo }: sendEventExecParams): Promise<DeliverTxResponse>;
    sendQueryGroupMembersResponse({ value, fee, memo }: sendQueryGroupMembersResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByAdminRequest({ value, fee, memo }: sendQueryGroupsByAdminRequestParams): Promise<DeliverTxResponse>;
    sendQueryProposalRequest({ value, fee, memo }: sendQueryProposalRequestParams): Promise<DeliverTxResponse>;
    sendPercentageDecisionPolicy({ value, fee, memo }: sendPercentageDecisionPolicyParams): Promise<DeliverTxResponse>;
    sendGroupMember({ value, fee, memo }: sendGroupMemberParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupWithPolicyResponse({ value, fee, memo }: sendMsgCreateGroupWithPolicyResponseParams): Promise<DeliverTxResponse>;
    sendMsgVoteResponse({ value, fee, memo }: sendMsgVoteResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalResponse({ value, fee, memo }: sendQueryProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalsByGroupPolicyResponse({ value, fee, memo }: sendQueryProposalsByGroupPolicyResponseParams): Promise<DeliverTxResponse>;
    sendGroupPolicyInfo({ value, fee, memo }: sendGroupPolicyInfoParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupWithPolicy({ value, fee, memo }: sendMsgCreateGroupWithPolicyParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyDecisionPolicyResponse({ value, fee, memo }: sendMsgUpdateGroupPolicyDecisionPolicyResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyAdmin({ value, fee, memo }: sendMsgUpdateGroupPolicyAdminParams): Promise<DeliverTxResponse>;
    sendEventSubmitProposal({ value, fee, memo }: sendEventSubmitProposalParams): Promise<DeliverTxResponse>;
    sendQueryGroupsResponse({ value, fee, memo }: sendQueryGroupsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupAdmin({ value, fee, memo }: sendMsgUpdateGroupAdminParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupResponse({ value, fee, memo }: sendMsgCreateGroupResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMembersResponse({ value, fee, memo }: sendMsgUpdateGroupMembersResponseParams): Promise<DeliverTxResponse>;
    sendEventWithdrawProposal({ value, fee, memo }: sendEventWithdrawProposalParams): Promise<DeliverTxResponse>;
    sendEventLeaveGroup({ value, fee, memo }: sendEventLeaveGroupParams): Promise<DeliverTxResponse>;
    sendQueryGroupPolicyInfoRequest({ value, fee, memo }: sendQueryGroupPolicyInfoRequestParams): Promise<DeliverTxResponse>;
    sendMemberRequest({ value, fee, memo }: sendMemberRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroup({ value, fee, memo }: sendMsgCreateGroupParams): Promise<DeliverTxResponse>;
    sendEventCreateGroup({ value, fee, memo }: sendEventCreateGroupParams): Promise<DeliverTxResponse>;
    sendQueryVoteByProposalVoterRequest({ value, fee, memo }: sendQueryVoteByProposalVoterRequestParams): Promise<DeliverTxResponse>;
    sendQueryVotesByVoterRequest({ value, fee, memo }: sendQueryVotesByVoterRequestParams): Promise<DeliverTxResponse>;
    sendQueryGroupsRequest({ value, fee, memo }: sendQueryGroupsRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupPolicy({ value, fee, memo }: sendMsgCreateGroupPolicyParams): Promise<DeliverTxResponse>;
    sendQueryVotesByProposalRequest({ value, fee, memo }: sendQueryVotesByProposalRequestParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultResponse({ value, fee, memo }: sendQueryTallyResultResponseParams): Promise<DeliverTxResponse>;
    sendDecisionPolicyWindows({ value, fee, memo }: sendDecisionPolicyWindowsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyDecisionPolicy({ value, fee, memo }: sendMsgUpdateGroupPolicyDecisionPolicyParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupPolicyResponse({ value, fee, memo }: sendMsgCreateGroupPolicyResponseParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawProposal({ value, fee, memo }: sendMsgWithdrawProposalParams): Promise<DeliverTxResponse>;
    sendEventUpdateGroupPolicy({ value, fee, memo }: sendEventUpdateGroupPolicyParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByGroupResponse({ value, fee, memo }: sendQueryGroupPoliciesByGroupResponseParams): Promise<DeliverTxResponse>;
    sendQueryVotesByVoterResponse({ value, fee, memo }: sendQueryVotesByVoterResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMetadata({ value, fee, memo }: sendMsgUpdateGroupMetadataParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposalResponse({ value, fee, memo }: sendMsgSubmitProposalResponseParams): Promise<DeliverTxResponse>;
    sendEventCreateGroupPolicy({ value, fee, memo }: sendEventCreateGroupPolicyParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByGroupRequest({ value, fee, memo }: sendQueryGroupPoliciesByGroupRequestParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByMemberRequest({ value, fee, memo }: sendQueryGroupsByMemberRequestParams): Promise<DeliverTxResponse>;
    sendMember({ value, fee, memo }: sendMemberParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMembers({ value, fee, memo }: sendMsgUpdateGroupMembersParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawProposalResponse({ value, fee, memo }: sendMsgWithdrawProposalResponseParams): Promise<DeliverTxResponse>;
    sendMsgLeaveGroup({ value, fee, memo }: sendMsgLeaveGroupParams): Promise<DeliverTxResponse>;
    sendMsgLeaveGroupResponse({ value, fee, memo }: sendMsgLeaveGroupResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupMembersRequest({ value, fee, memo }: sendQueryGroupMembersRequestParams): Promise<DeliverTxResponse>;
    sendProposal({ value, fee, memo }: sendProposalParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyAdminResponse({ value, fee, memo }: sendMsgUpdateGroupPolicyAdminResponseParams): Promise<DeliverTxResponse>;
    msgUpdateGroupMetadataResponse({ value }: msgUpdateGroupMetadataResponseParams): EncodeObject;
    eventUpdateGroup({ value }: eventUpdateGroupParams): EncodeObject;
    queryGroupInfoResponse({ value }: queryGroupInfoResponseParams): EncodeObject;
    queryGroupPoliciesByAdminRequest({ value }: queryGroupPoliciesByAdminRequestParams): EncodeObject;
    queryVoteByProposalVoterResponse({ value }: queryVoteByProposalVoterResponseParams): EncodeObject;
    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject;
    groupInfo({ value }: groupInfoParams): EncodeObject;
    tallyResult({ value }: tallyResultParams): EncodeObject;
    queryGroupInfoRequest({ value }: queryGroupInfoRequestParams): EncodeObject;
    queryGroupsByMemberResponse({ value }: queryGroupsByMemberResponseParams): EncodeObject;
    msgExecResponse({ value }: msgExecResponseParams): EncodeObject;
    msgVote({ value }: msgVoteParams): EncodeObject;
    queryGroupsByAdminResponse({ value }: queryGroupsByAdminResponseParams): EncodeObject;
    queryProposalsByGroupPolicyRequest({ value }: queryProposalsByGroupPolicyRequestParams): EncodeObject;
    vote({ value }: voteParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgExec({ value }: msgExecParams): EncodeObject;
    eventVote({ value }: eventVoteParams): EncodeObject;
    msgUpdateGroupAdminResponse({ value }: msgUpdateGroupAdminResponseParams): EncodeObject;
    msgUpdateGroupPolicyMetadataResponse({ value }: msgUpdateGroupPolicyMetadataResponseParams): EncodeObject;
    queryGroupPolicyInfoResponse({ value }: queryGroupPolicyInfoResponseParams): EncodeObject;
    queryGroupPoliciesByAdminResponse({ value }: queryGroupPoliciesByAdminResponseParams): EncodeObject;
    queryVotesByProposalResponse({ value }: queryVotesByProposalResponseParams): EncodeObject;
    thresholdDecisionPolicy({ value }: thresholdDecisionPolicyParams): EncodeObject;
    msgUpdateGroupPolicyMetadata({ value }: msgUpdateGroupPolicyMetadataParams): EncodeObject;
    eventProposalPruned({ value }: eventProposalPrunedParams): EncodeObject;
    eventExec({ value }: eventExecParams): EncodeObject;
    queryGroupMembersResponse({ value }: queryGroupMembersResponseParams): EncodeObject;
    queryGroupsByAdminRequest({ value }: queryGroupsByAdminRequestParams): EncodeObject;
    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject;
    percentageDecisionPolicy({ value }: percentageDecisionPolicyParams): EncodeObject;
    groupMember({ value }: groupMemberParams): EncodeObject;
    msgCreateGroupWithPolicyResponse({ value }: msgCreateGroupWithPolicyResponseParams): EncodeObject;
    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject;
    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject;
    queryProposalsByGroupPolicyResponse({ value }: queryProposalsByGroupPolicyResponseParams): EncodeObject;
    groupPolicyInfo({ value }: groupPolicyInfoParams): EncodeObject;
    msgCreateGroupWithPolicy({ value }: msgCreateGroupWithPolicyParams): EncodeObject;
    msgUpdateGroupPolicyDecisionPolicyResponse({ value }: msgUpdateGroupPolicyDecisionPolicyResponseParams): EncodeObject;
    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject;
    msgUpdateGroupPolicyAdmin({ value }: msgUpdateGroupPolicyAdminParams): EncodeObject;
    eventSubmitProposal({ value }: eventSubmitProposalParams): EncodeObject;
    queryGroupsResponse({ value }: queryGroupsResponseParams): EncodeObject;
    msgUpdateGroupAdmin({ value }: msgUpdateGroupAdminParams): EncodeObject;
    msgCreateGroupResponse({ value }: msgCreateGroupResponseParams): EncodeObject;
    msgUpdateGroupMembersResponse({ value }: msgUpdateGroupMembersResponseParams): EncodeObject;
    eventWithdrawProposal({ value }: eventWithdrawProposalParams): EncodeObject;
    eventLeaveGroup({ value }: eventLeaveGroupParams): EncodeObject;
    queryGroupPolicyInfoRequest({ value }: queryGroupPolicyInfoRequestParams): EncodeObject;
    memberRequest({ value }: memberRequestParams): EncodeObject;
    msgCreateGroup({ value }: msgCreateGroupParams): EncodeObject;
    eventCreateGroup({ value }: eventCreateGroupParams): EncodeObject;
    queryVoteByProposalVoterRequest({ value }: queryVoteByProposalVoterRequestParams): EncodeObject;
    queryVotesByVoterRequest({ value }: queryVotesByVoterRequestParams): EncodeObject;
    queryGroupsRequest({ value }: queryGroupsRequestParams): EncodeObject;
    msgCreateGroupPolicy({ value }: msgCreateGroupPolicyParams): EncodeObject;
    queryVotesByProposalRequest({ value }: queryVotesByProposalRequestParams): EncodeObject;
    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject;
    decisionPolicyWindows({ value }: decisionPolicyWindowsParams): EncodeObject;
    msgUpdateGroupPolicyDecisionPolicy({ value }: msgUpdateGroupPolicyDecisionPolicyParams): EncodeObject;
    msgCreateGroupPolicyResponse({ value }: msgCreateGroupPolicyResponseParams): EncodeObject;
    msgWithdrawProposal({ value }: msgWithdrawProposalParams): EncodeObject;
    eventUpdateGroupPolicy({ value }: eventUpdateGroupPolicyParams): EncodeObject;
    queryGroupPoliciesByGroupResponse({ value }: queryGroupPoliciesByGroupResponseParams): EncodeObject;
    queryVotesByVoterResponse({ value }: queryVotesByVoterResponseParams): EncodeObject;
    msgUpdateGroupMetadata({ value }: msgUpdateGroupMetadataParams): EncodeObject;
    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject;
    eventCreateGroupPolicy({ value }: eventCreateGroupPolicyParams): EncodeObject;
    queryGroupPoliciesByGroupRequest({ value }: queryGroupPoliciesByGroupRequestParams): EncodeObject;
    queryGroupsByMemberRequest({ value }: queryGroupsByMemberRequestParams): EncodeObject;
    member({ value }: memberParams): EncodeObject;
    msgUpdateGroupMembers({ value }: msgUpdateGroupMembersParams): EncodeObject;
    msgWithdrawProposalResponse({ value }: msgWithdrawProposalResponseParams): EncodeObject;
    msgLeaveGroup({ value }: msgLeaveGroupParams): EncodeObject;
    msgLeaveGroupResponse({ value }: msgLeaveGroupResponseParams): EncodeObject;
    queryGroupMembersRequest({ value }: queryGroupMembersRequestParams): EncodeObject;
    proposal({ value }: proposalParams): EncodeObject;
    msgUpdateGroupPolicyAdminResponse({ value }: msgUpdateGroupPolicyAdminResponseParams): EncodeObject;
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
        CosmosGroupV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
