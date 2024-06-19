package blockpost_test

import (
	"testing"

	keepertest "BlockPost/testutil/keeper"
	"BlockPost/testutil/nullify"
	blockpost "BlockPost/x/blockpost/module"
	"BlockPost/x/blockpost/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BlockpostKeeper(t)
	blockpost.InitGenesis(ctx, k, genesisState)
	got := blockpost.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
