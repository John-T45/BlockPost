package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "BlockPost/testutil/keeper"
	"BlockPost/x/blockpost/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.BlockpostKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
