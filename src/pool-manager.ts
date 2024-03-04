import {
  Approval as ApprovalEvent,
  DynamicSwapFeeUpdated as DynamicSwapFeeUpdatedEvent,
  Initialize as InitializeEvent,
  ModifyLiquidity as ModifyLiquidityEvent,
  OperatorSet as OperatorSetEvent,
  OwnerChanged as OwnerChangedEvent,
  ProtocolFeeControllerUpdated as ProtocolFeeControllerUpdatedEvent,
  ProtocolFeeUpdated as ProtocolFeeUpdatedEvent,
  Swap as SwapEvent,
  Transfer as TransferEvent
} from "../generated/PoolManager/PoolManager"
import {
  Approval,
  DynamicSwapFeeUpdated,
  Initialize,
  ModifyLiquidity,
  OperatorSet,
  OwnerChanged,
  ProtocolFeeControllerUpdated,
  ProtocolFeeUpdated,
  Swap,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.PoolManager_id = event.params.id
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDynamicSwapFeeUpdated(
  event: DynamicSwapFeeUpdatedEvent
): void {
  let entity = new DynamicSwapFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.PoolManager_id = event.params.id
  entity.dynamicSwapFee = event.params.dynamicSwapFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialize(event: InitializeEvent): void {
  let entity = new Initialize(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.PoolManager_id = event.params.id
  entity.currency0 = event.params.currency0
  entity.currency1 = event.params.currency1
  entity.fee = event.params.fee
  entity.tickSpacing = event.params.tickSpacing
  entity.hooks = event.params.hooks

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModifyLiquidity(event: ModifyLiquidityEvent): void {
  let entity = new ModifyLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.PoolManager_id = event.params.id
  entity.sender = event.params.sender
  entity.tickLower = event.params.tickLower
  entity.tickUpper = event.params.tickUpper
  entity.liquidityDelta = event.params.liquidityDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOperatorSet(event: OperatorSetEvent): void {
  let entity = new OperatorSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerChanged(event: OwnerChangedEvent): void {
  let entity = new OwnerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProtocolFeeControllerUpdated(
  event: ProtocolFeeControllerUpdatedEvent
): void {
  let entity = new ProtocolFeeControllerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.protocolFeeController = event.params.protocolFeeController

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProtocolFeeUpdated(event: ProtocolFeeUpdatedEvent): void {
  let entity = new ProtocolFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.PoolManager_id = event.params.id
  entity.protocolFee = event.params.protocolFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.PoolManager_id = event.params.id
  entity.sender = event.params.sender
  entity.amount0 = event.params.amount0
  entity.amount1 = event.params.amount1
  entity.sqrtPriceX96 = event.params.sqrtPriceX96
  entity.liquidity = event.params.liquidity
  entity.tick = event.params.tick
  entity.fee = event.params.fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.from = event.params.from
  entity.to = event.params.to
  entity.PoolManager_id = event.params.id
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
