import { GeneratedType } from "@cosmjs/proto-signing";
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

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/blockpost.blockpost.QueryParamsRequest", QueryParamsRequest],
    ["/blockpost.blockpost.QueryParamsResponse", QueryParamsResponse],
    ["/blockpost.blockpost.QueryListPostRequest", QueryListPostRequest],
    ["/blockpost.blockpost.QueryListPostResponse", QueryListPostResponse],
    ["/blockpost.blockpost.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/blockpost.blockpost.MsgUpdatePostResponse", MsgUpdatePostResponse],
    ["/blockpost.blockpost.Post", Post],
    ["/blockpost.blockpost.MsgDeletePost", MsgDeletePost],
    ["/blockpost.blockpost.QueryShowPostResponse", QueryShowPostResponse],
    ["/blockpost.blockpost.Params", Params],
    ["/blockpost.blockpost.GenesisState", GenesisState],
    ["/blockpost.blockpost.MsgUpdatePost", MsgUpdatePost],
    ["/blockpost.blockpost.MsgCreatePostResponse", MsgCreatePostResponse],
    ["/blockpost.blockpost.MsgDeletePostResponse", MsgDeletePostResponse],
    ["/blockpost.blockpost.QueryShowPostRequest", QueryShowPostRequest],
    ["/blockpost.blockpost.MsgUpdateParams", MsgUpdateParams],
    ["/blockpost.blockpost.MsgCreatePost", MsgCreatePost],
    
];

export { msgTypes }