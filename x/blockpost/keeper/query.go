package keeper

import (
	"BlockPost/x/blockpost/types"
)

var _ types.QueryServer = Keeper{}
