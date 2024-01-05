import { networks } from '@safe-global/safe-core-sdk-utils/dist/src/eip-3770/config'

/**
 * A static shortName<->chainId dictionary
 * E.g.:
 *
 * {
 *   eth: '1',
 *   gor: '5',
 *   ...
 * }
 */
type Chains = Record<string, string>

const chains = networks.reduce<Chains>((result, { shortName, chainId }) => {
  result[shortName] = chainId.toString()
  result['arb-sepolia'] = '421614'
  result['xai'] = '660279'
  return result
}, {})

export default chains
